import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; // Для __dirname и __filename в ESM
import { pathToFileURL } from 'url'; // Для проверки, запущен ли скрипт напрямую

// --- КОНФИГУРАЦИЯ ---
// Добавьте сюда псевдонимы из вашего vite.config.js или tsconfig.json
// Пример: { '@': 'src', '~': 'src/components' }
const PATH_ALIASES = {
    '@': 'src', // Пример, замените на ваш, если есть
    // '~': 'src', // Еще пример
};

// Расширения файлов, которые считаются компонентами или модулями с компонентами
const COMPONENT_EXTENSIONS = ['.tsx', '.jsx', '.js', '.ts'];
// Расширения, которые нужно пробовать при разрешении пути без расширения
const RESOLVE_EXTENSIONS = [...COMPONENT_EXTENSIONS, '.json'];
// --- КОНЕЦ КОНФИГУРАЦИИ ---

// Получение текущей директории (аналог __dirname в CommonJS)
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const CWD = process.cwd(); // Текущая рабочая директория, откуда запущен скрипт

// Регулярное выражение для поиска импортов.
const IMPORT_REGEX = /from\s+['"]((@|\~|\.\.?\/)[^'"]+)['"]/g;

function resolvePath(currentFilePath, importPath) {
    const currentDir = path.dirname(currentFilePath);

    // 1. Обработка псевдонимов
    for (const alias in PATH_ALIASES) {
        if (importPath.startsWith(alias + '/')) {
            const aliasTarget = PATH_ALIASES[alias];
            // Псевдонимы должны разрешаться относительно корня проекта (CWD)
            const resolved = path.resolve(CWD, aliasTarget, importPath.substring(alias.length + 1));
            return findActualFile(resolved);
        }
    }

    // 2. Относительные пути
    if (importPath.startsWith('./') || importPath.startsWith('../')) {
        const resolved = path.resolve(currentDir, importPath);
        return findActualFile(resolved);
    }
    
    return null;
}

function findActualFile(basePath) {
    if (fs.existsSync(basePath) && fs.statSync(basePath).isFile()) {
        return basePath;
    }

    for (const ext of RESOLVE_EXTENSIONS) {
        const pathWithExt = basePath + ext;
        if (fs.existsSync(pathWithExt) && fs.statSync(pathWithExt).isFile()) {
            return pathWithExt;
        }
    }

    for (const ext of RESOLVE_EXTENSIONS) {
        const indexPath = path.join(basePath, 'index' + ext);
        if (fs.existsSync(indexPath) && fs.statSync(indexPath).isFile()) {
            return indexPath;
        }
    }
    return null;
}

function isComponentFile(filePath) {
    if (!filePath) return false;
    const ext = path.extname(filePath).toLowerCase();
    return COMPONENT_EXTENSIONS.includes(ext);
}

function getDependenciesRecursive(filePath, allDependencies = {}, visited = new Set()) {
    const absoluteFilePath = path.resolve(CWD, filePath); // Убедимся, что путь абсолютный от CWD

    if (visited.has(absoluteFilePath) || !isComponentFile(absoluteFilePath)) {
        return;
    }
    visited.add(absoluteFilePath);

    if (!fs.existsSync(absoluteFilePath)) {
        console.warn(`[ПРЕДУПРЕЖДЕНИЕ] Файл не найден: ${absoluteFilePath}`);
        return;
    }

    const content = fs.readFileSync(absoluteFilePath, 'utf-8');
    let match;

    while ((match = IMPORT_REGEX.exec(content)) !== null) {
        const importPath = match[1];
        const resolvedImportPath = resolvePath(absoluteFilePath, importPath);

        if (resolvedImportPath && isComponentFile(resolvedImportPath)) {
            const normalizedPath = path.relative(CWD, resolvedImportPath).replace(/\\/g, '/');
            
            allDependencies[normalizedPath] = (allDependencies[normalizedPath] || 0) + 1;
            getDependenciesRecursive(resolvedImportPath, allDependencies, visited); // Передаем уже абсолютный resolvedImportPath
        }
    }
}

function main() {
    const startFile = process.argv[2];

    if (!startFile) {
        console.error('Ошибка: Укажите путь к файлу компонента.');
        console.error('Пример: node depgraph.js src/pages/Admin.tsx');
        process.exit(1);
    }

    // startFile уже должен быть относительным к CWD, path.resolve сделает его абсолютным
    const absoluteStartFile = path.resolve(CWD, startFile);
    if (!fs.existsSync(absoluteStartFile)) {
        console.error(`Ошибка: Файл не найден: ${absoluteStartFile}`);
        process.exit(1);
    }

    const dependencies = {};
    getDependenciesRecursive(absoluteStartFile, dependencies); // Передаем абсолютный путь

    const sortedDependencies = Object.entries(dependencies)
        .map(([component, count]) => ({ component, count }))
        .sort((a, b) => b.count - a.count);
    
    console.log(JSON.stringify(sortedDependencies, null, 2));
}

// Проверка, запущен ли скрипт напрямую (аналог require.main === module)
// process.argv[1] содержит путь к запущенному скрипту
// import.meta.url содержит URL текущего модуля (file:///...)
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
    main();
}
