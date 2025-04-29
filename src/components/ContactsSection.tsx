
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactsSection = () => {
  return (
    <section className="py-16 bg-white" id="contacts">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Контакты
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Мы всегда рады ответить на ваши вопросы и помочь с планированием визита.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-6">Информация</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium">Адрес</h4>
                      <p className="text-gray-600">г. Зверево, ул. Лесная, д. 123</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium">Телефон</h4>
                      <p className="text-gray-600">+7 (123) 456-78-90</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">info@babafrosa-zoo.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium">Часы работы</h4>
                      <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                      <p className="text-gray-600">Сб-Вс: 10:00 - 20:00</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden">
                  {/* Здесь можно добавить карту, но пока оставим заглушку */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Карта расположения зоопарка
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-6">Остались вопросы?</h3>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Ваше имя
                    </label>
                    <Input id="name" placeholder="Введите ваше имя" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Введите ваш email" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Сообщение
                    </label>
                    <Textarea id="message" placeholder="Введите ваше сообщение" rows={5} />
                  </div>
                  
                  <Button type="submit" className="w-full">Отправить сообщение</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
