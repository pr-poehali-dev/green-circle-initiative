import React from 'react';

const Contacts = () => {
  return (
    <section id="contacts" className="py-20 bg-[#162238] font-montserrat">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-10">Контакты</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-[#DEB887] mb-4">Наш адрес</h3>
              <p className="text-[#A7C7E7] font-light">ул. Пушкина, 15</p>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-[#DEB887] mb-4">Телефон</h3>
              <p className="text-[#A7C7E7] font-light">+7 (999) 123-45-67</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#DEB887] mb-4">Часы работы</h3>
              <p className="text-[#A7C7E7] font-light">Пн-Пт: 8:00 - 22:00<br />Сб-Вс: 9:00 - 23:00</p>
            </div>
          </div>
          <div>
            <iframe 
              src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=1234567890" 
              width="100%" 
              height="400" 
              frameBorder="1" 
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;