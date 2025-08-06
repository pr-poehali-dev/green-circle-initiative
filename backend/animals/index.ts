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
    diet: string;
    size: string;
    special_ability: string;
}

export async function handler(event: Event): Promise<Response> {
    try {
        // Массивы частей для создания выдуманных животных
        const firstParts = ['Радуж', 'Кристалл', 'Звёзд', 'Облач', 'Огнен', 'Ледян', 'Вихре', 'Молние', 'Туман', 'Свето'];
        const secondParts = ['ный', 'овый', 'ский', 'ческий', 'ляр', 'ист', 'он', 'ук', 'ель', 'яш'];
        const animalTypes = ['тигр', 'медведь', 'лис', 'волк', 'заяц', 'енот', 'барсук', 'рысь', 'олень', 'белка'];
        
        const habitats = ['магические леса', 'хрустальные пещеры', 'облачные вершины', 'радужные долины', 'звёздные равнины', 'туманные болота', 'ледяные замки', 'огненные вулканы'];
        const diets = ['питается росой и лунным светом', 'ест кристаллы и минералы', 'охотится на призрачных бабочек', 'собирает звёздную пыль', 'питается радужными ягодами', 'ловит облачных рыбок'];
        const sizes = ['размером с кота', 'величиной с собаку', 'ростом с пони', 'крошечный как хомяк', 'большой как медведь'];
        const abilities = ['может становиться невидимым', 'умеет летать на короткие расстояния', 'создаёт иллюзии', 'управляет погодой', 'читает мысли', 'предсказывает будущее', 'исцеляет раны', 'меняет цвет шерсти'];

        // Генерируем случайное животное
        const randomFirst = firstParts[Math.floor(Math.random() * firstParts.length)];
        const randomSecond = secondParts[Math.floor(Math.random() * secondParts.length)];
        const randomAnimal = animalTypes[Math.floor(Math.random() * animalTypes.length)];
        
        const animal: Animal = {
            name: `${randomFirst}${randomSecond} ${randomAnimal}`,
            description: `Удивительное создание с переливающейся шерстью и магическими способностями`,
            habitat: habitats[Math.floor(Math.random() * habitats.length)],
            diet: diets[Math.floor(Math.random() * diets.length)],
            size: sizes[Math.floor(Math.random() * sizes.length)],
            special_ability: abilities[Math.floor(Math.random() * abilities.length)]
        };

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
                animal: animal,
                generated_at: new Date().toISOString()
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
                error: 'Не удалось создать магическое животное'
            })
        };
    }
}