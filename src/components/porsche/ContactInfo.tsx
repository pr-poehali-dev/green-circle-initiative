
const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-2">Остались вопросы?</h3>
        <p className="text-gray-600">
          Наши дружелюбные консультанты всегда готовы помочь вам и ответить на любые вопросы о моделях Porsche
        </p>
      </div>

      <div>
        <h4 className="font-medium mb-1">Телефон</h4>
        <p className="text-primary font-semibold">+7 (800) 123-45-67</p>
        <p className="text-sm text-gray-500">Ежедневно с 9:00 до 21:00</p>
      </div>

      <div>
        <h4 className="font-medium mb-1">Email</h4>
        <p className="text-primary font-semibold">hello@porsche-center.ru</p>
        <p className="text-sm text-gray-500">Отвечаем в течение 2 часов</p>
      </div>

      <div>
        <h4 className="font-medium mb-1">Адрес</h4>
        <p className="text-gray-700">
          г. Москва, ул. Автомобильная, 123
        </p>
        <p className="text-sm text-gray-500">
          Рядом с ТЦ "Авто Плаза", удобная парковка
        </p>
      </div>

      <div className="pt-4">
        <h4 className="font-medium mb-2">Мы в социальных сетях</h4>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
