
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Зоопарк «Баба Фрося»</h3>
            <p className="mb-4 text-green-200">
              Место, где природа и человек встречаются в гармонии.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-green-300">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="hover:text-green-300">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="hover:text-green-300">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-green-300">О нас</a></li>
              <li><a href="#animalcare" className="hover:text-green-300">Опека над животными</a></li>
              <li><a href="#events" className="hover:text-green-300">Мероприятия</a></li>
              <li><a href="#contacts" className="hover:text-green-300">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-300">Цены на билеты</a></li>
              <li><a href="#" className="hover:text-green-300">Правила посещения</a></li>
              <li><a href="#" className="hover:text-green-300">Карта зоопарка</a></li>
              <li><a href="#" className="hover:text-green-300">Вакансии</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="MapPin" className="mr-2 mt-1 flex-shrink-0" size={16} />
                <span>г. Москва, ул. Зоопарковая, д. 12</span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="mr-2 flex-shrink-0" size={16} />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="mr-2 flex-shrink-0" size={16} />
                <span>info@babafrosya-zoo.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-green-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-200 text-sm">
            © 2025 Зоопарк «Баба Фрося». Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-green-200">
            <a href="#" className="hover:text-white">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
