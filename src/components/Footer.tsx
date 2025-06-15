import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl flex items-center justify-center">
                  <Icon name="Gamepad2" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">GameSub</span>
              </div>
              <p className="text-gray-400 mb-4">
                Премиальные подписки и игры по выгодным ценам
              </p>
              <div className="flex space-x-4">
                <Icon
                  name="Mail"
                  size={20}
                  className="text-gray-400 hover:text-white cursor-pointer"
                />
                <Icon
                  name="MessageCircle"
                  size={20}
                  className="text-gray-400 hover:text-white cursor-pointer"
                />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-4">Быстрые ссылки</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#subscriptions"
                    className="hover:text-white transition-colors"
                  >
                    Подписки
                  </a>
                </li>
                <li>
                  <a
                    href="#games"
                    className="hover:text-white transition-colors"
                  >
                    Игры
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#support"
                    className="hover:text-white transition-colors"
                  >
                    Поддержка
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📧 support@gamesub.ru</li>
                <li>📞 +7 (999) 123-45-67</li>
                <li>⏰ 24/7 онлайн поддержка</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GameSub. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
