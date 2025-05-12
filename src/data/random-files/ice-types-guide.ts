
export interface IceType {
  name: string;
  description: string;
  bestFor: string[];
  preparationMethod: string;
  meltingSpeed: 'slow' | 'medium' | 'fast';
  dilutionLevel: 'low' | 'medium' | 'high';
  appearance: string;
}

export const iceTypes: IceType[] = [
  {
    name: 'Кубики льда',
    description: 'Классические кубики льда, стандарт для большинства напитков. Универсальны и подходят практически для любого коктейля.',
    bestFor: ['Олд Фэшнд', 'Виски на камнях', 'Джин-тоник', 'Нигрони'],
    preparationMethod: 'Заморозка воды в стандартных формах для льда. Идеально использовать фильтрованную или дистиллированную воду для кристально чистых кубиков.',
    meltingSpeed: 'medium',
    dilutionLevel: 'medium',
    appearance: 'Классические прозрачные кубики размером примерно 2,5 х 2,5 см'
  },
  {
    name: 'Колотый лёд',
    description: 'Мелко раздробленный лёд, обеспечивающий быстрое охлаждение напитка и более интенсивную дилюцию.',
    bestFor: ['Мохито', 'Май Тай', 'Джулеп', 'Замороженная Маргарита'],
    preparationMethod: 'Измельчение стандартных кубиков льда с помощью льдодробилки или в блендере, либо завёрнутых в полотенце и разбитых молотком.',
    meltingSpeed: 'fast',
    dilutionLevel: 'high',
    appearance: 'Мелкие кусочки льда неправильной формы, напоминающие снег или гравий'
  },
  {
    name: 'Глыба льда',
    description: 'Большой одиночный кусок льда, который медленно тает и минимально разбавляет напиток, сохраняя его крепость.',
    bestFor: ['Японский виски', 'Высококлассные спиртные напитки', 'Премиальные коктейли на основе виски'],
    preparationMethod: 'Замораживание воды в больших силиконовых формах или вырезание из большого блока льда. Для кристальной прозрачности используется метод направленного замораживания.',
    meltingSpeed: 'slow',
    dilutionLevel: 'low',
    appearance: 'Большой прозрачный куб или сфера диаметром 5-7 см'
  },
  {
    name: 'Кобблер (дробленый лёд)',
    description: 'Среднее между кубиками и колотым льдом. Обеспечивает хорошее охлаждение, но тает не так быстро как колотый лёд.',
    bestFor: ['Шерри Кобблер', 'Мятный Джулеп', 'Некоторые вариации Смэшей'],
    preparationMethod: 'Частичное измельчение кубиков льда до состояния, когда они разбиты, но не превращены в мелкую крошку.',
    meltingSpeed: 'medium',
    dilutionLevel: 'medium',
    appearance: 'Неравномерные кусочки размером от 0,5 до 1,5 см'
  },
  {
    name: 'Шейвд (снежный лёд)',
    description: 'Очень мелко измельченный лед, напоминающий снег. Создает морозную текстуру в напитках.',
    bestFor: ['Мятный Джулеп', 'Фрозе', 'Грантизированные напитки', 'Фруктовые слаши'],
    preparationMethod: 'Соскабливание с большого блока льда специальным инструментом или с помощью специальной машины для снежного льда.',
    meltingSpeed: 'fast',
    dilutionLevel: 'high',
    appearance: 'Мягкий, пушистый снег с мелкой текстурой'
  },
  {
    name: 'Спирали льда',
    description: 'Декоративный лед в форме спирали, который не только охлаждает, но и служит элементом оформления напитка.',
    bestFor: ['Высококлассные коктейли', 'Особые случаи', 'Коктейли для фотографий'],
    preparationMethod: 'Создается с помощью специальных инструментов или вручную из больших блоков льда искусными барменами.',
    meltingSpeed: 'medium',
    dilutionLevel: 'medium',
    appearance: 'Элегантная спираль, вырезанная из прозрачного льда'
  },
  {
    name: 'Сухой лёд',
    description: 'Твердая форма углекислого газа, создает эффектный дым и туман. Не для употребления, только для внешних эффектов!',
    bestFor: ['Хэллоуин коктейли', 'Эффектные коктейли для особых случаев', 'Тематические напитки'],
    preparationMethod: 'Приобретается в специализированных магазинах. Требуется крайняя осторожность при использовании.',
    meltingSpeed: 'special',
    dilutionLevel: 'none',
    appearance: 'Белые блоки или гранулы, испускающие густой белый "дым" при контакте с жидкостью'
  },
  {
    name: 'Ароматизированный лёд',
    description: 'Лед, созданный из ароматизированной жидкости, который постепенно высвобождает дополнительные вкусы в напиток по мере таяния.',
    bestFor: ['Лимонады', 'Пунши', 'Фруктовые коктейли', 'Безалкогольные напитки'],
    preparationMethod: 'Заморозка соков, отваров трав, фруктовых пюре или ароматизированной воды в формы для льда.',
    meltingSpeed: 'medium',
    dilutionLevel: 'medium',
    appearance: 'Цветные кубики льда, часто с включениями трав, фруктов или специй'
  },
  {
    name: 'Фруктовый лёд',
    description: 'Лед с вмороженными кусочками фруктов, которые не только украшают напиток, но и добавляют вкус при таянии.',
    bestFor: ['Сангрия', 'Фруктовые пунши', 'Коктейли на основе шампанского', 'Летние напитки'],
    preparationMethod: 'Размещение небольших кусочков фруктов в формах для льда перед заморозкой воды или сока.',
    meltingSpeed: 'medium',
    dilutionLevel: 'medium',
    appearance: 'Прозрачные или цветные кубики с эстетично расположенными внутри фруктами'
  },
  {
    name: 'Брусковый лёд',
    description: 'Длинные тонкие куски льда, идеально подходящие для высоких стаканов. Медленнее тают, чем обычные кубики.',
    bestFor: ['Коллинз', 'Физз', 'Хайболы', 'Мохито в высоких стаканах'],
    preparationMethod: 'Заморозка в специальных удлиненных формах или вырезание из больших блоков льда.',
    meltingSpeed: 'medium',
    dilutionLevel: 'medium',
    appearance: 'Длинные прозрачные бруски льда, обычно размером примерно 2,5 х 2,5 х 10 см'
  }
];

export const getMeltingSpeedText = (speed: string): string => {
  switch(speed) {
    case 'slow': return 'Медленная';
    case 'medium': return 'Средняя';
    case 'fast': return 'Быстрая';
    default: return 'Особая';
  }
};

export const getDilutionLevelText = (level: string): string => {
  switch(level) {
    case 'low': return 'Низкий';
    case 'medium': return 'Средний';
    case 'high': return 'Высокий';
    default: return 'Отсутствует';
  }
};

export const findIceTypeForCocktail = (cocktailName: string): IceType | undefined => {
  return iceTypes.find(iceType => 
    iceType.bestFor.some(cocktail => 
      cocktail.toLowerCase().includes(cocktailName.toLowerCase())
    )
  );
};

export const getRecommendedIceTypes = (cocktailStyle: 'strong' | 'refreshing' | 'fruity' | 'classic' | 'premium'): IceType[] => {
  switch(cocktailStyle) {
    case 'strong':
      return iceTypes.filter(ice => ice.dilutionLevel === 'low');
    case 'refreshing':
      return iceTypes.filter(ice => ice.meltingSpeed === 'fast' || ice.meltingSpeed === 'medium');
    case 'fruity':
      return [
        iceTypes.find(ice => ice.name === 'Колотый лёд')!,
        iceTypes.find(ice => ice.name === 'Фруктовый лёд')!,
        iceTypes.find(ice => ice.name === 'Ароматизированный лёд')!
      ];
    case 'premium':
      return [
        iceTypes.find(ice => ice.name === 'Глыба льда')!,
        iceTypes.find(ice => ice.name === 'Брусковый лёд')!,
        iceTypes.find(ice => ice.name === 'Спирали льда')!
      ];
    case 'classic':
    default:
      return [
        iceTypes.find(ice => ice.name === 'Кубики льда')!,
        iceTypes.find(ice => ice.name === 'Брусковый лёд')!,
        iceTypes.find(ice => ice.name === 'Глыба льда')!
      ];
  }
};
