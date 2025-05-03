
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo-b.svg" alt="Porsche" className="h-8" />
          <span className="text-xl font-semibold">Porsche Центр</span>
        </div>

        {/* Десктопное меню */}
        <nav className="hidden md:flex space-x-8">
          <a href="#models" className="text-gray-700 hover:text-primary transition-colors">
            Наши модели
          </a>
          <a href="#features" className="text-gray-700 hover:text-primary transition-colors">
            Почему Porsche?
          </a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">
            Связаться с нами
          </a>
        </nav>

        <div className="hidden md:block">
          <Button variant="outline" className="mr-2">
            Запись на тест-драйв
          </Button>
          <Button>
            Позвонить нам
          </Button>
        </div>

        {/* Мобильное меню */}
        <button
          className="block md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Мобильное меню выпадающее */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#models" className="text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100">
              Наши модели
            </a>
            <a href="#features" className="text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100">
              Почему Porsche?
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100">
              Связаться с нами
            </a>
            <Button variant="outline" className="w-full">
              Запись на тест-драйв
            </Button>
            <Button className="w-full">
              Позвонить нам
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
