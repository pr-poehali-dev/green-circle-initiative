import React from 'react';
import Icon from '@/components/ui/Icon';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#1D2B3F] py-4 shadow-md z-50 font-montserrat">
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
        <nav className="space-x-6 hidden md:block">
          <a href="#home" className="text-white hover:text-[#DEB887] transition-colors font-medium">Главная</a>
          <a href="#about" className="text-white hover:text-[#DEB887] transition-colors font-medium">О нас</a>
          <a href="#menu" className="text-white hover:text-[#DEB887] transition-colors font-medium">Меню</a>
          <a href="#contacts" className="text-white hover:text-[#DEB887] transition-colors font-medium">Контакты</a>
        </nav>
        
        {/* Мобильное меню-бургер */}
        <div className="md:hidden">
          <button className="text-white hover:text-[#DEB887]">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
