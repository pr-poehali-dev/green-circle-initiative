
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-700 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <span className="text-3xl">🦁</span> Зоопарк "Баба Фрося"
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-yellow-300 transition-colors font-medium">Главная</Link>
          <Link to="/about" className="hover:text-yellow-300 transition-colors font-medium">О нас</Link>
          <Link to="/adoption" className="hover:text-yellow-300 transition-colors font-medium">Опека над животными</Link>
          <Link to="/events" className="hover:text-yellow-300 transition-colors font-medium">Мероприятия</Link>
          <Link to="/contacts" className="hover:text-yellow-300 transition-colors font-medium">Контакты</Link>
          <Button variant="outline" size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 border-0">
            Купить билет
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden container mx-auto mt-4 pb-4 flex flex-col gap-4">
          <Link to="/" className="hover:text-yellow-300 transition-colors" onClick={toggleMenu}>Главная</Link>
          <Link to="/about" className="hover:text-yellow-300 transition-colors" onClick={toggleMenu}>О нас</Link>
          <Link to="/adoption" className="hover:text-yellow-300 transition-colors" onClick={toggleMenu}>Опека над животными</Link>
          <Link to="/events" className="hover:text-yellow-300 transition-colors" onClick={toggleMenu}>Мероприятия</Link>
          <Link to="/contacts" className="hover:text-yellow-300 transition-colors" onClick={toggleMenu}>Контакты</Link>
          <Button variant="outline" size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 border-0 w-full">
            Купить билет
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
