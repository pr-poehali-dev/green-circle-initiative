
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/50 backdrop-blur-md" 
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/public/favicon.svg" alt="Porsche" className="h-9" />
          <span className="text-xl font-semibold text-white">Porsche Центр</span>
        </div>

        {/* Десктопное меню */}
        <nav className="hidden md:flex space-x-8">
          <a href="#models" className="text-white hover:text-primary/90 transition-colors">
            Наши модели
          </a>
          <a href="#features" className="text-white hover:text-primary/90 transition-colors">
            Почему Porsche?
          </a>
          <a href="#contact" className="text-white hover:text-primary/90 transition-colors">
            Связаться с нами
          </a>
        </nav>

        <div className="hidden md:block">
          <Button variant="outline" className="mr-2 border-white text-white hover:bg-white/20">
            Запись на тест-драйв
          </Button>
          <Button className="bg-white text-black hover:bg-white/90">
            Позвонить нам
          </Button>
        </div>

        {/* Мобильное меню */}
        <button
          className="block md:hidden text-white"
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
        <div className="md:hidden bg-black/70 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#models" className="text-white hover:text-primary/90 transition-colors py-2 border-b border-gray-700">
              Наши модели
            </a>
            <a href="#features" className="text-white hover:text-primary/90 transition-colors py-2 border-b border-gray-700">
              Почему Porsche?
            </a>
            <a href="#contact" className="text-white hover:text-primary/90 transition-colors py-2 border-b border-gray-700">
              Связаться с нами
            </a>
            <Button variant="outline" className="w-full border-white text-white hover:bg-white/20">
              Запись на тест-драйв
            </Button>
            <Button className="w-full bg-white text-black hover:bg-white/90">
              Позвонить нам
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
