import Icon from "@/components/ui/icon";

interface FooterProps {
  onNavigate: (page: "home" | "contacts" | "offer") => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-white/5 backdrop-blur-sm border-t border-white/20 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* О компании */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              🔢 Token Calculator
            </h3>
            <p className="text-gray-300 mb-4">
              Профессиональные услуги по подсчету токенов для нейросетей и
              языковых моделей. Точность, скорость, экономия ваших средств.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-blue-300 hover:text-blue-200 transition-colors"
              >
                <Icon name="Github" size={20} />
              </a>
              <a
                href="#"
                className="text-blue-300 hover:text-blue-200 transition-colors"
              >
                <Icon name="Twitter" size={20} />
              </a>
              <a
                href="#"
                className="text-blue-300 hover:text-blue-200 transition-colors"
              >
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>

          {/* Наши услуги */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              🛠️ Наши услуги
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Icon name="Calculator" size={16} className="text-blue-300" />
                <span>Подсчет токенов</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="TrendingUp" size={16} className="text-blue-300" />
                <span>Анализ стоимости API</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Zap" size={16} className="text-blue-300" />
                <span>Оптимизация промптов</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon
                  name="MessageCircle"
                  size={16}
                  className="text-blue-300"
                />
                <span>Консультации по AI</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="BarChart3" size={16} className="text-blue-300" />
                <span>Аналитика использования</span>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              📞 Контакты
            </h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} className="text-blue-300" />
                <span>Владикавказ, Россия</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-blue-300" />
                <span>+7 (8672) 55-12-34</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-blue-300" />
                <span>support@tokencalc.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-blue-300" />
                <span>Круглосуточно 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Token Calculator. Все права защищены.
            </div>
            <div className="flex space-x-6 text-sm">
              <button
                onClick={() => onNavigate("offer")}
                className="text-blue-300 hover:text-blue-200 transition-colors"
              >
                📋 Публичная оферта
              </button>
              <button
                onClick={() => onNavigate("contacts")}
                className="text-blue-300 hover:text-blue-200 transition-colors"
              >
                📞 Контакты
              </button>
              <a
                href="#"
                className="text-blue-300 hover:text-blue-200 transition-colors"
              >
                🔒 Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
