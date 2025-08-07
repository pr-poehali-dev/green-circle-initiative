/**
 * Function: hybrid-animals
 * Business: Генерирует случайных гибридных животных, комбинируя черты реальных животных. 
 * Создает уникальных существ с описанием внешности, способностей и характеристик.
 * Methods: GET - возвращает случайно сгенерированное гибридное животное
 * Request: Headers: none, Query: none, Body: none
 * Response: Success(200) - {success: boolean, animal: HybridAnimal, generated_at: string}, Error(500) - {success: false, error: string}
 * Dependencies: none
 * Env: none
 */

interface HybridAnimal {
  name: string;
  parents: string[];
  appearance: string;
  size: string;
  habitat: string;
  abilities: string[];
  personality: string;
  diet: string;
  lifespan: string;
  rarity: string;
}

interface CloudFunctionEvent {
  httpMethod: string;
  headers: Record<string, string>;
  body: string;
  queryStringParameters: Record<string, string> | null;
}

interface CloudFunctionResponse {
  statusCode: number;
  headers: Record<string, string>;
  body: string;
}

const animals = [
  'лев', 'тигр', 'медведь', 'волк', 'лиса', 'олень', 'слон', 'жираф', 'зебра', 'носорог',
  'бегемот', 'крокодил', 'змея', 'орёл', 'сова', 'ворон', 'лебедь', 'фламинго', 'пингвин',
  'дельфин', 'кит', 'акула', 'осьминог', 'медуза', 'черепаха', 'ящерица', 'хамелеон',
  'кенгуру', 'коала', 'панда', 'обезьяна', 'ленивец', 'муравьед', 'броненосец', 'ёж',
  'белка', 'бобёр', 'кролик', 'заяц', 'мышь', 'крыса', 'хорёк', 'енот', 'барсук', 'рысь',
  'пума', 'ягuar', 'гепард', 'гиена', 'шакал', 'антилопа', 'газель', 'буйвол', 'як', 'лама'
];

const abilities = [
  'невероятная скорость', 'суперсила', 'способность к маскировке', 'эхолокация',
  'ночное зрение', 'регенерация', 'умение плавать под водой часами', 'полёт',
  'способность менять цвет', 'создание электрических разрядов', 'чтение мыслей',
  'предсказание погоды', 'способность к телепортации', 'контроль над растениями',
  'создание защитной слизи', 'способность к гипнозу', 'инфракрасное зрение',
  'создание звуковых волн', 'способность к лазанию по любым поверхностям',
  'контроль температуры тела', 'способность спать стоя', 'умение находить воду'
];

const habitats = [
  'тропические леса', 'саванны', 'горные вершины', 'подводные пещеры', 'арктические льды',
  'пустыни', 'болота', 'бамбуковые рощи', 'коралловые рифы', 'глубокие океаны',
  'городские парки', 'древние руины', 'вулканические области', 'облачные леса',
  'степи', 'тундра', 'мангровые заросли', 'горные озёра', 'лавовые поля'
];

const personalities = [
  'игривый и любопытный', 'мудрый и спокойный', 'дружелюбный и общительный',
  'независимый и гордый', 'защитник и верный', 'хитрый и сообразительный',
  'нежный и заботливый', 'энергичный и активный', 'мечтательный и романтичный',
  'смелый и отважный', 'застенчивый но добрый', 'весёлый и оптимистичный'
];

const diets = [
  'фрукты и нектар', 'рыба и морепродукты', 'травы и коренья', 'насекомые и мёд',
  'мелкие грызуны', 'водоросли и планктон', 'ягоды и орехи', 'листья и побеги',
  'кристаллы и минералы', 'цветочная пыльца', 'грибы и лишайники', 'дождевая вода и роса'
];

const rarities = [
  'очень редкий', 'легендарный', 'мифический', 'исчезающий', 'обычный', 'редкий'
];

const lifespans = [
  '50-80 лет', '100-150 лет', '200-300 лет', '20-40 лет', '15-25 лет', 
  '300-500 лет', '80-120 лет', '10-20 лет', '500+ лет'
];

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomElements<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function generateHybridName(parent1: string, parent2: string): string {
  const prefixes = parent1.slice(0, 2) + parent1.slice(-2);
  const suffixes = parent2.slice(0, 2) + parent2.slice(-2);
  
  const combinations = [
    parent1.slice(0, 3) + parent2.slice(-3),
    parent2.slice(0, 3) + parent1.slice(-3),
    prefixes + suffixes.slice(-2),
    parent1.slice(0, 2) + parent2.slice(1, 4) + parent1.slice(-1)
  ];
  
  return getRandomElement(combinations).charAt(0).toUpperCase() + getRandomElement(combinations).slice(1);
}

function generateAppearance(parent1: string, parent2: string): string {
  const features = [
    `тело как у ${parent1}, но с головой ${parent2}`,
    `окрас ${parent1} с полосами как у ${parent2}`,
    `размер ${parent1}, но с хвостом и ушами ${parent2}`,
    `пятнистая шкура ${parent1} с гривой ${parent2}`,
    `крылья ${parent2} на теле ${parent1}`,
    `лапы ${parent1} с клювом ${parent2}`,
    `шерсть ${parent1} с плавниками ${parent2}`
  ];
  
  return getRandomElement(features);
}

function generateHybridAnimal(): HybridAnimal {
  const selectedAnimals = getRandomElements(animals, 2);
  const parent1 = selectedAnimals[0];
  const parent2 = selectedAnimals[1];
  
  return {
    name: generateHybridName(parent1, parent2),
    parents: [parent1, parent2],
    appearance: generateAppearance(parent1, parent2),
    size: getRandomElement(['крошечный (размер с кота)', 'маленький (размер с собаку)', 'средний (размер с пони)', 'большой (размер со слона)', 'огромный (размер с китом)']),
    habitat: getRandomElement(habitats),
    abilities: getRandomElements(abilities, Math.floor(Math.random() * 3) + 1),
    personality: getRandomElement(personalities),
    diet: getRandomElement(diets),
    lifespan: getRandomElement(lifespans),
    rarity: getRandomElement(rarities)
  };
}

export const handler = async (event: CloudFunctionEvent): Promise<CloudFunctionResponse> => {
  try {
    const animal = generateHybridAnimal();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({
        success: true,
        animal,
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
        error: 'Ошибка при генерации гибридного животного'
      })
    };
  }
};