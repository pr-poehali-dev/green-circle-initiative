
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
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        <div className="flex items-center space-x-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="36" 
            height="36"
            className="text-red-600 fill-current"
          >
            {/* Силуэт спортивного автомобиля Porsche */}
            <path d="M22.9,10.2l-1.2-4.5C21.6,5.3,21.2,5,20.8,5h-2.3v0.5c0,0.1-0.1,0.2-0.2,0.2h-5.2c-0.1,0-0.2-0.1-0.2-0.2V5H7.7
              c-0.1,0-0.2,0-0.3,0.1C7.3,5.2,7.1,5.3,7.1,5.5c-0.1,0.2-0.2,0.3-0.4,0.3c-0.2,0-0.4,0-0.5,0.1C5.8,6.1,5.5,6.5,5.3,7
              C5.2,7.2,5.2,7.5,5.1,7.8c-0.1,0.3-0.1,0.5-0.2,0.8c0,0.2-0.1,0.5-0.2,0.7c-0.1,0.2-0.1,0.5-0.1,0.7l0,0.1c0,0.3,0,0.5,0.1,0.8
              C4.7,11,4.8,11.2,5,11.4c0.2,0.2,0.3,0.4,0.5,0.6c0.2,0.2,0.4,0.3,0.6,0.4c0.1,0,0.1,0.1,0.2,0.1c0.2,0,0.3,0,0.5,0c0.1,0,0.2,0,0.3,0
              c0.2,0,0.4,0,0.6,0c0.1,0,0.2,0,0.3,0.1C8,12.7,8.1,12.8,8.2,12.9c0,0.1,0.1,0.2,0.1,0.3c0.1,0.4,0.2,0.7,0.3,1.1
              c0.1,0.4,0.3,0.8,0.5,1.1c0.2,0.3,0.5,0.6,0.8,0.8c0.3,0.2,0.7,0.3,1.1,0.4c0.2,0.1,0.5,0.1,0.7,0.1c0.2,0,0.5-0.1,0.7-0.1
              c0.4-0.1,0.8-0.2,1.1-0.4c0.3-0.2,0.6-0.4,0.8-0.8c0.2-0.3,0.4-0.7,0.5-1.1c0.1-0.4,0.2-0.7,0.3-1.1c0-0.1,0.1-0.2,0.1-0.3
              c0.1-0.1,0.1-0.2,0.2-0.2c0.1,0,0.2-0.1,0.3-0.1c0.2,0,0.4,0,0.6,0c0.1,0,0.2,0,0.3,0c0.2,0,0.3,0,0.5,0c0.1,0,0.1,0,0.2-0.1
              c0.2-0.1,0.4-0.3,0.6-0.4c0.2-0.2,0.3-0.4,0.5-0.6c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.1-0.5,0.1-0.8l0-0.1c0-0.2-0.1-0.5-0.1-0.7
              c-0.1-0.2-0.1-0.5-0.2-0.7c-0.1-0.3-0.2-0.5-0.2-0.8C18,7.5,17.9,7.2,17.8,7c-0.1-0.1-0.1-0.3-0.3-0.4c-0.1-0.1-0.3-0.2-0.4-0.3
              C17,6.2,16.9,6.1,16.8,6c-0.1-0.1-0.2-0.2-0.4-0.2H16c-0.2,0-0.5,0-0.7,0c-0.1,0-0.2,0-0.3,0h-0.1c0,0,0,0-0.1,0h-0.1
              c0,0,0,0-0.1,0h-0.1c0,0,0,0-0.1,0c-0.1,0-0.1,0-0.2,0h-0.1c0,0,0,0-0.1,0c-0.1,0-0.3,0-0.4,0.1c-0.1,0-0.2,0.1-0.2,0.2
              c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.1,0.3-0.1,0.4c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.2,0,0.2c0,0.1,0,0.1,0,0.2
              c0,0.1,0,0.1,0,0.2c0,0.1,0,0.2,0,0.3c0,0.5-0.1,1.1-0.1,1.6c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1
              c0,0.1-0.1,0.1-0.2,0.1h-4.2c-0.1,0-0.1,0-0.2-0.1c0,0,0-0.1,0-0.1c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2
              c0-0.5-0.1-1.1-0.1-1.6c0-0.1,0-0.2,0-0.3c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c0-0.1,0-0.2,0-0.2c0-0.1,0-0.1,0-0.2
              c0,0,0-0.1,0-0.1c0-0.1-0.1-0.3-0.1-0.4c-0.1-0.1-0.1-0.2-0.2-0.3C8.3,6.2,8.2,6.2,8.1,6.1C8,6.1,7.8,6,7.7,6c0,0,0,0-0.1,0H7.5
              c-0.1,0-0.1,0-0.2,0c0,0,0,0-0.1,0H7.1c0,0,0,0-0.1,0H6.9c0,0,0,0-0.1,0H6.7c-0.1,0-0.2,0-0.3,0c-0.2,0-0.5,0-0.7,0H5.4
              c-0.1,0-0.3,0.1-0.4,0.2C5,6.1,4.9,6.2,4.8,6.3C4.7,6.3,4.5,6.4,4.4,6.5C4.3,6.6,4.1,6.8,4,7c-0.1,0.2-0.2,0.5-0.3,0.8
              C3.6,8.1,3.5,8.3,3.4,8.6C3.3,8.9,3.3,9.1,3.2,9.4c-0.1,0.3-0.1,0.5-0.1,0.8c0,0.1,0,0.3,0,0.4c0,0.1,0,0.3,0,0.4c0,0.1,0,0.3,0.1,0.4
              c0,0.1,0.1,0.3,0.1,0.4c0.1,0.3,0.2,0.5,0.3,0.8c0.1,0.2,0.3,0.5,0.5,0.6C4.3,13.3,4.5,13.5,4.8,13.6c0.3,0.1,0.5,0.2,0.8,0.3
              c0.4,0.1,0.9,0.1,1.3,0.1c0.4,0,0.9,0,1.3,0.1c0.1,0,0.3,0,0.4,0.1c0.1,0.1,0.3,0.1,0.4,0.2c0.1,0.1,0.2,0.2,0.3,0.3C9.5,14.8,9.6,15,9.6,15.2
              c0.1,0.3,0.2,0.6,0.3,0.8c0.1,0.3,0.3,0.6,0.5,0.8c0.2,0.2,0.4,0.5,0.7,0.6c0.3,0.2,0.5,0.3,0.8,0.3c0.3,0.1,0.6,0.1,0.9,0.1
              c0.3,0,0.6,0,0.9-0.1c0.3-0.1,0.6-0.2,0.8-0.3c0.3-0.2,0.5-0.4,0.7-0.6c0.2-0.2,0.4-0.5,0.5-0.8c0.1-0.3,0.2-0.6,0.3-0.8
              c0.1-0.2,0.1-0.4,0.2-0.5c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.1,0.4-0.2c0.1,0,0.3-0.1,0.4-0.1c0.4-0.1,0.9-0.1,1.3-0.1
              c0.4,0,0.9,0,1.3-0.1c0.3-0.1,0.6-0.2,0.8-0.3c0.3-0.1,0.5-0.3,0.7-0.5c0.2-0.2,0.4-0.4,0.5-0.6c0.1-0.2,0.3-0.5,0.3-0.8
              c0.1-0.1,0.1-0.3,0.1-0.4c0-0.1,0.1-0.3,0.1-0.4c0-0.1,0-0.3,0-0.4c0-0.1,0-0.3,0-0.4C23,9.9,23,9.6,22.9,9.4C22.9,9.7,22.9,9.9,22.9,10.2z" />
          </svg>
          <span className="text-xl font-semibold text-white drop-shadow-md">Porsche Центр</span>
        </div>

        {/* Десктопное меню */}
        <nav className="hidden md:flex space-x-8">
          <a href="#models" className="text-white hover:text-red-400 transition-colors drop-shadow-md">
            Наши модели
          </a>
          <a href="#features" className="text-white hover:text-red-400 transition-colors drop-shadow-md">
            Почему Porsche?
          </a>
          <a href="#contact" className="text-white hover:text-red-400 transition-colors drop-shadow-md">
            Связаться с нами
          </a>
        </nav>

        <div className="hidden md:block">
          <Button 
            variant="outline" 
            className="mr-2 bg-[#D5001C] hover:bg-[#B0001A] text-white shadow-lg border-none"
            onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Запись на тест-драйв
          </Button>
          <Button className="bg-red-600 text-white hover:bg-red-700 shadow-lg border-none">
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
        <div className="md:hidden bg-black/90 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#models" className="text-white hover:text-red-400 transition-colors py-2 border-b border-gray-700">
              Наши модели
            </a>
            <a href="#features" className="text-white hover:text-red-400 transition-colors py-2 border-b border-gray-700">
              Почему Porsche?
            </a>
            <a href="#contact" className="text-white hover:text-red-400 transition-colors py-2 border-b border-gray-700">
              Связаться с нами
            </a>
            <Button 
              variant="outline" 
              className="w-full bg-[#D5001C] hover:bg-[#B0001A] text-white border-none"
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Запись на тест-драйв
            </Button>
            <Button className="w-full bg-red-600 text-white hover:bg-red-700 border-none">
              Позвонить нам
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
