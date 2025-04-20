import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GiftIcon, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <GiftIcon className="h-8 w-8 text-primary mr-2" />
            <span className="text-xl font-bold text-foreground">Apple Cards</span>
          </Link>

          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Button>
              Войти
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              className="text-foreground focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden animate-fade-in">
            <nav className="flex flex-col space-y-4 py-4">
              <Button className="w-full">
                Войти
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
