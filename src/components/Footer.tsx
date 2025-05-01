import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-2 rounded-md">
                <Icon name="Cube" size={24} className="text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">Кирпичи</span>
            </div>
            <div className="flex space-x-4">
              <a href="https://vk.com" className="hover:text-primary" aria-label="ВКонтакте">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="https://t.me" className="hover:text-primary" aria-label="Telegram">
                <Icon name="Send" size={20} />
              </a>
              <a href="https://youtube.com" className="hover:text-primary" aria-label="YouTube">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">О компании</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white">Новости</Link></li>
              <li><Link to="/delivery" className="text-gray-400 hover:text-white">Доставка</Link></li>
              <li><Link to="/payment" className="text-gray-400 hover:text-white">Оплата</Link></li>
              <li><Link to="/contacts" className="text-gray-400 hover:text-white">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li><Link to="/category/1" className="text-gray-400 hover:text-white">Для детей</Link></li>
              <li><Link to="/category/2" className="text-gray-400 hover:text-white">Техник</Link></li>
              <li><Link to="/category/3" className="text-gray-400 hover:text-white">Коллекционные</Link></li>
              <li><Link to="/new" className="text-gray-400 hover:text-white">Новинки</Link></li>
              <li><Link to="/sales" className="text-gray-400 hover:text-white">Распродажа</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-primary flex-shrink-0" />
                <span className="text-gray-400">Москва, ул. Строительная, 123</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+78001234567" className="text-gray-400 hover:text-white">8 (800) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:info@kirpichi.ru" className="text-gray-400 hover:text-white">info@kirpichi.ru</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-primary flex-shrink-0" />
                <span className="text-gray-400">Пн-Вс: 10:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Кирпичи. Все права защищены.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <Link to="/policy" className="hover:text-white">Политика конфиденциальности</Link>
            <Link to="/terms" className="hover:text-white">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;