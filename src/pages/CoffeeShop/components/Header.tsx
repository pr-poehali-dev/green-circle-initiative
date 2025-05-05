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
          ? 'bg-[#2E8B57]/80 shadow-lg'
          : 'bg-[#2E8B57]/50'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-2xl flex items-center gap-2">
            <Icon name="Coffee" size={28} className="text-white" />
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