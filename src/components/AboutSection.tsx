
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const AboutSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Activate animation after component mounts
    setAnimate(true);
    
    // Create animation loop for continuous bouncing effect
    const interval = setInterval(() => {
      setAnimate(prev => !prev);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-green-800">О нашем зоопарке</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-4 text-gray-700">
              Зоопарк «Баба Фрося» — это уникальное место, где мы создаем комфортные условия для жизни животных и 
              стремимся сохранить исчезающие виды.
            </p>
            <p className="text-lg mb-4 text-gray-700">
              Основанный в 2005 году, наш зоопарк стал домом для более чем 200 видов животных со всего мира. 
              Мы гордимся нашими программами по сохранению редких видов и образовательной деятельностью.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Наша миссия — не только показать посетителям удивительный мир животных, но и привить любовь к природе, 
              научить заботиться об окружающей среде и её обитателях.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-green-600 hover:bg-green-700">Узнать больше</Button>
              <Button variant="outline">Наша история</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 h-full">
            <div className={`relative rounded-full overflow-hidden aspect-square transition-all duration-700 transform ${animate ? 'translate-y-2' : '-translate-y-2'}`} style={{animationDelay: '0ms'}}>
              <img 
                src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1740&auto=format&fit=crop" 
                alt="Животные в зоопарке" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className={`relative rounded-full overflow-hidden aspect-square transition-all duration-700 transform ${animate ? '-translate-y-2' : 'translate-y-2'}`} style={{animationDelay: '400ms'}}>
              <img 
                src="https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=1470&auto=format&fit=crop" 
                alt="Сотрудники зоопарка" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className={`relative rounded-full overflow-hidden aspect-square transition-all duration-700 transform ${animate ? 'translate-y-2' : '-translate-y-2'}`} style={{animationDelay: '800ms'}}>
              <img 
                src="https://images.unsplash.com/photo-1504173010664-32509aeebb62?q=80&w=1374&auto=format&fit=crop" 
                alt="Территория зоопарка" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className={`relative rounded-full overflow-hidden aspect-square transition-all duration-700 transform ${animate ? '-translate-y-2' : 'translate-y-2'}`} style={{animationDelay: '1200ms'}}>
              <img 
                src="https://images.unsplash.com/photo-1559253664-ca249d4608c6?q=80&w=1374&auto=format&fit=crop" 
                alt="Посетители зоопарка" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
