
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Home = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen bg-[#F5E6D3] flex items-center justify-center relative"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Текст слева */}
        <div className="space-y-6 text-left">
          <h1 className="text-5xl font-bold text-[#4A3933]">
            Утренний Аромат
          </h1>
          <p className="text-xl text-[#8B4513] leading-relaxed">
            Место, где каждый глоток – это история. 
            Мы создаем уникальный опыт с каждой чашкой кофе, 
            используя только лучшие зерна со всего мира.
          </p>
          <div>
            <button 
              className="bg-[#8B4513] text-white px-6 py-3 rounded-lg 
              hover:bg-[#6B3E23] transition-colors"
            >
              Наше меню
            </button>
          </div>
        </div>

        {/* Фото справа */}
        <div className="flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" 
            alt="Интерьер кофейни" 
            className="w-full max-w-[500px] h-[600px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Указатель вниз с анимацией */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 
        animate-bounce text-[#8B4513] hover:text-[#4A3933] 
        transition-colors duration-300"
      >
        <ChevronDown size={48} />
      </button>
    </section>
  );
};

export default Home;
