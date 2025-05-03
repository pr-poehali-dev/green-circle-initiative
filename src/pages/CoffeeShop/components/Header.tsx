
import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#F5E6D3] py-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold text-[#4A3933]">Утренний Аромат</div>
        <nav className="space-x-4">
          <a href="#home" className="text-[#4A3933] hover:text-[#8B4513]">Главная</a>
          <a href="#about" className="text-[#4A3933] hover:text-[#8B4513]">О нас</a>
          <a href="#menu" className="text-[#4A3933] hover:text-[#8B4513]">Меню</a>
          <a href="#contacts" className="text-[#4A3933] hover:text-[#8B4513]">Контакты</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
