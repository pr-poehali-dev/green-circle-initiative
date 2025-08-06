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

interface Creature {
    name: string;
    description: string;
    habitat: string;
    abilities: string[];
    rarity: 'common' | 'rare' | 'legendary';
    emoji: string;
}

export async function handler(event: Event): Promise<Response> {
    try {
        const creature = generateCreature();
        
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
                creature,
                timestamp: new Date().toISOString()
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
                error: 'Ошибка генерации существа'
            })
        };
    }
}

function generateCreature(): Creature {
    const prefixes = ['Крыло', 'Огне', 'Водо', 'Земле', 'Небес', 'Лунно', 'Солнеч', 'Звездо'];
    const bases = ['лев', 'тигр', 'волк', 'медведь', 'орел', 'дельфин', 'змей', 'олень'];
    const suffixes = ['ус', 'крыл', 'хвост', 'глаз', 'лап', 'рог'];
    
    const habitats = [
        'Мистические леса',
        'Подводные пещеры', 
        'Высокогорные плато',
        'Вулканические долины',
        'Кристальные пещеры',
        'Плавучие острова'
    ];

    const abilities = [
        'Телепатия',
        'Контроль погоды',
        'Невидимость',
        'Исцеление',
        'Полет',
        'Предвидение',
        'Иллюзии',
        'Дыхание под водой'
    ];

    const emojis = ['🦁', '🐅', '🐺', '🐻', '🦅', '🐬', '🐍', '🦌', '🦄', '🐉'];
    
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const base = bases[Math.floor(Math.random() * bases.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    
    const name = `${prefix}${base}${suffix}`;
    const rarity = Math.random() < 0.1 ? 'legendary' : Math.random() < 0.3 ? 'rare' : 'common';
    const numAbilities = rarity === 'legendary' ? 3 : rarity === 'rare' ? 2 : 1;
    
    const creatureAbilities = [];
    const shuffled = [...abilities].sort(() => 0.5 - Math.random());
    for (let i = 0; i < numAbilities; i++) {
        creatureAbilities.push(shuffled[i]);
    }
    
    const descriptions = {
        common: 'Удивительное создание из глубин фантазии',
        rare: 'Редкое существо с особыми способностями',
        legendary: 'Легендарное создание невиданной силы'
    };
    
    return {
        name,
        description: descriptions[rarity],
        habitat: habitats[Math.floor(Math.random() * habitats.length)],
        abilities: creatureAbilities,
        rarity,
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
    };
}