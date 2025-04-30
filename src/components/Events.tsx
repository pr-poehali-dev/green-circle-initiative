
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'День открытых дверей',
      date: '15 мая 2025',
      time: '10:00 - 19:00',
      description: 'Посетите зоопарк бесплатно в течение всего дня и познакомьтесь с нашими обитателями. Для вас будут проведены экскурсии и показательные кормления.',
      image: 'https://images.unsplash.com/photo-1581335435887-8fe61246f4be?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Ночь в зоопарке',
      date: '10 июня 2025',
      time: '20:00 - 23:00',
      description: 'Уникальная возможность увидеть ночную жизнь зоопарка. Экскурсии при свете фонариков, наблюдение за активностью ночных животных.',
      image: 'https://images.unsplash.com/photo-1562591970-254bc62245c0?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Детский праздник "Юный натуралист"',
      date: '1 июля 2025',
      time: '12:00 - 16:00',
      description: 'Интерактивные мастер-классы, квесты и образовательные игры для детей всех возрастов. Научим любить и понимать природу.',
      image: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <section id="events" className="py-16 px-4 md:px-8 bg-[#FEF7CD]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-800">Мероприятия</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            В нашем зоопарке регулярно проводятся интересные мероприятия для посетителей всех возрастов.
            Узнайте больше о наших обитателях и проведите время увлекательно и с пользой!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {events.map(event => (
            <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover-scale">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
                  {event.date}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-amber-700">{event.title}</h3>
                
                <div className="flex items-center mb-3 text-gray-600">
                  <Icon name="Clock" size={16} className="mr-2" />
                  <span>{event.time}</span>
                </div>
                
                <p className="text-gray-700 mb-6 flex-grow">{event.description}</p>
                
                <Button className="w-full bg-amber-600 hover:bg-amber-700 mt-auto">
                  Подробнее
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="border-amber-500 text-amber-700 hover:bg-amber-50">
            <Icon name="CalendarDays" size={20} className="mr-2" />
            Календарь мероприятий
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
