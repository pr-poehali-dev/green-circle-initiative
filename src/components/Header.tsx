import { useState } from "react";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  currentPage: "home" | "contacts";
  onNavigate: (page: "home" | "contacts") => void;
}

const Header = ({ currentPage, onNavigate }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-white">
            <Icon name="Calculator" size={24} className="text-blue-300" />
            <span className="text-xl font-bold">Token Calculator</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => onNavigate("home")}
              className={`text-white hover:text-blue-300 transition-colors px-3 py-2 rounded-md ${
                currentPage === "home" ? "bg-blue-600/30 text-blue-300" : ""
              }`}
            >
              🏠 Главная
            </button>
            <button
              onClick={() => onNavigate("contacts")}
              className={`text-white hover:text-blue-300 transition-colors px-3 py-2 rounded-md ${
                currentPage === "contacts" ? "bg-blue-600/30 text-blue-300" : ""
              }`}
            >
              📞 Контакты
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-blue-300 transition-colors"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => {
                  onNavigate("home");
                  setIsMenuOpen(false);
                }}
                className={`text-white hover:text-blue-300 transition-colors px-3 py-2 rounded-md text-left ${
                  currentPage === "home" ? "bg-blue-600/30 text-blue-300" : ""
                }`}
              >
                🏠 Главная
              </button>
              <button
                onClick={() => {
                  onNavigate("contacts");
                  setIsMenuOpen(false);
                }}
                className={`text-white hover:text-blue-300 transition-colors px-3 py-2 rounded-md text-left ${
                  currentPage === "contacts"
                    ? "bg-blue-600/30 text-blue-300"
                    : ""
                }`}
              >
                📞 Контакты
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
