
import { ArrowRight, Calendar, Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AnimalCard from '../components/AnimalCard';
import { Button } from '../components/ui/button';

const HomePage = () => {
  const featuredAnimals = [
    {
      name: "Лева",
      species: "Африканский лев",
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Величественный лев, король нашего зоопарка. Обожает мясные угощения и солнечные ванны.",
      adoptionLink: "/adoption"
    },
    {
      name: "Маша",
      species: "Бурый медведь",
      image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Любознательная медведица с игривым характером. Очень любит мед и купаться в пруду.",
      adoptionLink: "/adoption"
    },
    {
      name: "Тоша",
      species: "Жираф",
      image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Самый высокий обитатель зоопарка. Любит полакомиться листьями с верхушек деревьев.",
      adoptionLink: "/adoption"
    }
  ];

  const upcomingEvents = [
    {
      title: "День защиты животных",
      date: "4 октября 2025",
      image: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Празднуем международный день защиты животных! Увлекательные мастер-классы, показательные кормления и многое другое."
    },
    {
      title: "Ночь в зоопарке",
      date: "15 мая 2025",
      image: "https://images.unsplash.com/photo-1535338454741-8166d519d510?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Увидите, как ведут себя животные после заката. Экскурсия с фонариками и ночной пикник под звездами."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* О зоопарке */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-800">О нашем зоопарке</h2>
                <p className="text-lg mb-4 text-gray-700">
                  Зоопарк "Баба Фрося" - это уникальное место, где вы можете познакомиться с животными со всего мира. 
                  Наша миссия - сохранение редких видов животных и экологическое просвещение.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  Мы создаем максимально комфортные условия для наших питомцев, приближенные к их естественной среде обитания.
                </p>
                <Link to="/about">
                  <Button className="bg-green-700 hover:bg-green-800">
                    Узнать больше <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1582560475093-ba66accbc095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Зоопарк Баба Фрося"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Наши обитатели */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center text-green-800">Наши обитатели</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredAnimals.map((animal, index) => (
                <AnimalCard key={index} {...animal} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/adoption">
                <Button className="bg-green-700 hover:bg-green-800">
                  Программа опеки <Heart size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Ближайшие мероприятия */}
        <section className="py-16 bg-green-700 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center">Ближайшие мероприятия</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row">
                  <div className="md:w-2/5 h-60 md:h-auto">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5 flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <div className="flex items-center text-green-700 mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <p className="mb-4">{event.description}</p>
                    <div className="mt-auto">
                      <Link to="/events">
                        <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white">
                          Подробнее
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/events">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-green-900">
                  Все мероприятия <Calendar size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Контакты */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-800">Как нас найти</h2>
                <p className="text-lg mb-6 text-gray-700">
                  Зоопарк "Баба Фрося" расположен в живописном месте, всего в 20 минутах езды от центра города.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-green-700 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Адрес:</h3>
                      <p>ул. Зверская, 123, г. Москва</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="text-green-700 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Время работы:</h3>
                      <p>Ежедневно с 9:00 до 20:00</p>
                    </div>
                  </div>
                </div>
                <Link to="/contacts" className="inline-block mt-6">
                  <Button className="bg-green-700 hover:bg-green-800">
                    Контактная информация <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1597871040916-2f1e16aee455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Территория зоопарка"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
