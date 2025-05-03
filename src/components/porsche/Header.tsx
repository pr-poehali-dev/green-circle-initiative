
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
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 100 100" 
            width="36" 
            height="36"
            className="text-red-600 fill-current"
          >
            <path 
              d="M50,5C25.1,5,5,25.1,5,50s20.1,45,45,45s45-20.1,45-45S74.9,5,50,5z M78.2,70c-2.5,4.5-5.9,8.4-10.3,11.3 c-4.4,2.9-9.6,4.3-15.6,4.3c-6,0-11.2-1.4-15.6-4.3c-4.4-2.9-7.9-6.8-10.3-11.3c-2.5-4.5-3.9-9.6-3.9-15.1 c0-5.5,1.3-10.6,3.9-15.1c2.5-4.5,5.9-8.4,10.3-11.3c4.4-2.9,9.6-4.3,15.6-4.3c6,0,11.2,1.4,15.6,4.3c4.4,2.9,7.9,6.8,10.3,11.3 c2.5,4.5,3.9,9.6,3.9,15.1C82.1,60.4,80.8,65.4,78.2,70z" 
            />
            <path 
              d="M50,15.9c-5.1,0-9.5,1.2-13.3,3.7c-3.8,2.5-6.7,5.8-8.8,9.9c-2.1,4.1-3.2,8.5-3.2,13 c0,4.7,1.1,9.1,3.2,13c2.1,3.9,5.1,7.3,8.8,9.7c3.8,2.5,8.2,3.7,13.3,3.7c5.1,0,9.5-1.2,13.3-3.7c3.8-2.5,6.7-5.8,8.8-9.7 c2.1-3.9,3.2-8.3,3.2-13c0-4.7-1.1-9.1-3.2-13c-2.1-3.9-5.1-7.3-8.8-9.9C59.5,17.1,55.1,15.9,50,15.9z" 
              fill="none" 
              className="stroke-black"
              strokeWidth="2"
            />
            <path 
              d="M35.1,36.7c1.1-2,2.7-3.7,4.7-4.9c2-1.2,4.2-1.8,6.6-1.8c2.5,0,4.6,0.6,6.6,1.8c2,1.2,3.5,2.8,4.7,4.9 c1.1,2,1.7,4.2,1.7,6.6c0,2.4-0.6,4.6-1.7,6.6c-1.1,2-2.7,3.7-4.7,4.9c-2,1.2-4.2,1.8-6.6,1.8c-2.5,0-4.6-0.6-6.6-1.8 c-2-1.2-3.5-2.8-4.7-4.9c-1.1-2-1.7-4.2-1.7-6.6C33.4,40.9,34,38.7,35.1,36.7z" 
              className="fill-red-600"
            />
          </svg>
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
