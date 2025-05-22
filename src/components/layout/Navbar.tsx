import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export function Navbar() {
  return (
    <nav className="w-full fixed bottom-0 left-0 right-0 py-3 px-4 md:px-6 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center backdrop-blur-md bg-[#2B3144]/70 rounded-xl shadow-lg border border-[#9b87f5]/30 py-2 px-4 transition-all duration-300 hover:bg-[#2B3144]/80">
        <Link to="/" className="flex items-center">
          <Icon name="GlassWater" size={24} className="text-[#9b87f5] mr-2" />
          <span className="text-xl font-bold text-[#D6BCFA]">Мир Напитков</span>
        </Link>

        <div className="flex items-center space-x-1 md:space-x-3">
          <Link to="/drinks">
            <Button
              variant="ghost"
              className="text-[#D6BCFA] hover:text-white hover:bg-[#3A4058]/70 rounded-lg transition-all duration-200"
            >
              Генератор
            </Button>
          </Link>

          <Link to="/cart">
            <Button
              variant="ghost"
              className="text-[#D6BCFA] hover:text-white hover:bg-[#3A4058]/70 rounded-lg transition-all duration-200"
            >
              <Icon name="ShoppingCart" size={20} className="mr-1" />
              <span className="hidden md:inline">Корзина</span>
            </Button>
          </Link>

          <Link to="/profile">
            <Button
              variant="ghost"
              className="text-[#D6BCFA] hover:text-white hover:bg-[#3A4058]/70 rounded-lg transition-all duration-200"
            >
              <Icon name="User" size={20} className="mr-1" />
              <span className="hidden md:inline">Профиль</span>
            </Button>
          </Link>

          <Link to="/admin">
            <Button
              variant="ghost"
              className="text-[#D6BCFA] hover:text-white hover:bg-[#3A4058]/70 rounded-lg transition-all duration-200"
            >
              <Icon name="Settings" size={20} className="mr-1" />
              <span className="hidden md:inline">Админ</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
