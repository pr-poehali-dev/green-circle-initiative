/**
 * Function: animal-generator
 * Business: Генерирует случайных выдуманных животных путём комбинации характеристик реальных животных. 
 * Создаёт уникальные гибриды с интересными названиями и описаниями для развлечения пользователей.
 * Methods: GET - возвращает случайно сгенерированное животное
 * Request: Headers: none, Query: none, Body: none
 * Response: Success(200) - JSON с данными животного, Error(500) - ошибка генерации
 * Dependencies: none
 * Env: none
 */

interface CloudFunctionEvent {
  httpMethod: string;
  headers: Record<string, string>;
  body?: string;
  queryStringParameters?: Record<string, string>;
}

interface CloudFunctionResponse {
  statusCode: number;
  headers: Record<string, string>;
  body: string;
}

interface Animal {
  name: string;
  description: string;
  habitat: string;
  diet: string;
  size: string;
  special_ability: string;
  appearance: string;
  sound: string;
}

interface AnimalResponse {
  success: boolean;
  animal: Animal;
  generated_at: string;
}

export const handler = async (event: CloudFunctionEvent): Promise<CloudFunctionResponse> => {
  const { httpMethod } = event;

  if (httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({ success: false, error: 'Method not allowed' })
    };
  }

  try {
    // Базы данных для комбинирования
    const animalParts = {
      head: ['лев', 'орёл', 'дракон', 'единорог', 'сова', 'волк', 'тигр', 'медведь'],
      body: ['лошадь', 'рыба', 'змея', 'кот', 'птица', 'олень', 'пантера', 'дельфин'],
      tail: ['павлин', 'ящерица', 'скорпион', 'лиса', 'дракон', 'кит', 'феникс', 'белка']
    };

    const habitats = [
      'заколдованные леса с светящимися деревьями',
      'кристальные пещеры в горах',
      'плавающие острова в облаках',
      'радужные водопады',
      'подводные коралловые города',
      'ледяные дворцы севера',
      'вулканические долины с лавовыми озёрами',
      'бамбуковые рощи с жемчужной росой'
    ];

    const diets = [
      'питается магической энергией и лунным светом',
      'ест кристаллы и драгоценные камни',
      'охотится на облака и ловит звёзды',
      'собирает нектар радужных цветов',
      'питается снами и воспоминаниями',
      'ест только золотые яблоки',
      'живёт за счёт солнечной энергии',
      'питается морской пеной и жемчугом'
    ];

    const sizes = [
      'размером с домашнего кота, но с крыльями размахом 2 метра',
      'высотой с лошадь, длиной тела 3 метра',
      'крошечный, помещается на ладони',
      'огромный как слон, но лёгкий как перышко',
      'длинный как змея - до 10 метров',
      'компактный размером с собаку средних размеров',
      'величественный - высотой 4 метра',
      'миниатюрный, размером с хомяка'
    ];

    const abilities = [
      'может становиться невидимым при лунном свете',
      'умеет телепортироваться через тени',
      'создаёт радужные мосты в воздухе',
      'исцеляет раны своими слезами',
      'может изменять цвет шерсти по настроению',
      'читает мысли и предсказывает будущее',
      'управляет погодой взмахом крыльев',
      'превращает всё в золото прикосновением'
    ];

    const appearances = [
      'переливается всеми цветами радуги',
      'имеет серебристую шерсть со звёздными пятнами',
      'светится мягким голубым сиянием',
      'покрыт кристальными чешуйками',
      'имеет золотистую гриву и изумрудные глаза',
      'переливается как опал под солнцем',
      'имеет прозрачные крылья с огненными узорами',
      'покрыт пушистой шерстью цвета заката'
    ];

    const sounds = [
      'издаёт мелодичные трели как колокольчики',
      'поёт как хор ангелов',
      'мурлычет как гром вдалеке',
      'свистит как ветер в горах',
      'издаёт звуки похожие на арфу',
      'рычит как далёкий водопад',
      'чирикает магическими нотами',
      'шепчет древние заклинания'
    ];

    // Генерация случайного животного
    const randomHead = animalParts.head[Math.floor(Math.random() * animalParts.head.length)];
    const randomBody = animalParts.body[Math.floor(Math.random() * animalParts.body.length)];
    const randomTail = animalParts.tail[Math.floor(Math.random() * animalParts.tail.length)];

    const name = `${randomHead.charAt(0).toUpperCase() + randomHead.slice(1)}-${randomBody}-${randomTail}`;
    
    const animal: Animal = {
      name,
      description: `Удивительное создание с головой ${randomHead}а, телом ${randomBody} и хвостом ${randomTail}а. Это уникальный гибрид, который сочетает в себе лучшие качества всех трёх животных.`,
      habitat: habitats[Math.floor(Math.random() * habitats.length)],
      diet: diets[Math.floor(Math.random() * diets.length)],
      size: sizes[Math.floor(Math.random() * sizes.length)],
      special_ability: abilities[Math.floor(Math.random() * abilities.length)],
      appearance: appearances[Math.floor(Math.random() * appearances.length)],
      sound: sounds[Math.floor(Math.random() * sounds.length)]
    };

    const response: AnimalResponse = {
      success: true,
      animal,
      generated_at: new Date().toISOString()
    };

    return {
      statusCode: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify(response)
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
        error: 'Ошибка при генерации животного',
        generated_at: new Date().toISOString()
      })
    };
  }
};