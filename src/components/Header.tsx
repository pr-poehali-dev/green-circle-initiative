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
            <div className="w-8 h-8 bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🍎</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Apple Gift Cards
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("products")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Карты
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("support")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Поддержка
            </button>
            <button
              onClick={() => scrollToSection("payment")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Оплата
            </button>
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
                onClick={() => scrollToSection("products")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-left"
              >
                Карты
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-left"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("support")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-left"
              >
                Поддержка
              </button>
              <button
                onClick={() => scrollToSection("payment")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-left"
              >
                Оплата
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
