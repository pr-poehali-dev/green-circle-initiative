import Icon from "@/components/ui/icon";

const AvitoFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-purple-800 to-indigo-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4 text-white">TRIVO</div>
            <p className="text-blue-100 mb-4">
              Крупнейшая площадка объявлений в России
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Facebook"
                size={20}
                className="text-blue-200 hover:text-white cursor-pointer"
              />
              <Icon
                name="Twitter"
                size={20}
                className="text-blue-200 hover:text-white cursor-pointer"
              />
              <Icon
                name="Instagram"
                size={20}
                className="text-blue-200 hover:text-white cursor-pointer"
              />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Покупателям</h3>
            <ul className="space-y-2 text-blue-100">
              <li className="hover:text-white cursor-pointer">Как покупать</li>
              <li className="hover:text-white cursor-pointer">Безопасность</li>
              <li className="hover:text-white cursor-pointer">
                Правила пользования
              </li>
              <li className="hover:text-white cursor-pointer">Карта сайта</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Продавцам</h3>
            <ul className="space-y-2 text-blue-100">
              <li className="hover:text-white cursor-pointer">Как продавать</li>
              <li className="hover:text-white cursor-pointer">Тарифы</li>
              <li className="hover:text-white cursor-pointer">Реклама на TRIVO </li>
              <li className="hover:text-white cursor-pointer">Помощь</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-blue-100">
              <li className="hover:text-white cursor-pointer">О нас</li>
              <li className="hover:text-white cursor-pointer">Контакты</li>
              <li className="hover:text-white cursor-pointer">Вакансии</li>
              <li className="hover:text-white cursor-pointer">Пресс-центр</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-blue-100">© 2025 Trivo обьявления. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-100 hover:text-white">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-blue-100 hover:text-white">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AvitoFooter;
