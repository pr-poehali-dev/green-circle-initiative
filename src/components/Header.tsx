
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GiftIcon, Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <GiftIcon className="h-8 w-8 text-[#8B5CF6] mr-2" />
            <span className="text-xl font-bold text-[#222]">Apple Cards</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#8B5CF6] font-medium">
              Главная
            </Link>
            <Link to="#cards" className="text-gray-700 hover:text-[#8B5CF6] font-medium">
              Карты
            </Link>
            <Link to="#faq" className="text-gray-700 hover:text-[#8B5CF6] font-medium">
              FAQ
            </Link>
            <Link to="#contact" className="text-gray-700 hover:text-[#8B5CF6] font-medium">
              Контакты
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-[#8B5CF6] hover:bg-[#7E69AB]">
              Войти
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden animate-fade-in">
            <nav className="flex flex-col space-y-4 py-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-[#8B5CF6] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link
                to="#cards"
                className="text-gray-700 hover:text-[#8B5CF6] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Карты
              </Link>
              <Link
                to="#faq"
                className="text-gray-700 hover:text-[#8B5CF6] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                to="#contact"
                className="text-gray-700 hover:text-[#8B5CF6] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
              <Button className="bg-[#8B5CF6] hover:bg-[#7E69AB] w-full">
                Войти
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
