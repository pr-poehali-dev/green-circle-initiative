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
    <header 
      className={`fixed top-0 left-0 w-full py-4 z-50 font-montserrat backdrop-blur-lg transition-all duration-300 ${
        scrolled 
          ? 'bg-[#1D2B3F]/80 shadow-lg'
          : 'bg-[#1D2B3F]/50'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-3">
          <Icon 
            name="Coffee" 
            size={32} 
            className="text-[#DEB887]" 
          />
          <div className="text-2xl font-bold text-white">
            Утренний Аромат
          </div>
        </div>

        {/* Десктопное меню */}
        <nav className="space-x-6 hidden md:block">
          <a href="#home" className="text-white hover:text-[#DEB887] transition-colors font-medium">Главная</a>
          <a href="#about" className="text-white hover:text-[#DEB887] transition-colors font-medium">О нас</a>
          <a href="#menu" className="text-white hover:text-[#DEB887] transition-colors font-medium">Меню</a>
          <a href="#contacts" className="text-white hover:text-[#DEB887] transition-colors font-medium">Контакты</a>
        </nav>
        
        {/* Мобильное меню-бургер */}
        <div className="md:hidden">
          <button 
            className="text-white hover:text-[#DEB887] p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Меню"
          >
            <Icon name={isOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {/* Мобильное выпадающее меню */}
      {isOpen && (
        <div className="md:hidden bg-[#1D2B3F]/95 backdrop-blur-lg py-4 px-4 shadow-lg border-t border-[#2A3B50]">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-white hover:text-[#DEB887] transition-colors font-medium py-2 px-4 rounded-md hover:bg-[#2A3B50]/50"
              onClick={() => setIsOpen(false)}
            >
              Главная
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-[#DEB887] transition-colors font-medium py-2 px-4 rounded-md hover:bg-[#2A3B50]/50"
              onClick={() => setIsOpen(false)}
            >
              О нас
            </a>
            <a 
              href="#menu" 
              className="text-white hover:text-[#DEB887] transition-colors font-medium py-2 px-4 rounded-md hover:bg-[#2A3B50]/50"
              onClick={() => setIsOpen(false)}
            >
              Меню
            </a>
            <a 
              href="#contacts" 
              className="text-white hover:text-[#DEB887] transition-colors font-medium py-2 px-4 rounded-md hover:bg-[#2A3B50]/50"
              onClick={() => setIsOpen(false)}
            >
              Контакты
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
