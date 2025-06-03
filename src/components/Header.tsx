import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-start h-16">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-2 hover:bg-gray-50 rounded-lg px-2 py-1 transition-colors">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Icon name="User" size={16} className="text-white" />
              </div>
              <span className="font-medium text-gray-900">Портфолио</span>
              <Icon name="ChevronDown" size={16} className="text-gray-600" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/" className="w-full cursor-pointer">
                  Главная
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/experience" className="w-full cursor-pointer">
                  Опыт работы
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/summary" className="w-full cursor-pointer">
                  Сводка
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/contacts" className="w-full cursor-pointer">
                  Контакты
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile menu button */}
          <div className="md:hidden ml-4">
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
