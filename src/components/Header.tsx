
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="font-bold text-xl text-primary">
              Portfolio
            </a>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {["Главная", "Обо мне", "Навыки", "Проекты", "Контакты"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <Button 
            variant="default" 
            size="sm" 
            className="hidden md:inline-flex"
            onClick={() => window.location.href = "#контакты"}
          >
            Связаться
          </Button>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu />
          </Button>
        </div>
        
        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4">
            <ul className="flex flex-col space-y-3">
              {["Главная", "Обо мне", "Навыки", "Проекты", "Контакты"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="block py-2 text-foreground/80 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
