import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Милая зверушка - лиса */}
              <path d="M24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4Z" fill="#FBB040" />
              <path d="M18 18C19.1 18 20 17.1 20 16C20 14.9 19.1 14 18 14C16.9 14 16 14.9 16 16C16 17.1 16.9 18 18 18Z" fill="#FFFFFF" />
              <path d="M30 18C31.1 18 32 17.1 32 16C32 14.9 31.1 14 30 14C28.9 14 28 14.9 28 16C28 17.1 28.9 18 30 18Z" fill="#FFFFFF" />
              <path d="M24 36C27.3137 36 30 33.3137 30 30C30 26.6863 27.3137 24 24 24C20.6863 24 18 26.6863 18 30C18 33.3137 20.6863 36 24 36Z" fill="#FFFFFF" />
              <path d="M16 26C16 24.34 14.66 23 13 23C11.34 23 10 24.34 10 26C10 27.66 11.34 29 13 29C14.66 29 16 27.66 16 26Z" fill="#FBB040" />
              <path d="M38 26C38 24.34 36.66 23 35 23C33.34 23 32 24.34 32 26C32 27.66 33.34 29 35 29C36.66 29 38 27.66 38 26Z" fill="#FBB040" />
              <path d="M24 32C23.45 32 23 31.55 23 31C23 30.45 23.45 30 24 30C24.55 30 25 30.45 25 31C25 31.55 24.55 32 24 32Z" fill="#000000" />
              <path d="M20 26C20 25.45 19.55 25 19 25C18.45 25 18 25.45 18 26C18 26.55 18.45 27 19 27C19.55 27 20 26.55 20 26Z" fill="#000000" />
              <path d="M30 26C30 25.45 29.55 25 29 25C28.45 25 28 25.45 28 26C28 26.55 28.45 27 29 27C29.55 27 30 26.55 30 26Z" fill="#000000" />
            </svg>
            <span className="font-bold text-xl text-gray-800 ml-2">ЗооПарк</span>
          </div>
        </Link>

        {/* Десктопное меню */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-orange-500 font-medium">Главная</Link>
          <Link to="/animals" className="text-gray-600 hover:text-orange-500 font-medium">Животные</Link>
          <Link to="/events" className="text-gray-600 hover:text-orange-500 font-medium">События</Link>
          <Link to="/about" className="text-gray-600 hover:text-orange-500 font-medium">О нас</Link>
          <Link to="/contacts" className="text-gray-600 hover:text-orange-500 font-medium">Контакты</Link>
        </nav>

        {/* Кнопка покупки билета */}
        <div className="hidden md:block">
          <Link to="/tickets" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition duration-300">
            Купить билет
          </Link>
        </div>

        {/* Мобильная кнопка меню */}
        <button 
          className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none" 
          onClick={toggleMenu}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-600 hover:text-orange-500 py-2 font-medium">Главная</Link>
              <Link to="/animals" className="text-gray-600 hover:text-orange-500 py-2 font-medium">Животные</Link>
              <Link to="/events" className="text-gray-600 hover:text-orange-500 py-2 font-medium">События</Link>
              <Link to="/about" className="text-gray-600 hover:text-orange-500 py-2 font-medium">О нас</Link>
              <Link to="/contacts" className="text-gray-600 hover:text-orange-500 py-2 font-medium">Контакты</Link>
              <Link to="/tickets" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition duration-300 inline-block text-center">
                Купить билет
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;