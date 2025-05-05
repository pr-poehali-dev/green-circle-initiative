import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/Icon';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Отслеживание скролла для изменения прозрачности
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full py-4 z-50 font-montserrat backdrop-blur-lg transition-all duration-300 ${
        scrolled 
          ? 'bg-[#1D2B3F]/90 shadow-lg'
          : 'bg-[#0F1A2A]/60'
      }`}>      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-2xl flex items-center gap-2">
            <div className="relative">
              <Icon 
                name="Coffee" 
                size={28} 
                className="text-[#DEB887] relative z-10 animate-pulse" 
              />
              <div className="absolute -top-1 -left-1 w-[36px] h-[36px] bg-[#4A80BD]/30 rounded-full animate-ping opacity-70"></div>
              <div className="absolute -top-1.5 -left-1.5 w-[40px] h-[40px] bg-[#DEB887]/20 rounded-full animate-pulse"></div>
            </div>
            Утренний Аромат
          </div>
          
          {/* Кнопка мобильного меню */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMenu}
          >
            <Icon name={isOpen ? "X" : "Menu"} size={24} />
          </button>
          
          {/* Навигация десктоп */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-[#DEB887] transition-colors">Главная</a>
            <a href="#about" className="text-white hover:text-[#DEB887] transition-colors">О нас</a>
            <a href="#menu" className="text-white hover:text-[#DEB887] transition-colors">Меню</a>
            <a href="#contacts" className="text-white hover:text-[#DEB887] transition-colors">Контакты</a>
          </nav>
        </div>
        
        {/* Мобильное меню */}
        {isOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col items-center space-y-4">
              <a href="#home" className="text-white hover:text-[#DEB887] transition-colors">Главная</a>
              <a href="#about" className="text-white hover:text-[#DEB887] transition-colors">О нас</a>
              <a href="#menu" className="text-white hover:text-[#DEB887] transition-colors">Меню</a>
              <a href="#contacts" className="text-white hover:text-[#DEB887] transition-colors">Контакты</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;