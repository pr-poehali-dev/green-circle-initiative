
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { MapPin, Phone, Mail, Clock, FacebookIcon, InstagramIcon, Twitter } from 'lucide-react';

const ContactsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Контакты</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Мы всегда рады вашим вопросам и предложениям. Свяжитесь с зоопарком "Баба Фрося" любым удобным способом!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Наши контакты</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Адрес</h3>
                    <p className="text-muted-foreground">ул. Зоопарковая, 123, г. Город, 123456</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Телефон</h3>
                    <p className="text-muted-foreground">+7 (123) 456-78-90</p>
                    <p className="text-muted-foreground">+7 (123) 456-78-91 (для групповых посещений)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">info@babafrosya-zoo.ru</p>
                    <p className="text-muted-foreground">support@babafrosya-zoo.ru</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Часы работы</h3>
                    <p className="text-muted-foreground">Ежедневно: 9:00 - 20:00</p>
                    <p className="text-muted-foreground">Кассы работают до 19:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium mb-3">Мы в социальных сетях</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors">
                    <FacebookIcon className="text-primary" />
                  </a>
                  <a href="#" className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors">
                    <InstagramIcon className="text-primary" />
                  </a>
                  <a href="#" className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors">
                    <Twitter className="text-primary" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Свяжитесь с нами</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Имя</label>
                    <Input id="name" placeholder="Введите ваше имя" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <Input id="email" type="email" placeholder="Введите ваш email" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Тема</label>
                  <Input id="subject" placeholder="Тема вашего сообщения" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Сообщение</label>
                  <Textarea id="message" rows={5} placeholder="Введите ваше сообщение" />
                </div>
                <Button type="submit" className="w-full">Отправить сообщение</Button>
              </form>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Как добраться</h2>
            <div className="h-96 bg-muted rounded-xl overflow-hidden">
              {/* Здесь можно добавить iframe с Google Maps */}
              <div className="w-full h-full flex items-center justify-center bg-muted">
                <p className="text-muted-foreground">Карта с местоположением зоопарка "Баба Фрося"</p>
              </div>
            </div>
            
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-medium mb-2">На общественном транспорте</h3>
                <p className="text-muted-foreground">Автобусы №123, 456 до остановки "Зоопарк"</p>
                <p className="text-muted-foreground">Троллейбусы №2, 5 до остановки "Проспект Животных"</p>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-medium mb-2">На автомобиле</h3>
                <p className="text-muted-foreground">С центра города по проспекту Ленина до указателя "Зоопарк"</p>
                <p className="text-muted-foreground">Парковка перед главным входом (платная)</p>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Для групповых посещений</h3>
                <p className="text-muted-foreground">Предварительная запись по телефону: +7 (123) 456-78-91</p>
                <p className="text-muted-foreground">Отдельный вход для групп с экскурсоводом</p>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Можно ли приносить еду с собой?</h3>
                <p className="text-muted-foreground">Да, вы можете приносить с собой еду и напитки для личного потребления. Однако запрещено кормить животных зоопарка своими продуктами.</p>
              </div>
              <div>
                <h3 className="font-bold">Есть ли в зоопарке кафе?</h3>
                <p className="text-muted-foreground">Да, на территории зоопарка работают три кафе с разнообразным меню.</p>
              </div>
              <div>
                <h3 className="font-bold">Как организовать экскурсию для школьной группы?</h3>
                <p className="text-muted-foreground">Для организации групповой экскурсии необходимо позвонить по телефону +7 (123) 456-78-91 не менее чем за 3 дня до планируемого визита.</p>
              </div>
              <div>
                <h3 className="font-bold">Можно ли фотографировать животных?</h3>
                <p className="text-muted-foreground">Фотографировать животных для личного использования разрешено. Профессиональная фото/видеосъемка требует специального разрешения.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactsPage;
