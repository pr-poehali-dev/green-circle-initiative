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
              <span className="text-white font-bold text-lg">💻</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Юра.dev</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Проекты
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Портфолио
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-gray-600 hover:text-purple-600 transition-colors"
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
                onClick={() => scrollToSection("projects")}
                className="text-gray-600 hover:text-purple-600 transition-colors text-left"
              >
                Проекты
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-gray-600 hover:text-purple-600 transition-colors text-left"
              >
                Портфолио
              </button>
              <button
                onClick={() => scrollToSection("contacts")}
                className="text-gray-600 hover:text-purple-600 transition-colors text-left"
              >
                Контакты
              </button>
              <div className="flex flex-col space-y-2 pt-2">
                <a
                  href="mailto:yura@dev.example"
                  className="text-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Написать письмо
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
