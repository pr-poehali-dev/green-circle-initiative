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
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl flex items-center justify-center">
              <Icon name="Gamepad2" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">GameSub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("subscriptions")}
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
            >
              Подписки
            </button>
            <button
              onClick={() => scrollToSection("games")}
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
            >
              Игры
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("support")}
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
            >
              Поддержка
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
                onClick={() => scrollToSection("subscriptions")}
                className="text-gray-600 hover:text-purple-600 transition-colors text-left font-medium"
              >
                Подписки
              </button>
              <button
                onClick={() => scrollToSection("games")}
                className="text-gray-600 hover:text-purple-600 transition-colors text-left font-medium"
              >
                Игры
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-600 hover:text-purple-600 transition-colors text-left font-medium"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("support")}
                className="text-gray-600 hover:text-purple-600 transition-colors text-left font-medium"
              >
                Поддержка
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
