import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export function Footer() {
  return (
    <footer className="w-full bg-[#2B3144] border-t border-[#9b87f5]/20 py-6 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold text-[#D6BCFA] mb-3">
            Мир Напитков
          </h3>
          <p className="text-gray-300 text-sm">
            Откройте для себя мир вкуса с нашими уникальными напитками и
            рецептами.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#D6BCFA] mb-3">Навигация</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:text-[#D6BCFA] transition-colors"
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                to="/drinks"
                className="text-gray-300 hover:text-[#D6BCFA] transition-colors"
              >
                Генератор напитков
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="text-gray-300 hover:text-[#D6BCFA] transition-colors"
              >
                Личный кабинет
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-gray-300 hover:text-[#D6BCFA] transition-colors"
              >
                Корзина
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#D6BCFA] mb-3">Контакты</h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-center text-gray-300">
              <Icon name="Mail" size={16} className="mr-2 text-[#9b87f5]" />
              info@mirnapitkov.ru
            </p>
            <p className="flex items-center text-gray-300">
              <Icon name="Phone" size={16} className="mr-2 text-[#9b87f5]" />
              +7 (495) 123-45-67
            </p>
            <p className="flex items-center text-gray-300">
              <Icon name="MapPin" size={16} className="mr-2 text-[#9b87f5]" />
              г. Москва, ул. Напитковая, 42
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-[#9b87f5]/20 text-center text-xs text-gray-400">
        <p className="mb-2">© 2025 Мир Напитков. Все права защищены.</p>
        <p>
          <Link
            to="/oferta"
            className="text-[#D6BCFA] hover:text-white transition-colors"
          >
            Публичная оферта
          </Link>
          {" · "}
          <Link
            to="/privacy"
            className="text-[#D6BCFA] hover:text-white transition-colors"
          >
            Политика конфиденциальности
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
