import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Icon name="User" size={16} className="text-white" />
            </div>
            <span className="font-medium text-gray-900">Портфолио</span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Главная
            </Link>
            <Link
              to="/experience"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Опыт работы
            </Link>
            <Link
              to="/summary"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Сводка
            </Link>
            <Link
              to="/contacts"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Контакты
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Icon
              name="Menu"
              size={24}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
