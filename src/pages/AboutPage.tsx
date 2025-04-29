
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Award, Calendar, Clock, Heart, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Фрося Петрова",
      role: "Основатель и директор",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Иван Зверев",
      role: "Главный ветеринар",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Ольга Медведева",
      role: "Зоолог-исследователь",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Заголовок страницы */}
        <div className="relative py-24 bg-cover bg-center text-white" 
             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")' }}>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">О зоопарке "Баба Фрося"</h1>
            <p className="text-xl max-w-3xl">Узнайте больше о нашей истории, миссии и команде, которая заботится о животных</p>
          </div>
        </div>
        
        {/* История */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-800">Наша история</h2>
                <p className="mb-4 text-gray-700">
                  Зоопарк "Баба Фрося" был основан в 1995 году как небольшой частный питомник, где нашли приют несколько животных, спасенных от браконьеров. 
                  Основательница зоопарка, Ефросинья Петровна, всю жизнь посвятила защите диких животных.
                </p>
                <p className="mb-4 text-gray-700">
                  С годами небольшой питомник превратился в современный зоопарк с просторными вольерами и комфортными условиями для животных. 
                  Сегодня зоопарк "Баба Фрося" - это не только место для отдыха, но и важный центр сохранения и разведения редких видов животных.
                </p>
                <p className="text-gray-700">
                  Мы гордимся тем, что за 30 лет работы смогли спасти сотни животных и внести вклад в сохранение биоразнообразия нашей планеты.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="История зоопарка"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Миссия и ценности */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center text-green-800">Наша миссия и ценности</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-green-100 h-14 w-14 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck size={28} className="text-green-700" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-800">Сохранение видов</h3>
                <p className="text-gray-700">
                  Мы участвуем в международных программах по сохранению и разведению редких видов животных, 
                  чтобы защитить биоразнообразие нашей планеты для будущих поколений.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-green-100 h-14 w-14 rounded-full flex items-center justify-center mb-6">
                  <Heart size={28} className="text-green-700" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-800">Благополучие животных</h3>
                <p className="text-gray-700">
                  Мы создаем максимально комфортные условия для наших питомцев, приближенные к их естественной среде обитания, 
                  и обеспечиваем их лучшим ветеринарным уходом.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-green-100 h-14 w-14 rounded-full flex items-center justify-center mb-6">
                  <Award size={28} className="text-green-700" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-800">Экологическое просвещение</h3>
                <p className="text-gray-700">
                  Через образовательные программы и мероприятия мы стремимся привить любовь к природе и понимание важности бережного отношения 
                  к окружающей среде.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Наша команда */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center text-green-800">Наша команда</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 rounded-full overflow-hidden h-56 w-56 mx-auto shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-green-800">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-10 text-gray-700">
              В нашей команде работают высококвалифицированные специалисты: ветеринары, зоологи, этологи и педагоги, 
              объединенные любовью к животным и заботой об их благополучии.
            </p>
          </div>
        </section>
        
        {/* Информация для посетителей */}
        <section className="py-16 bg-green-700 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center">Информация для посетителей</h2>
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-800">Часы работы</h3>
                  <div className="flex items-start gap-3 mb-6">
                    <Clock className="text-green-700 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold">Летний сезон (апрель-октябрь):</p>
                      <p>Ежедневно с 9:00 до 20:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="text-green-700 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold">Зимний сезон (ноябрь-март):</p>
                      <p>Ежедневно с 10:00 до 18:00</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-800">Билеты</h3>
                  <div className="space-y-4">
                    <p><span className="font-bold">Взрослый:</span> 500 ₽</p>
                    <p><span className="font-bold">Детский (3-12 лет):</span> 250 ₽</p>
                    <p><span className="font-bold">Пенсионеры:</span> 300 ₽</p>
                    <p><span className="font-bold">Студенты:</span> 350 ₽</p>
                    <p><span className="font-bold">Дети до 3 лет:</span> бесплатно</p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-800">Правила посещения</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Не кормите животных без разрешения сотрудников зоопарка</li>
                    <li>Не используйте вспышку при фотографировании</li>
                    <li>Не стучите по стеклам и ограждениям</li>
                    <li>Соблюдайте чистоту на территории зоопарка</li>
                    <li>Не оставляйте детей без присмотра</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-800">Дополнительные услуги</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Экскурсии с гидом</li>
                    <li>Образовательные программы для детей</li>
                    <li>Фотосессии с животными (под наблюдением сотрудников)</li>
                    <li>Кафе и зоны отдыха</li>
                    <li>Сувенирные магазины</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200 flex flex-wrap gap-4 justify-center">
                <Button className="bg-green-700 hover:bg-green-800">
                  Купить билет онлайн
                </Button>
                <Link to="/events">
                  <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white">
                    Календарь мероприятий <Calendar size={16} className="ml-2" />
                  </Button>
                </Link>
                <Link to="/contacts">
                  <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white">
                    Как добраться <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
