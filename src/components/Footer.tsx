import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🍎</span>
                </div>
                <span className="text-xl font-bold">Apple Gift Cards</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Официальные подарочные карты Apple с гарантией подлинности.
                Мгновенная доставка и круглосуточная поддержка.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={16} className="text-green-400" />
                  <span className="text-sm text-gray-300">100% Подлинные</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} className="text-blue-400" />
                  <span className="text-sm text-gray-300">24/7 Поддержка</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Быстрые ссылки</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#products"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Купить карты
                  </a>
                </li>
                <li>
                  <a
                    href="#verification"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Проверить карту
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#support"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Поддержка
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <Icon name="Mail" size={16} />
                  <span className="text-sm">support@giftcards.ru</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Icon name="Phone" size={16} />
                  <span className="text-sm">+7 (800) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Icon name="MessageCircle" size={16} />
                  <span className="text-sm">Онлайн чат 24/7</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Apple Gift Cards. Все права защищены.
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Условия использования
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Возврат и обмен
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
