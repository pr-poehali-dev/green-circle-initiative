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
                <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl flex items-center justify-center">
                  <Icon name="BookOpen" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">BookStore</span>
              </div>
              <p className="text-gray-400 mb-4">
                Лучшие книги для развития и удовольствия
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

            {/* Catalog */}
            <div>
              <h3 className="font-bold mb-4">Каталог</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#catalog"
                    className="hover:text-white transition-colors"
                  >
                    Все книги
                  </a>
                </li>
                <li>
                  <a
                    href="#bestsellers"
                    className="hover:text-white transition-colors"
                  >
                    Бестселлеры
                  </a>
                </li>
                <li>
                  <a href="#new" className="hover:text-white transition-colors">
                    Новинки
                  </a>
                </li>
                <li>
                  <a
                    href="#sale"
                    className="hover:text-white transition-colors"
                  >
                    Скидки
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📧 info@bookstore.ru</li>
                <li>📞 +7 (495) 123-45-67</li>
                <li>🚚 Доставка по всей России</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BookStore. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
