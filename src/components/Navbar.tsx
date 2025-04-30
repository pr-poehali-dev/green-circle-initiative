
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Porsche_logo.svg/2000px-Porsche_logo.svg.png" 
            alt="Porsche Logo" 
            className="h-10"
          />
        </Link>
        
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-wider">
          <a href="#models" className="hover:text-red-500 transition-colors">Модели</a>
          <a href="#gallery" className="hover:text-red-500 transition-colors">Галерея</a>
          <a href="#specs" className="hover:text-red-500 transition-colors">Характеристики</a>
          <a href="#customize" className="hover:text-red-500 transition-colors">Конфигуратор</a>
          <a href="#test-drive" className="hover:text-red-500 transition-colors">Тест-драйв</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Контакты
          </Button>
          <Button className="bg-red-600 hover:bg-red-700">
            Заказать
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
