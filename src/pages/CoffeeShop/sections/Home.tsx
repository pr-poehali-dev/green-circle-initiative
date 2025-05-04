
import React from 'react';
import Icon from '@/components/ui/Icon';
import { Button } from '@/components/ui/button';

const Home: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen bg-[#F5E6D3] flex items-center justify-center relative pt-20"
    >
      <div className="absolute w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#8B4513]"></div>
        <div className="absolute top-20 right-20 w-60 h-60 rounded-full bg-[#FFCC99]"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 rounded-full bg-[#DEB887]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Текст слева */}
          <div className="space-y-8 text-left">
            <div>
              <div className="inline-block px-4 py-1 bg-[#FFCC99] rounded-full text-[#4A3933] font-medium mb-4">
                <Icon name="Coffee" size={18} className="inline mr-2" />
                <span>Спешиалти кофе и выпечка</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#4A3933] leading-tight">
                Утренний<br /><span className="text-[#8B4513]">Аромат</span>
              </h1>
            </div>
            
            <p className="text-xl text-[#8B4513] leading-relaxed">
              Место, где каждый глоток – это история. 
              Мы создаем уникальный опыт с каждой чашкой кофе и свежей выпечкой, 
              приготовленной с любовью.
            </p>
            
            <div className="flex items-center gap-4 flex-wrap">
              <Button 
                onClick={scrollToMenu}
                className="bg-[#8B4513] text-white px-6 py-6 rounded-lg 
                hover:bg-[#6B3E23] transition-colors text-lg h-auto"
              >
                <Icon name="Coffee" className="mr-2" />
                Наше меню
              </Button>
              
              <Button 
                variant="outline"
                className="border-[#8B4513] text-[#8B4513] px-6 py-6 rounded-lg 
                hover:bg-[#8B4513] hover:text-white transition-colors text-lg h-auto"
              >
                <Icon name="MapPin" className="mr-2" />
                Как нас найти
              </Button>
              
              <div className="flex items-center mt-4 md:mt-0">
                <div className="flex -space-x-2">
                  <img 
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" 
                    className="w-10 h-10 rounded-full border-2 border-white" 
                    alt="User" 
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12" 
                    className="w-10 h-10 rounded-full border-2 border-white" 
                    alt="User" 
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956" 
                    className="w-10 h-10 rounded-full border-2 border-white" 
                    alt="User" 
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-[#4A3933]">900+ посетителей</div>
                  <div className="text-xs text-[#8B4513]">оценили наш кофе ⭐️ 4.9</div>
                </div>
              </div>
            </div>
          </div>

          {/* Фото справа */}
          <div className="relative hidden md:flex justify-center mt-10 md:mt-0">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" 
                alt="Интерьер кофейни" 
                className="w-full max-w-[500px] h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Фото круассана */}
            <div className="absolute -bottom-10 -left-10 z-20 rotate-6 shadow-lg hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a" 
                alt="Круассан" 
                className="w-[200px] h-[200px] object-cover rounded-2xl border-4 border-white"
              />
            </div>
            
            {/* Фото кофе */}
            <div className="absolute -top-8 -right-8 z-20 -rotate-6 shadow-lg hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd" 
                alt="Кофе" 
                className="w-[180px] h-[180px] object-cover rounded-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute bottom-24 left-10 text-5xl rotate-12 opacity-20">☕</div>
      <div className="absolute top-20 right-10 text-5xl -rotate-12 opacity-20">🥐</div>

      {/* Указатель вниз с анимацией */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 
        animate-bounce text-[#8B4513] hover:text-[#4A3933] 
        transition-colors duration-300"
      >
        <Icon name="ChevronDown" size={48} />
      </button>
    </section>
  );
};

export default Home;
