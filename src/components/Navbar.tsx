
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-white font-bold text-xl">Зоопарк «Баба Фрося»</Link>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-white hover:text-green-200 px-3 py-2 rounded-md font-medium">Главная</Link>
            <Link to="/about" className="text-white hover:text-green-200 px-3 py-2 rounded-md font-medium">О нас</Link>
            <Link to="/animals" className="text-white hover:text-green-200 px-3 py-2 rounded-md font-medium">Опека над животными</Link>
            <Link to="/events" className="text-white hover:text-green-200 px-3 py-2 rounded-md font-medium">Мероприятия</Link>
            <Link to="/contacts" className="text-white hover:text-green-200 px-3 py-2 rounded-md font-medium">Контакты</Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-green-200 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary">
            <Link to="/" className="text-white hover:text-green-200 block px-3 py-2 rounded-md font-medium">Главная</Link>
            <Link to="/about" className="text-white hover:text-green-200 block px-3 py-2 rounded-md font-medium">О нас</Link>
            <Link to="/animals" className="text-white hover:text-green-200 block px-3 py-2 rounded-md font-medium">Опека над животными</Link>
            <Link to="/events" className="text-white hover:text-green-200 block px-3 py-2 rounded-md font-medium">Мероприятия</Link>
            <Link to="/contacts" className="text-white hover:text-green-200 block px-3 py-2 rounded-md font-medium">Контакты</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
