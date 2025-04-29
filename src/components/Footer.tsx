
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Зоопарк «Баба Фрося»</h3>
            <p className="text-gray-300">
              Познакомьтесь с удивительным миром животных в нашем уютном зоопарке.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Главная</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">О нас</Link>
              </li>
              <li>
                <Link to="/animals" className="text-gray-300 hover:text-white">Опека над животными</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white">Мероприятия</Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-300 hover:text-white">Контакты</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tickets" className="text-gray-300 hover:text-white">Билеты и цены</Link>
              </li>
              <li>
                <Link to="/rules" className="text-gray-300 hover:text-white">Правила посещения</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white">Часто задаваемые вопросы</Link>
              </li>
              <li>
                <Link to="/visitors" className="text-gray-300 hover:text-white">Посетителям</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <address className="not-italic text-gray-300">
              <p>г. Зверево, ул. Лесная, д. 123</p>
              <p className="mt-2">Телефон: +7 (123) 456-78-90</p>
              <p className="mt-2">Email: info@babafrosa-zoo.ru</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">© 2025 Зоопарк «Баба Фрося». Все права защищены.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white text-sm">Политика конфиденциальности</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white text-sm">Условия использования</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
