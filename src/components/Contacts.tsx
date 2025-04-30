
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
  return (
    <section id="contacts" className="py-16 px-4 md:px-8 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-800">Контакты</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Мы всегда рады вашим вопросам и предложениям. Свяжитесь с нами любым удобным способом!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-[#F1F0FB] p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-teal-700">Как нас найти</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Icon name="MapPin" className="text-teal-600 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-900">Адрес:</h4>
                    <p className="text-gray-700">г. Москва, ул. Зоопарковая, д. 12</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Icon name="Phone" className="text-teal-600 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-900">Телефон:</h4>
                    <p className="text-gray-700">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Icon name="Mail" className="text-teal-600 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-900">Электронная почта:</h4>
                    <p className="text-gray-700">info@babafrosya-zoo.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Icon name="Clock" className="text-teal-600 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-900">Часы работы:</h4>
                    <p className="text-gray-700">
                      Вт-Вс: 10:00 - 20:00<br />
                      Пн: Выходной
                    </p>
                  </div>
                </div>
              </div>
              
              <h4 className="font-medium text-gray-900 mb-3">Мы в социальных сетях:</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="rounded-full border-teal-300 hover:bg-teal-50">
                  <Icon name="Instagram" size={20} className="text-teal-600" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-teal-300 hover:bg-teal-50">
                  <Icon name="Facebook" size={20} className="text-teal-600" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-teal-300 hover:bg-teal-50">
                  <Icon name="Twitter" size={20} className="text-teal-600" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-teal-300 hover:bg-teal-50">
                  <Icon name="Youtube" size={20} className="text-teal-600" />
                </Button>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-[#F1F0FB] p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-teal-700">Напишите нам</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Ваш email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Тема
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Тема сообщения"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Ваше сообщение"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
