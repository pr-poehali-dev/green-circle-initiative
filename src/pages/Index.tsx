
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&h=1300&q=80')",
            backgroundPosition: "center 40%"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">PORSCHE</h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-3xl">Воплощение совершенства в каждой детали. Испытайте непревзойденные характеристики и элегантный дизайн.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6">Тест-драйв</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6">Каталог моделей</Button>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Модельный ряд</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 911 */}
            <Card className="overflow-hidden hover-scale">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1611821064430-0d40291e5362?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                  alt="Porsche 911" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">911</h3>
                <p className="text-gray-600 mb-4">Легендарный спорткар с непревзойденной управляемостью и мощностью.</p>
                <Button className="w-full">Подробнее</Button>
              </div>
            </Card>
            
            {/* Taycan */}
            <Card className="overflow-hidden hover-scale">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1619551734325-81aaf323686c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                  alt="Porsche Taycan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Taycan</h3>
                <p className="text-gray-600 mb-4">Полностью электрический спорткар с инновационными технологиями.</p>
                <Button className="w-full">Подробнее</Button>
              </div>
            </Card>
            
            {/* Cayenne */}
            <Card className="overflow-hidden hover-scale">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1607853827552-0ea7cad29e6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                  alt="Porsche Cayenne" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Cayenne</h3>
                <p className="text-gray-600 mb-4">Спортивный внедорожник, объединяющий комфорт и динамику.</p>
                <Button className="w-full">Подробнее</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Преимущества Porsche</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white rounded-full p-6 mb-4 shadow-md">
                <Icon name="Timer" size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2">Непревзойденная динамика</h3>
              <p className="text-gray-600">Разгон до 100 км/ч за считанные секунды. Мощь, которая не оставит равнодушным.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-white rounded-full p-6 mb-4 shadow-md">
                <Icon name="Shield" size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2">Немецкое качество</h3>
              <p className="text-gray-600">Каждый автомобиль — результат безупречного инженерного искусства и внимания к деталям.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-white rounded-full p-6 mb-4 shadow-md">
                <Icon name="Star" size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2">Престиж и статус</h3>
              <p className="text-gray-600">Porsche — символ успеха и безупречного вкуса. Автомобиль, который говорит сам за себя.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-[0.3]" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&h=1300&q=80')"
          }}
        />
        
        <div className="relative max-w-7xl mx-auto text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Запишитесь на тест-драйв сегодня</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Ощутите непередаваемые эмоции за рулем Porsche. Наши специалисты помогут подобрать идеальную модель для вас.</p>
          <Button className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6">Записаться на тест-драйв</Button>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Контакты</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Porsche Центр Москва</h3>
              <div className="flex items-start mb-3">
                <Icon name="MapPin" className="mr-2 mt-1" />
                <p>Ленинградское шоссе, 71А, Москва</p>
              </div>
              <div className="flex items-start mb-3">
                <Icon name="Phone" className="mr-2 mt-1" />
                <p>+7 (495) 123-45-67</p>
              </div>
              <div className="flex items-start mb-3">
                <Icon name="Mail" className="mr-2 mt-1" />
                <p>info@porsche-moscow.ru</p>
              </div>
              <div className="flex items-start">
                <Icon name="Clock" className="mr-2 mt-1" />
                <p>Ежедневно с 9:00 до 21:00</p>
              </div>
            </div>
            
            <div>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Получить консультацию</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Имя</label>
                    <input type="text" className="w-full p-2 border rounded-md" placeholder="Введите ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Телефон</label>
                    <input type="tel" className="w-full p-2 border rounded-md" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Модель</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>911</option>
                      <option>Taycan</option>
                      <option>Cayenne</option>
                      <option>Panamera</option>
                      <option>Macan</option>
                    </select>
                  </div>
                  <Button className="w-full">Отправить</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Porsche</h3>
              <p className="text-gray-400">Воплощение роскоши и спортивного духа, созданное с немецкой точностью и страстью к совершенству.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Модели</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">911</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Taycan</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cayenne</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Panamera</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Macan</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Услуги</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Тест-драйв</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Финансирование</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Сервисное обслуживание</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Оригинальные запчасти</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Аксессуары</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Соцсети</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><Icon name="Instagram" /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Icon name="Facebook" /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Icon name="Youtube" /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Icon name="Twitter" /></a>
              </div>
            </div>
          </div>
          
          <Separator className="bg-gray-700 mb-6" />
          
          <div className="text-center text-gray-400 text-sm">
            <p>© 2025 Porsche. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
