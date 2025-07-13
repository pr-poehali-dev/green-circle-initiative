import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет обработка формы
    alert('Сообщение отправлено!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: 'Mail' as const,
      title: 'Email',
      value: 'hello@company.com',
      description: 'Напишите нам в любое время'
    },
    {
      icon: 'Phone' as const, 
      title: 'Телефон',
      value: '+7 (999) 123-45-67',
      description: 'Звоните с 9:00 до 18:00'
    },
    {
      icon: 'MapPin' as const,
      title: 'Адрес',
      value: 'Москва, ул. Примерная, 123',
      description: 'Офис открыт в будние дни'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готовы ответить на ваши вопросы и обсудить сотрудничество
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Как нас найти
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Icon name={contact.icon} size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {contact.title}
                    </h4>
                    <p className="text-gray-900 font-medium mb-1">
                      {contact.value}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {contact.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Мы в социальных сетях
              </h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Icon name="MessageCircle" size={20} className="text-blue-600" />
                </a>
                <a href="#" className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Icon name="Send" size={20} className="text-blue-600" />
                </a>
                <a href="#" className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Icon name="Users" size={20} className="text-blue-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Напишите нам
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Расскажите, чем мы можем помочь..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Icon name="Send" size={20} />
                <span>Отправить сообщение</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;