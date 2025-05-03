
import FooterColumn from "./FooterColumn";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src="/logo-b.svg" alt="Porsche" className="h-8 invert" />
              <span className="text-xl font-semibold">Porsche Центр</span>
            </div>
            <p className="text-gray-400">
              Мир Porsche открыт для вас. Добро пожаловать в семью 
              энтузиастов спортивных автомобилей и инженерного совершенства.
            </p>
          </div>

          <FooterColumn 
            title="Наш центр" 
            links={[
              { label: "О нас", url: "#" },
              { label: "Наша команда", url: "#" },
              { label: "Карьера", url: "#" },
              { label: "Новости", url: "#" },
              { label: "Контакты", url: "#" },
            ]} 
          />

          <FooterColumn 
            title="Автомобили" 
            links={[
              { label: "Модельный ряд", url: "#" },
              { label: "Конфигуратор", url: "#" },
              { label: "Тест-драйв", url: "#" },
              { label: "Автомобили с пробегом", url: "#" },
              { label: "Специальные предложения", url: "#" },
            ]} 
          />

          <FooterColumn 
            title="Клиентам" 
            links={[
              { label: "Сервисное обслуживание", url: "#" },
              { label: "Финансовые услуги", url: "#" },
              { label: "Аксессуары", url: "#" },
              { label: "Помощь на дороге", url: "#" },
              { label: "Часто задаваемые вопросы", url: "#" },
            ]} 
          />
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Porsche Центр. Все права защищены. Мы ❤️ наших клиентов.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Правовая информация
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Карта сайта
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
