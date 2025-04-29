
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, Clock, MapPin, Users, Star } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
  category: 'education' | 'entertainment' | 'special';
  featured?: boolean;
  capacity: string;
}

const EventCard = ({ event }: { event: Event }) => {
  return (
    <Card className={`overflow-hidden ${event.featured ? 'border-primary border-2' : ''}`}>
      <div className="h-56 overflow-hidden relative">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
        {event.featured && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-primary px-3 py-1 flex items-center gap-1">
              <Star size={14} />
              Популярное
            </Badge>
          </div>
        )}
        <div className="absolute top-2 left-2">
          <Badge variant={
            event.category === 'education' ? 'secondary' :
            event.category === 'entertainment' ? 'default' : 'outline'
          }>
            {event.category === 'education' ? 'Образование' :
             event.category === 'entertainment' ? 'Развлечение' : 'Специальное'}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{event.title}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Calendar size={14} />
          {event.date}, <Clock size={14} /> {event.time}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
          <MapPin size={14} />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
          <Users size={14} />
          <span>{event.capacity}</span>
        </div>
        <p className="text-sm line-clamp-3">{event.description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Забронировать</Button>
      </CardFooter>
    </Card>
  );
};

const EventsPage = () => {
  const events: Event[] = [
    {
      id: 1,
      title: "День кормления хищников",
      date: "10 мая 2025",
      time: "12:00 - 14:00",
      location: "Зона хищников",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Уникальная возможность понаблюдать за процессом кормления львов, тигров и других хищных животных. Узнайте о их рационе и особенностях питания от наших экспертов.",
      category: "entertainment",
      featured: true,
      capacity: "до 50 человек"
    },
    {
      id: 2,
      title: "Детский мастер-класс 'Юный зоолог'",
      date: "15 мая 2025",
      time: "10:00 - 12:00",
      location: "Образовательный центр",
      image: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Интерактивный мастер-класс для детей, где они смогут узнать о профессии зоолога, изучить следы животных и научиться определять виды по их характеристикам.",
      category: "education",
      capacity: "до 20 детей"
    },
    {
      id: 3,
      title: "Ночь в зоопарке",
      date: "20 мая 2025",
      time: "21:00 - 23:00",
      location: "Весь зоопарк",
      image: "https://images.unsplash.com/photo-1607274134639-043342705e22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Эксклюзивная вечерняя экскурсия для наблюдения за ночной жизнью животных. Увидите, как ведут себя ночные обитатели в их естественной среде активности.",
      category: "special",
      capacity: "до 30 человек"
    },
    {
      id: 4,
      title: "Лекция 'Сохранение редких видов'",
      date: "25 мая 2025",
      time: "16:00 - 18:00",
      location: "Конференц-зал",
      image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Лекция от ведущих биологов о современных методах сохранения исчезающих видов и роли зоопарков в этом процессе. Обсуждение программ разведения редких животных.",
      category: "education",
      capacity: "до 100 человек"
    },
    {
      id: 5,
      title: "Праздник 'День рождения зоопарка'",
      date: "1 июня 2025",
      time: "10:00 - 18:00",
      location: "Центральная площадь",
      image: "https://images.unsplash.com/photo-1545063328-c8e3faffa16f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Большой праздник в честь дня рождения зоопарка 'Баба Фрося'. В программе: выступления артистов, мастер-классы, конкурсы, специальные показательные кормления животных и многое другое.",
      category: "entertainment",
      featured: true,
      capacity: "без ограничений"
    },
    {
      id: 6,
      title: "Фотосафари 'В объективе - дикая природа'",
      date: "10 июня 2025",
      time: "15:00 - 17:00",
      location: "Весь зоопарк",
      image: "https://images.unsplash.com/photo-1547414368-ac947d00b91d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Специализированная экскурсия для фотографов с советами от профессионалов по съемке животных. Посетителям будут показаны лучшие ракурсы и даны рекомендации по настройкам камеры.",
      category: "special",
      capacity: "до 15 человек"
    }
  ];

  const featuredEvents = events.filter(event => event.featured);
  const upcomingEvents = events.filter(event => !event.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Мероприятия</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Присоединяйтесь к интересным событиям в зоопарке "Баба Фрося". Образовательные программы, развлечения и специальные мероприятия для всей семьи!
            </p>
          </div>

          {featuredEvents.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <Star className="text-primary mr-2" />
                Популярные мероприятия
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}

          <div className="mb-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Все предстоящие мероприятия</h2>
              <div className="flex gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">Все</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">Образование</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">Развлечения</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">Специальные</Badge>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>

          <div className="bg-muted p-8 rounded-xl mb-16">
            <h2 className="text-2xl font-bold mb-6">Организация частных мероприятий</h2>
            <p className="mb-4">
              Зоопарк "Баба Фрося" предлагает организацию частных мероприятий на своей территории:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <div className="mt-1 text-primary">•</div>
                <p>День рождения для детей с тематической программой</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 text-primary">•</div>
                <p>Корпоративные мероприятия с командообразующими активностями</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 text-primary">•</div>
                <p>Выездные уроки биологии для школьных классов</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 text-primary">•</div>
                <p>Фотосессии на территории зоопарка</p>
              </li>
            </ul>
            <Button>Узнать подробнее</Button>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Подпишитесь на рассылку</h2>
            <p className="text-muted-foreground mb-6">Получайте уведомления о новых мероприятиях и специальных предложениях</p>
            <div className="flex max-w-md mx-auto gap-2">
              <Input placeholder="Введите ваш email" className="flex-1" />
              <Button>Подписаться</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// Добавим компонент Input, который был упомянут, но не импортирован
const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { className?: string }) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};

export default EventsPage;
