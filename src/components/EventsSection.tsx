
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "День открытых дверей",
    date: "15 мая 2025",
    time: "10:00 - 18:00",
    location: "Главная площадь зоопарка",
    description: "Специальная программа с экскурсиями, кормлением животных и мастер-классами для всей семьи.",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "Ночь в зоопарке",
    date: "20 июня 2025",
    time: "20:00 - 23:00",
    location: "Территория зоопарка",
    description: "Уникальная возможность понаблюдать за ночной жизнью животных в сопровождении опытных экскурсоводов.",
    image: "https://images.unsplash.com/photo-1548386135-b47c7e74fdb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
];

const EventsSection = () => {
  return (
    <section className="py-16 bg-green-50" id="events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Предстоящие мероприятия
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Присоединяйтесь к нашим интересным и познавательным мероприятиям.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-gray-900">{event.title}</h3>
                
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="mt-4 text-base text-gray-600">{event.description}</p>
                
                <div className="mt-6">
                  <Button className="w-full">Забронировать место</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="mt-8">
            <Link to="/events">Все мероприятия</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
