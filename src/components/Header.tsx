
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import BrickLogo from "@/components/BrickLogo";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <BrickLogo />
          <span className="font-pixel text-sm font-bold">Кирпичи</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/catalog" className="text-xs hover:text-primary transition-colors">
            Каталог
          </Link>
          <Link to="/new-products" className="text-xs hover:text-primary transition-colors">
            Новинки
          </Link>
          <Link to="/sales" className="text-xs hover:text-primary transition-colors">
            Акции
          </Link>
          <Link to="/about" className="text-xs hover:text-primary transition-colors">
            О нас
          </Link>
          <Link to="/contacts" className="text-xs hover:text-primary transition-colors">
            Контакты
          </Link>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="hidden md:flex border-primary/30 hover:bg-primary/10 hover:text-primary">
            <Icon name="Search" size={16} />
          </Button>
          <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10 hover:text-primary">
            <Icon name="ShoppingCart" size={16} />
            <span className="ml-1 hidden md:inline-block">Корзина</span>
          </Button>
          <Button variant="primary" size="sm" className="md:hidden">
            <Icon name="Menu" size={16} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
