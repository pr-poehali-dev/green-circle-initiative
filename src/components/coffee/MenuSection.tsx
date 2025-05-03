
import { Coffee, CupSoda, Cookie } from "lucide-react";

const menuItems = [
  {
    category: "Кофе",
    icon: Coffee,
    items: [
      { name: "Эспрессо", description: "Классический итальянский напиток", price: "180₽" },
      { name: "Капучино", description: "Нежный кофе с молочной пенкой", price: "220₽" },
      { name: "Латте", description: "Мягкий кофейный напиток", price: "250₽" }
    ]
  },
  {
    category: "Напитки",
    icon: CupSoda,
    items: [
      { name: "Эрл Грей", description: "Классический черный чай с бергамотом", price: "150₽" },
      { name: "Зеленый Сенча", description: "Традиционный японский чай", price: "180₽" },
      { name: "Ромашковый", description: "Травяной успокаивающий чай", price: "160₽" }
    ]
  },
  {
    category: "Десерты",
    icon: Cookie,
    items: [
      { name: "Круассан", description: "Свежая выпечка", price: "120₽" },
      { name: "Чизкейк", description: "Нежный десерт", price: "220₽" },
      { name: "Макарон", description: "Французское пирожное", price: "100₽" }
    ]
  }
];

const MenuSection = () => {
  return (
    <section id="menu" className="bg-[#F5E6D3] py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#4A3933]">
          Наше Меню
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((category) => (
            <div 
              key={category.category} 
              className="bg-white rounded-lg shadow-md p-6 transform transition-all hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <category.icon className="w-8 h-8 mr-4 text-[#D2A679]" />
                <h3 className="text-2xl font-semibold text-[#4A3933]">
                  {category.category}
                </h3>
              </div>
              
              {category.items.map((item) => (
                <div 
                  key={item.name} 
                  className="border-t border-gray-200 py-3"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-[#4A3933]">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <span className="text-[#D2A679] font-bold">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
