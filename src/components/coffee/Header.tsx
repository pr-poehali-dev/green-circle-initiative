
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#4A3933]/80 backdrop-blur-md" 
          : "bg-gradient-to-b from-[#4A3933]/80 via-[#4A3933]/40 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        <div className="flex items-center space-x-2">
          <Coffee className="text-[#D2A679] w-8 h-8" />
          <span className="text-xl font-semibold text-white drop-shadow-md">
            Утренний Аромат
          </span>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-white hover:text-[#D2A679] transition-colors drop-shadow-md">
            О нас
          </a>
          <a href="#menu" className="text-white hover:text-[#D2A679] transition-colors drop-shadow-md">
            Меню
          </a>
          <a href="#contact" className="text-white hover:text-[#D2A679] transition-colors drop-shadow-md">
            Контакты
          </a>
        </nav>

        <div className="hidden md:block">
          <Button 
            variant="outline" 
            className="mr-2 border-white text-white bg-transparent hover:bg-white/20 shadow-lg"
          >
            Бронь стола
          </Button>
          <Button className="bg-[#D2A679] text-[#4A3933] hover:bg-[#B88B5D] shadow-lg border-none">
            Заказать
          </Button>
        </div>

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

      {isMenuOpen && (
        <div className="md:hidden bg-[#4A3933]/90 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#about" className="text-white hover:text-[#D2A679] transition-colors py-2 border-b border-gray-700">
              О нас
            </a>
            <a href="#menu" className="text-white hover:text-[#D2A679] transition-colors py-2 border-b border-gray-700">
              Меню
            </a>
            <a href="#contact" className="text-white hover:text-[#D2A679] transition-colors py-2 border-b border-gray-700">
              Контакты
            </a>
            <Button 
              variant="outline" 
              className="w-full border-white text-white bg-transparent hover:bg-white/20"
            >
              Бронь стола
            </Button>
            <Button className="w-full bg-[#D2A679] text-[#4A3933] hover:bg-[#B88B5D] border-none">
              Заказать
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
