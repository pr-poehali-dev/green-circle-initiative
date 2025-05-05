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
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden bg-gradient-to-br from-[#0F1A2A] via-[#162238] to-[#0D1724]"
    >
      {/* Анимированный фон */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Градиентные круги и блики */}
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-[#8B4513]/10 animate-pulse"></div>
        <div className="absolute top-1/4 right-10 w-60 h-60 rounded-full bg-[#FFCC99]/10 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 rounded-full bg-[#DEB887]/10 animate-pulse animation-delay-4000"></div>
        
        {/* Стилизованные "блики" на темном фоне */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gradient-to-br from-[#4A80BD]/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-[#DEB887]/5 to-transparent blur-3xl"></div>
        
        {/* Звездный фон для создания атмосферы ночи */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white w-[2px] h-[2px] opacity-[0.15]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `twinkle ${3 + Math.random() * 7}s ease-in-out infinite ${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Анимированные кофейные зерна */}
        <div className="absolute top-20 left-[20%] rotate-45 opacity-5 animate-float-slow text-5xl">☕</div>
        <div className="absolute top-1/3 right-[15%] -rotate-12 opacity-5 animate-float-slow animation-delay-2000 text-6xl">🥐</div>
        <div className="absolute bottom-1/4 left-[10%] rotate-12 opacity-5 animate-float-slow animation-delay-4000 text-5xl">☕</div>
        <div className="absolute bottom-32 right-[25%] rotate-45 opacity-5 animate-float-slow animation-delay-3000 text-4xl">🥐</div>
        
        {/* Тонкие линии, изображающие пар от кофе */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,64 C150,150 350,0 500,64 C650,150 850,0 1000,64 L1000,0 L0,0 Z" 
            fill="#A7C7E7" 
            className="animate-wave animation-delay-2000"
          ></path>
          <path 
            d="M0,128 C150,214 350,64 500,128 C650,214 850,64 1000,128 L1000,0 L0,0 Z" 
            fill="#DEB887" 
            className="animate-wave"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Текст слева */}
          <div className="space-y-8 text-left">
            <div>
              <div className="inline-block px-4 py-1 bg-[#4A80BD] rounded-full text-white font-medium mb-4 animate-fadeIn">
                <Icon name="Coffee" size={18} className="inline mr-2" />
                <span>Спешиалти кофе и выпечка</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight animate-slideInFromLeft">
                Утренний<br /><span className="text-[#DEB887]">Аромат</span>
              </h1>
            </div>
            
            <p className="text-xl text-[#A7C7E7] leading-relaxed font-light animate-slideInFromLeft animation-delay-300">
              Место, где каждый глоток – это история. 
              Мы создаем уникальный опыт с каждой чашкой кофе и свежей выпечкой, 
              приготовленной с любовью.
            </p>
            
            <div className="flex items-center gap-4 flex-wrap animate-fadeIn animation-delay-600">
              <Button 
                onClick={scrollToMenu}
                className="bg-[#DD2E44] text-white px-6 py-6 rounded-lg 
                hover:bg-[#C1223A] transition-colors text-lg h-auto font-medium"
              >
                <Icon name="Coffee" className="mr-2" />
                Наше меню
              </Button>
              
              <Button 
                variant="outline"
                className="border-[#DEB887] text-[#DEB887] px-6 py-6 rounded-lg 
                bg-transparent/20 backdrop-blur-sm
                hover:bg-[#DEB887] hover:text-[#0F1A2A] transition-colors text-lg h-auto font-medium"
              >
                <Icon name="MapPin" className="mr-2" />
                Как нас найти
              </Button>
              
              <div className="flex items-center mt-4 md:mt-0">
                <div className="flex -space-x-2">
                  <img 
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" 
                    className="w-10 h-10 rounded-full border-2 border-[#1D2B3F]" 
                    alt="User" 
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12" 
                    className="w-10 h-10 rounded-full border-2 border-[#1D2B3F]" 
                    alt="User" 
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956" 
                    className="w-10 h-10 rounded-full border-2 border-[#1D2B3F]" 
                    alt="User" 
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-white">900+ посетителей</div>
                  <div className="text-xs text-[#DEB887]">оценили наш кофе ⭐️ 4.9</div>
                </div>
              </div>
            </div>
          </div>

          {/* Фото справа */}
          <div className="relative hidden md:flex justify-center mt-10 md:mt-0 animate-fadeIn animation-delay-300">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" 
                alt="Интерьер кофейни" 
                className="w-full max-w-[500px] h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Фото круассана */}
            <div className="absolute -bottom-10 -left-10 z-20 rotate-6 shadow-lg hover:rotate-0 transition-transform duration-300 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a" 
                alt="Круассан" 
                className="w-[200px] h-[200px] object-cover rounded-2xl border-4 border-[#1D2B3F]"
              />
            </div>
            
            {/* Фото кофе */}
            <div className="absolute -top-8 -right-8 z-20 -rotate-6 shadow-lg hover:rotate-0 transition-transform duration-300 animate-float animation-delay-2000">
              <img 
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd" 
                alt="Кофе" 
                className="w-[180px] h-[180px] object-cover rounded-2xl border-4 border-[#1D2B3F]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Указатель вниз с анимацией */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 
        transition-all duration-500 hover:text-white text-[#A7C7E7]
        animate-[pulse_3s_ease-in-out_infinite]"
      >
        <Icon name="ChevronDown" size={48} />
      </button>
    </section>
  );
};

export default Home;