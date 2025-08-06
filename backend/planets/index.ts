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

interface Planet {
  name: string;
  description: string;
  atmosphere: string;
  surface: string;
  temperature: string;
  gravity: string;
  magical_property: string;
  inhabitants: string;
}

interface PlanetResponse {
  success: boolean;
  planet: Planet;
  generated_at: string;
}

export async function handler(event: Event): Promise<Response> {
  try {
    const planet = generateMagicalPlanet();
    
    const response: PlanetResponse = {
      success: true,
      planet: planet,
      generated_at: new Date().toISOString()
    };

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
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
        error: 'Ошибка при генерации планеты',
        generated_at: new Date().toISOString()
      })
    };
  }
}

function generateMagicalPlanet(): Planet {
  const prefixes = ['Кристалло', 'Огне', 'Ледо', 'Облачно', 'Звездо', 'Лунно', 'Солнце', 'Туманно'];
  const bases = ['мир', 'сфера', 'земля', 'планета', 'орб', 'глобус', 'шар'];
  const suffixes = ['ия', 'ус', 'ос', 'ан', 'ен', 'он'];
  
  const atmospheres = [
    'Светящиеся газы с частицами звездной пыли',
    'Плотные облака из радужного пара',
    'Кристальный воздух с плавающими кристаллами',
    'Магические туманы меняющие цвет',
    'Электрические бури из цветных молний',
    'Парящие в воздухе капли жидкого света'
  ];

  const surfaces = [
    'Кристальные горы и долины из драгоценных камней',
    'Плавающие острова над бездонными пропастями',
    'Океаны из жидкого серебра и золотые пляжи',
    'Леса из светящихся деревьев с листьями-звездами',
    'Пустыни из радужного песка и опаловые дюны',
    'Ледяные замки и замерзшие водопады из света'
  ];

  const temperatures = [
    'Комфортные +25°C днем, прохладные +15°C ночью',
    'Всегда теплые +30°C благодаря внутреннему свечению',
    'Прохладные +10°C с теплыми магическими источниками',
    'Меняющиеся от +5°C до +40°C в зависимости от времени',
    'Постоянные +20°C из-за магической стабилизации',
    'Холодные -10°C, но согревающие кристаллы повсюду'
  ];

  const gravities = [
    'Легкая гравитация - можно прыгать очень высоко',
    'Обычная гравитация как на Земле',
    'Сильная гравитация - все движения замедлены',
    'Магическая гравитация - можно летать силой мысли',
    'Переменная гравитация - меняется в разных областях',
    'Обратная гравитация в некоторых зонах'
  ];

  const magicalProperties = [
    'Исполнение желаний при свете двух лун',
    'Способность видеть прошлое и будущее',
    'Лечебные свойства местной воды и воздуха',
    'Материализация мыслей в реальные объекты',
    'Телепатическая связь со всеми обитателями',
    'Способность изменять время и пространство'
  ];

  const inhabitants = [
    'Светящиеся эльфы с крыльями-радугами',
    'Кристальные драконы размером с котенка',
    'Мудрые древние духи в облике света',
    'Дружелюбные единороги с звездными гривами',
    'Летающие медузы поющие космические песни',
    'Маленькие феи строящие города в облаках'
  ];

  const descriptions = [
    'Удивительный мир, где магия течет как река сквозь время',
    'Планета грез, где сбываются самые смелые фантазии',
    'Мистическое место силы с древними тайнами',
    'Райский уголок вселенной для путешественников душой',
    'Волшебная планета, где каждый день приносит чудеса',
    'Священное место, где встречаются все измерения'
  ];
  
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const base = bases[Math.floor(Math.random() * bases.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  
  const name = `${prefix}${base}${suffix}`;
  
  return {
    name,
    description: descriptions[Math.floor(Math.random() * descriptions.length)],
    atmosphere: atmospheres[Math.floor(Math.random() * atmospheres.length)],
    surface: surfaces[Math.floor(Math.random() * surfaces.length)],
    temperature: temperatures[Math.floor(Math.random() * temperatures.length)],
    gravity: gravities[Math.floor(Math.random() * gravities.length)],
    magical_property: magicalProperties[Math.floor(Math.random() * magicalProperties.length)],
    inhabitants: inhabitants[Math.floor(Math.random() * inhabitants.length)]
  };
}