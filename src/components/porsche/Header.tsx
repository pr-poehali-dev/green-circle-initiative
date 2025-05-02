
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Car } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black bg-opacity-90 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center text-white">
            <Car className="w-8 h-8 mr-2" />
            <span className="text-xl font-bold">PORSCHE</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#models" className="text-white hover:text-gray-300 transition">Модели</a>
          <a href="#features" className="text-white hover:text-gray-300 transition">Особенности</a>
          <a href="#contact" className="text-white hover:text-gray-300 transition">Контакты</a>

          <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-black transition-colors ml-4">
            <Phone className="w-4 h-4 mr-2" />
            +7 (800) 123-45-67
          </Button>

        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Меню"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 absolute top-full left-0 w-full py-4">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#models" 
              className="text-white hover:text-gray-300 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Модели
            </a>
            <a 
              href="#features" 
              className="text-white hover:text-gray-300 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Особенности
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-gray-300 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Контакты
            </a>
            <Button className="bg-white text-black hover:bg-gray-200 w-full justify-center mt-2">
              <Phone className="w-4 h-4 mr-2" />
              +7 (800) 123-45-67
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
