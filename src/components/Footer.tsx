
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Зоопарк "Баба Фрося"</h3>
            <p className="mb-4 text-gray-300">
              Ждем вас в гости каждый день с 9:00 до 20:00. 
              Приходите познакомиться с нашими удивительными обитателями!
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-yellow-300 transition-colors">Главная</Link></li>
              <li><Link to="/about" className="hover:text-yellow-300 transition-colors">О нас</Link></li>
              <li><Link to="/adoption" className="hover:text-yellow-300 transition-colors">Опека над животными</Link></li>
              <li><Link to="/events" className="hover:text-yellow-300 transition-colors">Мероприятия</Link></li>
              <li><Link to="/contacts" className="hover:text-yellow-300 transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex gap-3 items-center">
                <MapPin size={18} />
                <span>ул. Зверская, 123, г. Москва</span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={18} />
                <span>+7 (123) 456-78-90</span>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={18} />
                <span>info@babafrosa-zoo.ru</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-6 text-center text-gray-400">
          <p>© 2025 Зоопарк "Баба Фрося". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
