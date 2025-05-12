
import React from 'react';
import Icon from '@/components/ui/icon';

export interface GarnishTechnique {
  id: string;
  name: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  icon: string;
  tools: string[];
  tips: string[];
}

export const garnishTechniques: GarnishTechnique[] = [
  {
    id: 'citrus-twist',
    name: 'Цитрусовый твист',
    description: 'Техника создания спирали из цитрусовой кожуры для украшения коктейлей и придания аромата.',
    difficulty: 'easy',
    icon: 'Lemon',
    tools: ['Нож для цедры или острый нож', 'Цитрусовые (лимон, лайм, апельсин, грейпфрут)'],
    tips: [
      'Перед нарезкой убедитесь, что цитрус комнатной температуры - так больше выделится эфирных масел.',
      'Срезайте только верхний цветной слой, стараясь не захватить белую горькую часть (альбедо).',
      'Перед размещением на бокале, скрутите цедру над коктейлем, чтобы эфирные масла попали в напиток.'
    ]
  },
  {
    id: 'salt-rim',
    name: 'Соленая кромка',
    description: 'Техника создания соленого или сахарного ободка на краю бокала, популярная для коктейлей вроде Маргариты.',
    difficulty: 'easy',
    icon: 'Salt',
    tools: ['Блюдце или маленькая тарелка', 'Соль или сахар', 'Долька цитруса'],
    tips: [
      'Перед созданием ободка охладите бокал в морозильной камере для лучшего прилипания соли/сахара.',
      'Проведите долькой цитруса по ободку бокала, чтобы его смочить.',
      'Наклоните бокал и проверните его в блюдце с солью или сахаром.',
      'Для креативности можно добавить к соли сушеные травы или цедру цитрусовых.'
    ]
  },
  {
    id: 'fruit-fan',
    name: 'Фруктовый веер',
    description: 'Элегантная техника нарезки фруктов в форме веера для украшения коктейлей.',
    difficulty: 'medium',
    icon: 'Strawberry',
    tools: ['Острый нож', 'Фрукты (клубника, киви, яблоко, груша и т.д.)'],
    tips: [
      'Выбирайте твердые, но спелые фрукты для лучшей нарезки.',
      'Делайте тонкие параллельные надрезы, не прорезая фрукт до конца.',
      'Аккуратно растяните фрукт в стороны для создания веера.',
      'Для предотвращения потемнения яблок и груш сбрызните их лимонным соком.'
    ]
  },
  {
    id: 'herb-bouquet',
    name: 'Травяной букет',
    description: 'Создание букета из свежих трав для украшения и ароматизации коктейлей.',
    difficulty: 'easy',
    icon: 'Flower',
    tools: ['Ножницы', 'Свежие травы (мята, базилик, розмарин, тимьян)'],
    tips: [
      'Используйте только свежие, чистые травы без повреждений.',
      'Слегка помните травы перед использованием, чтобы усилить аромат.',
      'Сочетайте травы с напитками, в которых они уже используются как ингредиент.',
      'Для больших коктейлей можно создать букет из нескольких видов трав.'
    ]
  },
  {
    id: 'carved-garnish',
    name: 'Резной гарнир',
    description: 'Техника создания сложных резных украшений из фруктов и овощей.',
    difficulty: 'hard',
    icon: 'Scissors',
    tools: ['Острый нож', 'Инструменты для карвинга', 'Фрукты и овощи (лимоны, апельсины, огурцы, редис)'],
    tips: [
      'Начните с простых форм, прежде чем переходить к сложным узорам.',
      'Используйте свежие, твердые фрукты и овощи для лучшего результата.',
      'Подготовьте гарниры заранее и храните их в холодной воде для сохранения свежести.',
      'Для начинающих хорошо подойдет создание простых "корон" из лимонов или лайма.'
    ]
  },
  {
    id: 'flamed-zest',
    name: 'Опаленная цедра',
    description: 'Техника поджигания цитрусовой цедры над коктейлем для придания дымного аромата и эффектной подачи.',
    difficulty: 'medium',
    icon: 'Flame',
    tools: ['Нож для цедры', 'Цитрусовые с толстой кожурой (апельсин, лимон)', 'Зажигалка или спички'],
    tips: [
      'Используйте свежие цитрусовые с толстой кожурой, богатой эфирными маслами.',
      'Срежьте большой кусок цедры шириной 3-5 см.',
      'Подожгите зажигалку и держите цедру на расстоянии 5-7 см над коктейлем.',
      'Быстро сожмите цедру, направляя эфирные масла через пламя в коктейль.',
      'Для безопасности практикуйтесь без алкоголя, прежде чем делать это на реальном коктейле.'
    ]
  }
];

export const GarnishCard: React.FC<{ technique: GarnishTechnique }> = ({ technique }) => {
  return (
    <div className="bg-[#2B3144] border border-[#9b87f5]/20 rounded-lg p-4 shadow-md">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 bg-[#9b87f5]/20 rounded-full flex items-center justify-center mr-3">
          <Icon name={technique.icon} size={24} className="text-[#9b87f5]" />
        </div>
        <h3 className="text-xl font-semibold text-[#D6BCFA]">{technique.name}</h3>
        <span className={`ml-auto px-2 py-1 rounded text-xs font-medium ${
          technique.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
          technique.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {technique.difficulty === 'easy' ? 'Легко' : 
           technique.difficulty === 'medium' ? 'Средне' : 'Сложно'}
        </span>
      </div>
      
      <p className="text-gray-300 mb-4">{technique.description}</p>
      
      <div className="mb-3">
        <h4 className="text-sm font-semibold text-[#9b87f5] mb-1">Необходимые инструменты:</h4>
        <ul className="list-disc pl-5 text-sm text-gray-300">
          {technique.tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="text-sm font-semibold text-[#9b87f5] mb-1">Советы:</h4>
        <ul className="list-disc pl-5 text-sm text-gray-300">
          {technique.tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function GarnishTechniquesCollection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {garnishTechniques.map(technique => (
        <GarnishCard key={technique.id} technique={technique} />
      ))}
    </div>
  );
}
