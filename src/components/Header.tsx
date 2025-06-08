import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Главная", href: "#" },
    { label: "О нас", href: "#about" },
    { label: "Услуги", href: "#services" },
    { label: "Контакты", href: "#contact" },
  ];

  return (
    <header className="relative z-50 w-full border-b border-white/10 bg-white/5 backdrop-blur-lg animate-slide-in-down">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Icon name="Rocket" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Поехали!
            </span>
          </div>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-200 font-medium hover:-translate-y-0.5"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Кнопки действий */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              окей не djqlbasdfasdf
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              жопы.
            </Button>
          </div>

          {/* Мобильное меню */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={20} />
          </Button>
        </div>

        {/* Мобильная навигация */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-3">
                <Button variant="ghost" size="sm">
                  Войти
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-500 to-purple-600"
                >
                  Начать
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
