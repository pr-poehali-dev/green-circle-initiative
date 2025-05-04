
import React from 'react';
import Icon from '@/components/ui/Icon';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#F5E6D3] py-4 shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-3">
          <Icon 
            name="Coffee" 
            size={32} 
            className="text-[#8B4513]" 
          />
          <div className="text-2xl font-bold text-[#4A3933]">
            Утренний Аромат
          </div>
        </div>
        <nav className="space-x-4 hidden md:block">
          <a href="#home" className="text-[#4A3933] hover:text-[#8B4513] transition-colors">Главная</a>
          <a href="#about" className="text-[#4A3933] hover:text-[#8B4513] transition-colors">О нас</a>
          <a href="#menu" className="text-[#4A3933] hover:text-[#8B4513] transition-colors">Меню</a>
          <a href="#contacts" className="text-[#4A3933] hover:text-[#8B4513] transition-colors">Контакты</a>
        </nav>
        
        {/* Мобильное меню-бургер */}
        <div className="md:hidden">
          <button className="text-[#4A3933] hover:text-[#8B4513]">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
