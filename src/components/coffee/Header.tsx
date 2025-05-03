
import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto max-w-6xl flex justify-between items-center py-4 px-4">
        <Link to="/" className="flex items-center">
          <Coffee className="w-8 h-8 mr-2 text-[#D2A679]" />
          <span className="text-xl font-bold text-[#4A3933]">Утренний Аромат</span>
        </Link>

        <nav className="space-x-6">
          <Link 
            to="/" 
            className="text-[#4A3933] hover:text-[#D2A679] transition-colors"
          >
            Главная
          </Link>
          <Link 
            to="/menu" 
            className="text-[#4A3933] hover:text-[#D2A679] transition-colors"
          >
            Меню
          </Link>
          <Link 
            to="/about" 
            className="text-[#4A3933] hover:text-[#D2A679] transition-colors"
          >
            О нас
          </Link>
          <Link 
            to="/contact" 
            className="text-[#4A3933] hover:text-[#D2A679] transition-colors"
          >
            Контакты
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
