import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-md">
              <Icon name="Cube" size={24} className="text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-primary">Кирпичи</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/catalog" className="font-medium hover:text-primary transition-colors">
            Каталог
          </Link>
          <Link to="/new" className="font-medium hover:text-primary transition-colors">
            Новинки
          </Link>
          <Link to="/sales" className="font-medium hover:text-primary transition-colors">
            Акции
          </Link>
          <Link to="/about" className="font-medium hover:text-primary transition-colors">
            О нас
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" aria-label="Поиск">
            <Icon name="Search" size={20} />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Личный кабинет">
            <Icon name="User" size={20} />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Корзина" className="relative">
            <Icon name="ShoppingCart" size={20} />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Меню">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;