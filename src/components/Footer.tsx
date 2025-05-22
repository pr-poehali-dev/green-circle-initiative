import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F5F5F7] pt-12 pb-6 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Магазин
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Подарочные карты
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Apple Music
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  App Store
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  iCloud+
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Поддержка
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Часто задаваемые вопросы
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Контакты
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Статус заказа
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Активация карты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Правовая информация
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Условия использования
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Юридическая информация
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Свяжитесь с нами
            </h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <Icon name="Twitter" size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600">
              Напишите нам на{" "}
              <a
                href="mailto:support@applegiftcard.ru"
                className="text-[#0071E3] hover:underline"
              >
                support@applegiftcard.ru
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-600 mb-4 md:mb-0">
              © 2025 Apple Gift Card. Все права защищены.
            </p>
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=50&h=30&auto=format&fit=crop"
                alt="Visa"
                className="h-6"
              />
              <img
                src="https://images.unsplash.com/photo-1556741533-974f8e738d48?w=50&h=30&auto=format&fit=crop"
                alt="Mastercard"
                className="h-6"
              />
              <img
                src="https://images.unsplash.com/photo-1556741533-9f95a1c91c9c?w=50&h=30&auto=format&fit=crop"
                alt="PayPal"
                className="h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
