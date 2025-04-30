
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
          
          <div className="relative h-[400px]">
            {/* Верхний левый круг */}
            <div 
              className={`absolute w-[150px] h-[150px] rounded-full overflow-hidden top-0 left-0 z-10 transition-all duration-1000 transform ${animate ? 'translate-x-[30px] translate-y-[30px]' : 'translate-x-0 translate-y-0'}`}
            >
              <img 
                src="https://images.unsplash.com/photo-1534567110243-8875d64c2cb3?q=80&w=1740&auto=format&fit=crop" 
                alt="Животные в зоопарке" 
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Верхний правый круг */}
            <div 
              className={`absolute w-[150px] h-[150px] rounded-full overflow-hidden top-0 right-0 z-20 transition-all duration-1000 transform ${animate ? 'translate-x-[-30px] translate-y-[30px]' : 'translate-x-0 translate-y-0'}`}
            >
              <img 
                src="https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=1470&auto=format&fit=crop" 
                alt="Сотрудники зоопарка" 
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Нижний левый круг */}
            <div 
              className={`absolute w-[150px] h-[150px] rounded-full overflow-hidden bottom-0 left-0 z-30 transition-all duration-1000 transform ${animate ? 'translate-x-[30px] translate-y-[-30px]' : 'translate-x-0 translate-y-0'}`}
            >
              <img 
                src="https://images.unsplash.com/photo-1584122250444-1704e669d707?q=80&w=1374&auto=format&fit=crop" 
                alt="Территория зоопарка" 
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Нижний правый круг */}
            <div 
              className={`absolute w-[150px] h-[150px] rounded-full overflow-hidden bottom-0 right-0 z-40 transition-all duration-1000 transform ${animate ? 'translate-x-[-30px] translate-y-[-30px]' : 'translate-x-0 translate-y-0'}`}
            >
              <img 
                src="https://images.unsplash.com/photo-1559253664-ca249d4608c6?q=80&w=1374&auto=format&fit=crop" 
                alt="Посетители зоопарка" 
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Центральный круг */}
            <div 
              className={`absolute w-[180px] h-[180px] rounded-full overflow-hidden left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-1000 ${animate ? 'scale-110' : 'scale-100'}`}
            >
              <img 
                src="https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?q=80&w=1587&auto=format&fit=crop" 
                alt="Главное фото зоопарка" 
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
