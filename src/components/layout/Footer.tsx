import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export function Footer() {
  return (
    <footer className="w-full bg-red-900 border-t border-red-500/20 py-6 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold text-red-300 mb-3">Мир Напитков</h3>
          <p className="text-red-100 text-sm">
            Откройте для себя мир вкуса с нашими уникальными напитками и
            рецептами.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-red-300 mb-3">Навигация</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                className="text-red-200 hover:text-red-300 transition-colors"
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                to="/drinks"
                className="text-red-200 hover:text-red-300 transition-colors"
              >
                Генератор напитков
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="text-red-200 hover:text-red-300 transition-colors"
              >
                Личный кабинет
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-red-200 hover:text-red-300 transition-colors"
              >
                Корзина
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-red-300 mb-3">Контакты</h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-center text-red-200">
              <Icon name="Mail" size={16} className="mr-2 text-red-400" />
              info@mirnapitkov.ru
            </p>
            <p className="flex items-center text-red-200">
              <Icon name="Phone" size={16} className="mr-2 text-red-400" />
              +7 (800) 123-45-67
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-red-500/10 pt-4 text-center text-xs text-red-300/70">
        © {new Date().getFullYear()} Мир Напитков. Все права защищены.
      </div>
    </footer>
  );
}
