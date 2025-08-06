interface Event {
    httpMethod: string;
    path: string;
    body?: string;
    headers: Record<string, string>;
    queryStringParameters?: Record<string, string>;
}

interface Response {
    statusCode: number;
    headers?: Record<string, string>;
    body: string;
}

interface Animal {
    name: string;
    description: string;
    habitat: string;
    abilities: string[];
    rarity: string;
}

export async function handler(event: Event): Promise<Response> {
    try {
        const animal = generateFantasyAnimal();
        
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify({ 
                success: true,
                animal 
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ 
                success: false,
                error: 'Ошибка создания животного' 
            })
        };
    }
}

function generateFantasyAnimal(): Animal {
    const prefixes = ['Огненный', 'Ледяной', 'Теневой', 'Радужный', 'Электрический', 'Кристальный', 'Призрачный', 'Золотой'];
    const animals = ['Волк', 'Медведь', 'Лиса', 'Орёл', 'Дракон', 'Тигр', 'Пантера', 'Единорог', 'Олень', 'Рысь'];
    const habitats = ['Магический лес', 'Кристальные пещеры', 'Облачные горы', 'Лунные поля', 'Огненные долины', 'Ледяные плато'];
    const abilities = [
        'Управление стихиями', 'Телепортация', 'Невидимость', 'Исцеление', 
        'Предсказание будущего', 'Чтение мыслей', 'Полёт', 'Изменение формы',
        'Контроль над временем', 'Создание иллюзий'
    ];
    const rarities = ['Обычный', 'Редкий', 'Эпический', 'Легендарный', 'Мифический'];
    
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const animal = animals[Math.floor(Math.random() * animals.length)];
    const habitat = habitats[Math.floor(Math.random() * habitats.length)];
    const rarity = rarities[Math.floor(Math.random() * rarities.length)];
    
    // Выбираем 2-3 способности
    const shuffledAbilities = abilities.sort(() => 0.5 - Math.random());
    const selectedAbilities = shuffledAbilities.slice(0, Math.floor(Math.random() * 2) + 2);
    
    return {
        name: `${prefix} ${animal}`,
        description: `Удивительное существо, сочетающее в себе мощь ${animal.toLowerCase()}а и магию ${prefix.toLowerCase()}ого элемента.`,
        habitat,
        abilities: selectedAbilities,
        rarity
    };
}