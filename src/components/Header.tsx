import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🚀</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Poehali.dev</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Как работает
            </button>
            <button
              onClick={() => scrollToSection("conditions")}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Условия
            </button>
            <button
              onClick={() => scrollToSection("calculator")}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Калькулятор
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              FAQ
            </button>
            <Button variant="outline" size="sm">
              Вход для партнеров
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-blue-600"
            >
              Стать партнером
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-600 hover:text-purple-600 transition-colors text-left"
              >
                Как работает
              </button>
              <button
                onClick={() => scrollToSection("conditions")}
                className="text-gray-600 hover:text-purple-600 transition-colors text-left"
              >
                Условия
              </button>
              <button
                onClick={() => scrollToSection("calculator")}
                className="text-gray-600 hover:text-purple-600 transition-colors text-left"
              >
                Калькулятор
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-600 hover:text-purple-600 transition-colors text-left"
              >
                FAQ
              </button>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" size="sm">
                  Вход для партнеров
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-blue-600"
                >
                  Стать партнером
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
