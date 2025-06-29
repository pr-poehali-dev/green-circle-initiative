import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Phone" className="text-primary" size={24} />
            <h1 className="text-2xl font-bold text-gray-900">VIP Номера</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Каталог
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Акции
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Доставка
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
            <Button className="hidden md:inline-flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
