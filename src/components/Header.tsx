
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
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <Icon name="Search" size={14} />
          </Button>
          <Button variant="ghost" size="sm">
            <Icon name="ShoppingCart" size={14} />
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Icon name="Menu" size={14} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
