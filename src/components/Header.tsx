import { useState } from "react";
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
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl flex items-center justify-center">
              <Icon name="BookOpen" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">BookStore</span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Icon
                name="Search"
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Поиск книг, авторов..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("catalog")}
              className="text-gray-600 hover:text-amber-600 transition-colors font-medium"
            >
              Каталог
            </button>
            <button
              onClick={() => scrollToSection("bestsellers")}
              className="text-gray-600 hover:text-amber-600 transition-colors font-medium"
            >
              Бестселлеры
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-amber-600 transition-colors font-medium">
              <Icon name="ShoppingCart" size={18} />
              <span>Корзина</span>
              <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                3
              </span>
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-gray-600 hover:text-amber-600 transition-colors font-medium"
            >
              Контакты
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
                onClick={() => scrollToSection("catalog")}
                className="text-gray-600 hover:text-amber-600 transition-colors text-left font-medium"
              >
                Каталог
              </button>
              <button
                onClick={() => scrollToSection("bestsellers")}
                className="text-gray-600 hover:text-amber-600 transition-colors text-left font-medium"
              >
                Бестселлеры
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-amber-600 transition-colors text-left font-medium">
                <Icon name="ShoppingCart" size={18} />
                <span>Корзина (3)</span>
              </button>
              <button
                onClick={() => scrollToSection("contacts")}
                className="text-gray-600 hover:text-amber-600 transition-colors text-left font-medium"
              >
                Контакты
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
