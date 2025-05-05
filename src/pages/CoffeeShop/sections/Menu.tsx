import React, { useState } from 'react';
import Icon from '@/components/ui/Icon';

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
  coffee: "Coffee",
  tea: "Coffee", // Заменено на Coffee, так как TeaCup нет в Lucide
  desserts: "Cake",
  breakfasts: "UtensilsCrossed"
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
    <section id="menu" className="py-20 bg-[#0F1A2A] font-montserrat">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-10">Наше Меню</h2>
        
        {/* Категории меню с иконками */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.keys(menuData).map(category => (
            <button 
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105 $ {
                activeCategory === category 
                  ? 'bg-[#4A80BD] text-white shadow-lg font-medium' 
                  : 'bg-[#1D2B3F] text-[#A7C7E7] hover:bg-[#2A3B50] font-medium'
              }`}
            >
              <Icon 
                name={categoryIcons[category as keyof typeof categoryIcons]} 
                size={24} 
                fallback="Coffee"
              />
              <span>{categoryTitles[category as keyof typeof categoryTitles]}</span>
            </button>
          ))}
        </div>
        
        {/* Элементы меню с анимацией при наведении */}
        <div className="grid md:grid-cols-3 gap-6">
          {menuData[activeCategory as keyof typeof menuData].map((item, index) => (
            <div 
              key={index} 
              className="bg-[#1D2B3F] p-6 rounded-lg shadow-md transition-all duration-300 
                      hover:shadow-xl hover:-translate-y-1 cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white 
                          group-hover:text-[#DEB887] transition-colors">{item.name}</h3>
                <Icon 
                  name={
                    activeCategory === 'coffee' ? 'Coffee' :
                    activeCategory === 'tea' ? 'Coffee' :
                    activeCategory === 'desserts' ? 'Cake' : 'UtensilsCrossed'
                  }
                  size={20}
                  className="text-[#DEB887] opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="text-[#A7C7E7] mb-3 text-sm transition-opacity 
                        group-hover:opacity-100 opacity-80 font-light">{item.description}</p>
              <p className="text-[#DEB887] font-bold transition-all 
                        group-hover:scale-110 origin-left transform">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;