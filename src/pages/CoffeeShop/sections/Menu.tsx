
import React, { useState } from 'react';

const menuData = {
  coffee: [
    { name: 'Эспрессо', price: '180₽' },
    { name: 'Капучино', price: '250₽' },
    { name: 'Латте', price: '280₽' },
  ],
  tea: [
    { name: 'Earl Grey', price: '150₽' },
    { name: 'Зеленый чай', price: '180₽' },
    { name: 'Марокканский мятный', price: '220₽' },
  ],
  desserts: [
    { name: 'Чизкейк', price: '350₽' },
    { name: 'Круассан', price: '180₽' },
    { name: 'Шоколадный брауни', price: '280₽' },
  ],
  breakfasts: [
    { name: 'Английский завтрак', price: '450₽' },
    { name: 'Омлет с лососем', price: '380₽' },
    { name: 'Гранола с йогуртом', price: '250₽' },
  ]
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  return (
    <section id="menu" className="py-20 bg-[#F5E6D3]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#4A3933] text-center mb-10">Наше Меню</h2>
        <div className="flex justify-center mb-8 space-x-4">
          {Object.keys(menuData).map(category => (
            <button 
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg ${
                activeCategory === category 
                  ? 'bg-[#8B4513] text-white' 
                  : 'bg-[#FFF5E6] text-[#4A3933]'
              }`}
            >
              {category === 'coffee' ? 'Кофе' : 
               category === 'tea' ? 'Чай' : 
               category === 'desserts' ? 'Десерты' : 
               'Завтраки'}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {menuData[activeCategory as keyof typeof menuData].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#4A3933] mb-2">{item.name}</h3>
              <p className="text-[#8B4513] font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
