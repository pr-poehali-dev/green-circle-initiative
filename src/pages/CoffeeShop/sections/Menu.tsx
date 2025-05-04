
import React, { useState } from 'react';
import { Coffee, TeaCup, Cake, UtensilsCrossed } from 'lucide-react';

const menuData = {
  coffee: [
    { name: 'Эспрессо', price: '180₽', description: 'Концентрированный кофе в чистом виде' },
    { name: 'Капучино', price: '250₽', description: 'Идеальный баланс эспрессо с молоком и пеной' },
    { name: 'Латте', price: '280₽', description: 'Мягкий эспрессо с большим количеством взбитого молока' },
  ],
  tea: [
    { name: 'Earl Grey', price: '150₽', description: 'Классический черный чай с бергамотом' },
    { name: 'Зеленый чай', price: '180₽', description: 'Освежающий зеленый чай с мягким вкусом' },
    { name: 'Марокканский мятный', price: '220₽', description: 'Освежающая смесь зеленого чая и мяты' },
  ],
  desserts: [
    { name: 'Чизкейк', price: '350₽', description: 'Нежный десерт с кремовой текстурой' },
    { name: 'Круассан', price: '180₽', description: 'Свежая французская выпечка' },
    { name: 'Шоколадный брауни', price: '280₽', description: 'Насыщенный шоколадный вкус с орехами' },
  ],
  breakfasts: [
    { name: 'Английский завтрак', price: '450₽', description: 'Яичница, бекон, тосты и бобы' },
    { name: 'Омлет с лососем', price: '380₽', description: 'Пышный омлет с нежным лососем и зеленью' },
    { name: 'Гранола с йогуртом', price: '250₽', description: 'Хрустящая гранола со свежими ягодами и йогуртом' },
  ]
};

// Маппинг категорий с иконками
const categoryIcons = {
  coffee: <Coffee className="h-6 w-6" />,
  tea: <TeaCup className="h-6 w-6" />,
  desserts: <Cake className="h-6 w-6" />,
  breakfasts: <UtensilsCrossed className="h-6 w-6" />
};

const categoryTitles = {
  coffee: 'Кофе',
  tea: 'Чай',
  desserts: 'Десерты',
  breakfasts: 'Завтраки'
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  return (
    <section id="menu" className="py-20 bg-[#F5E6D3]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#4A3933] text-center mb-10">Наше Меню</h2>
        
        {/* Категории меню с иконками */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.keys(menuData).map(category => (
            <button 
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category 
                  ? 'bg-[#8B4513] text-white shadow-lg' 
                  : 'bg-[#FFF5E6] text-[#4A3933] hover:bg-[#FFE8C8]'
              }`}
            >
              {categoryIcons[category as keyof typeof categoryIcons]}
              <span>{categoryTitles[category as keyof typeof categoryTitles]}</span>
            </button>
          ))}
        </div>
        
        {/* Элементы меню с анимацией при наведении */}
        <div className="grid md:grid-cols-3 gap-6">
          {menuData[activeCategory as keyof typeof menuData].map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 
                      hover:shadow-xl hover:-translate-y-1 cursor-pointer group"
            >
              <h3 className="text-xl font-semibold text-[#4A3933] mb-2 
                        group-hover:text-[#8B4513] transition-colors">{item.name}</h3>
              <p className="text-gray-600 mb-3 text-sm transition-opacity 
                        group-hover:opacity-100 opacity-80">{item.description}</p>
              <p className="text-[#8B4513] font-bold transition-all 
                        group-hover:scale-110 origin-left transform">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
