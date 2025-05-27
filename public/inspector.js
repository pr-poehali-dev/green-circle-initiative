// Расширенный скрипт для выбора и редактирования элементов в iframe с поддержкой классов Tailwind
(function () {
    "use strict";

    // Состояние
    const state = {
        isActive: false,
        selectedElement: null,
        hoveredElement: null,
    };

    // Стили для подсветки
    const STYLES = `
    [data-hovered] {
      outline: 2px dashed #FBB040 !important;
      outline-offset: 2px !important;
      cursor: pointer !important;
    }

    [data-selected] {
      outline: 2px solid #FBB040 !important;
      outline-offset: 2px !important;
    }
  `;

    // Добавляем стили
    const styleSheet = document.createElement("style");
    styleSheet.textContent = STYLES;
    document.head.appendChild(styleSheet);

    // Получить контент компонента из data атрибутов
    function getComponentContent(element) {
        const encoded = element.getAttribute('data-component-content');
        if (!encoded) return null;

        try {
            const jsonString = decodeURIComponent(encoded);
            return JSON.parse(jsonString);
        } catch (e) {
            console.error('Failed to decode component content:', e);
            return null;
        }
    }

    // Анализ возможности редактирования элемента
    function analyzeEditability(element) {
        const canEdit = {};
        const warnings = [];

        // Получаем контент из tagger'а
        const componentContent = getComponentContent(element);
        const runtimeClasses = element.className || '';

        // Анализ текста
        if (componentContent && componentContent.text) {
            // Проверяем, что текст статический
            const currentText = element.innerText || element.textContent || '';
            if (currentText.trim() === componentContent.text.trim()) {
                canEdit.text = true;
            } else {
                warnings.push('Text content mismatch');
            }
        }

        // Анализ классов
        if (componentContent && componentContent.className !== undefined) {
            // Проверяем на признаки динамических классов
            const dynamicPatterns = [
                /undefined/,
                /null/,
                /false/,
                /true/,
                /\s{2,}/,    // Множественные пробелы
                /^\s|\s$/    // Пробелы в начале/конце
            ];

            const hasDynamicPatterns = dynamicPatterns.some(pattern =>
                pattern.test(runtimeClasses)
            );

            // Сравниваем классы из tagger'а с runtime классами
            if (componentContent.className === runtimeClasses && !hasDynamicPatterns) {
                canEdit.classes = true;
            } else {
                warnings.push('Classes are dynamic or mismatched');
            }
        } else if (runtimeClasses && !componentContent) {
            // Если классы есть в DOM, но нет в componentContent - вероятно динамические
            warnings.push('Classes not tracked by tagger');
        }

        return {canEdit, warnings};
    }

    // Получить Tailwind классы для margin и padding
    function getTailwindSpacingClasses(element) {
        if (!element) return {};

        const spacingValues = {
            marginX: 0,
            marginY: 0,
            paddingX: 0,
            paddingY: 0
        };

        // Получаем все классы элемента
        const classes = Array.from(element.classList);

        // Функция для извлечения числового значения из класса типа mx-[10px]
        function extractValue(className) {
            const match = className.match(/\[(\d+)px\]/);
            return match ? parseInt(match[1]) : 0;
        }

        // Проверяем наличие tailwind классов для margin и padding
        classes.forEach(className => {
            if (className.startsWith('mx-[')) {
                spacingValues.marginX = extractValue(className);
            } else if (className.startsWith('my-[')) {
                spacingValues.marginY = extractValue(className);
            } else if (className.startsWith('px-[')) {
                spacingValues.paddingX = extractValue(className);
            } else if (className.startsWith('py-[')) {
                spacingValues.paddingY = extractValue(className);
            }
        });

        console.log("Tailwind spacing classes:", spacingValues);
        return spacingValues;
    }

    // Получить информацию об элементе
    function getElementInfo(element) {
        if (!element) return null;

        const rect = element.getBoundingClientRect();
        const styles = window.getComputedStyle(element);
        const classList = Array.from(element.classList);

        // Получаем информацию о tailwind классах
        const tailwindSpacing = getTailwindSpacingClasses(element);

        // Анализируем возможность редактирования
        const {canEdit, warnings} = analyzeEditability(element);

        // Пытаемся получить информацию о расположении в коде
        let sourceLocation = null;

        // Проверяем data-lov-id формат (path:line:col)
        const lovId = element.getAttribute("data-lov-id");
        if (lovId) {
            const [filePath, line, col] = lovId.split(":");
            sourceLocation = {
                filePath,
                line: parseInt(line || "0"),
                column: parseInt(col || "0"),
            };
        } else {
            // Проверяем альтернативные атрибуты
            const componentPath = element.getAttribute("data-component-path");
            const componentLine = element.getAttribute("data-component-line");
            if (componentPath) {
                sourceLocation = {
                    filePath: componentPath,
                    line: parseInt(componentLine || "0"),
                    column: 0,
                };
            }
        }

        // Подготавливаем стили, добавляя информацию из tailwind классов
        const elementStyles = {
            fontSize: styles.fontSize,
            fontWeight: styles.fontWeight,
            color: styles.color,
            backgroundColor: styles.backgroundColor,
            paddingTop: styles.paddingTop,
            paddingRight: styles.paddingRight,
            paddingBottom: styles.paddingBottom,
            paddingLeft: styles.paddingLeft,
            marginTop: styles.marginTop,
            marginRight: styles.marginRight,
            marginBottom: styles.marginBottom,
            marginLeft: styles.marginLeft,
            textAlign: styles.textAlign,
            borderRadius: styles.borderRadius,
        };

        // Если есть tailwind классы для маржинов и паддингов, добавляем их в стили
        if (tailwindSpacing.marginX > 0) {
            elementStyles.marginLeftTW = tailwindSpacing.marginX + 'px';
            elementStyles.marginRightTW = tailwindSpacing.marginX + 'px';
        }

        if (tailwindSpacing.marginY > 0) {
            elementStyles.marginTopTW = tailwindSpacing.marginY + 'px';
            elementStyles.marginBottomTW = tailwindSpacing.marginY + 'px';
        }

        if (tailwindSpacing.paddingX > 0) {
            elementStyles.paddingLeftTW = tailwindSpacing.paddingX + 'px';
            elementStyles.paddingRightTW = tailwindSpacing.paddingX + 'px';
        }

        if (tailwindSpacing.paddingY > 0) {
            elementStyles.paddingTopTW = tailwindSpacing.paddingY + 'px';
            elementStyles.paddingBottomTW = tailwindSpacing.paddingY + 'px';
        }

        // Получаем компонент контент для отладки
        const componentContent = getComponentContent(element);

        return {
            tagName: element.tagName.toLowerCase(),
            text: element.innerText || element.textContent,
            classList: classList,
            styles: elementStyles,
            source: sourceLocation,
            rect: {
                width: rect.width,
                height: rect.height,
            },
            tailwindSpacing: tailwindSpacing,
            canEdit: canEdit, // Добавляем информацию о возможности редактирования
            warnings: warnings,
            componentContent: componentContent // Для отладки
        };
    }

    // Отправить сообщение родителю
    function sendToParent(type, data) {
        window.parent.postMessage(
            {
                type,
                data,
                source: "element-selector",
            },
            "*",
        );
    }

    // Обработчики событий
    function handleMouseOver(e) {
        if (!state.isActive) return;

        const element = e.target;
        if (element === state.hoveredElement) return;

        // Убираем предыдущую подсветку
        if (state.hoveredElement) {
            state.hoveredElement.removeAttribute("data-hovered");
        }

        // Добавляем новую
        state.hoveredElement = element;
        element.setAttribute("data-hovered", "");
    }

    function handleMouseOut(e) {
        if (!state.isActive) return;

        const element = e.target;
        if (element === state.hoveredElement) {
            element.removeAttribute("data-hovered");
            state.hoveredElement = null;
        }
    }

    function handleClick(e) {
        if (!state.isActive) return;

        e.preventDefault();
        e.stopPropagation();

        const element = e.target;

        // Убираем предыдущее выделение
        if (state.selectedElement) {
            state.selectedElement.removeAttribute("data-selected");
        }

        // Выделяем новый элемент
        state.selectedElement = element;
        element.setAttribute("data-selected", "");

        // Отправляем информацию родителю
        sendToParent("ELEMENT_SELECTED", getElementInfo(element));
    }

    // Активировать режим выбора
    function activate() {
        state.isActive = true;

        document.addEventListener("mouseover", handleMouseOver, true);
        document.addEventListener("mouseout", handleMouseOut, true);
        document.addEventListener("click", handleClick, true);

        sendToParent("SELECTOR_ACTIVATED", {});
    }

    // Деактивировать режим выбора
    function deactivate() {
        state.isActive = false;

        document.removeEventListener("mouseover", handleMouseOver, true);
        document.removeEventListener("mouseout", handleMouseOut, true);
        document.removeEventListener("click", handleClick, true);

        // Убираем все атрибуты
        if (state.hoveredElement) {
            state.hoveredElement.removeAttribute("data-hovered");
        }
        if (state.selectedElement) {
            state.selectedElement.removeAttribute("data-selected");
        }

        state.hoveredElement = null;
        state.selectedElement = null;

        sendToParent("SELECTOR_DEACTIVATED", {});
    }

    // Обновить элемент
    function updateElement(data) {
        if (!state.selectedElement) return;

        const {property, value} = data;
        if (property === "text") {
            state.selectedElement.innerText = value;
        } else if (property.startsWith("style.")) {
            const styleProp = property.substring(6);
            state.selectedElement.style[styleProp] = value;
        }
    }




    // Обработчик сообщений от родителя
    window.addEventListener("message", (event) => {
        console.log("MESSAGE FROM PARENT", event.data);
        const {type, data} = event.data;

        switch (type) {
            case "ACTIVATE":
                activate();
                break;

            case "DEACTIVATE":
                deactivate();
                break;

            case "UPDATE_ELEMENT":
                updateElement(data);
                break;

            case "GET_SELECTED":
                if (state.selectedElement) {
                    sendToParent(
                        "SELECTED_ELEMENT",
                        getElementInfo(state.selectedElement),
                    );
                }
                break;
        }
    });

    // Уведомляем родителя, что скрипт загружен
    sendToParent("READY", {version: "1.2.0"});
})();
