
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

type Circle = {
  id: number;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  size: number;
  image: string;
  alt: string;
};

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [circles, setCircles] = useState<Circle[]>([]);
  const initializedRef = useRef(false);

  // Инициализация кружков при монтировании компонента
  useEffect(() => {
    if (containerRef.current && !initializedRef.current) {
      const container = containerRef.current;
      const { width, height } = container.getBoundingClientRect();
      
      const initialCircles: Circle[] = [
        {
          id: 1,
          x: 50,
          y: 50,
          velocityX: 1.5,
          velocityY: 1.2,
          size: 120,
          image: "https://images.unsplash.com/photo-1534567110243-8875d64c2cb3?q=80&w=1740&auto=format&fit=crop",
          alt: "Животные в зоопарке"
        },
        {
          id: 2,
          x: width - 150,
          y: 80,
          velocityX: -1.3,
          velocityY: 1.5,
          size: 120,
          image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=1470&auto=format&fit=crop",
          alt: "Сотрудники зоопарка"
        },
        {
          id: 3,
          x: 100,
          y: height - 150,
          velocityX: 1.2,
          velocityY: -1.4,
          size: 120,
          image: "https://images.unsplash.com/photo-1584122250444-1704e669d707?q=80&w=1374&auto=format&fit=crop",
          alt: "Территория зоопарка"
        },
        {
          id: 4,
          x: width - 130,
          y: height - 170,
          velocityX: -1.6,
          velocityY: -1.1,
          size: 120,
          image: "https://images.unsplash.com/photo-1559253664-ca249d4608c6?q=80&w=1374&auto=format&fit=crop",
          alt: "Посетители зоопарка"
        },
        {
          id: 5,
          x: width / 2 - 80,
          y: height / 2 - 80,
          velocityX: 1.7,
          velocityY: 1.3,
          size: 160,
          image: "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?q=80&w=1587&auto=format&fit=crop",
          alt: "Главное фото зоопарка"
        }
      ];
      
      setCircles(initialCircles);
      initializedRef.current = true;
    }
  }, []);

  // Анимация движения кружков
  useEffect(() => {
    if (circles.length > 0 && containerRef.current) {
      const container = containerRef.current;
      const { width, height } = container.getBoundingClientRect();
      
      const animate = () => {
        setCircles(prevCircles => {
          return prevCircles.map(circle => {
            let { x, y, velocityX, velocityY, size } = circle;
            
            // Обновление позиции
            x += velocityX;
            y += velocityY;
            
            // Проверка столкновения со стенками контейнера
            if (x <= 0 || x + size >= width) {
              velocityX = -velocityX;
              x = x <= 0 ? 0 : width - size;
            }
            
            if (y <= 0 || y + size >= height) {
              velocityY = -velocityY;
              y = y <= 0 ? 0 : height - size;
            }
            
            return { ...circle, x, y, velocityX, velocityY };
          });
        });
        
        animationRef.current = requestAnimationFrame(animate);
      };
      
      animationRef.current = requestAnimationFrame(animate);
      
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [circles.length]);

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
          
          <div ref={containerRef} className="relative h-[400px] overflow-hidden bg-gray-50 rounded-lg shadow-inner">
            {circles.map(circle => (
              <div 
                key={circle.id}
                style={{
                  width: `${circle.size}px`,
                  height: `${circle.size}px`,
                  transform: `translate(${circle.x}px, ${circle.y}px)`,
                  transition: 'transform 0.05s linear',
                }}
                className="absolute rounded-full overflow-hidden shadow-lg"
              >
                <img 
                  src={circle.image} 
                  alt={circle.alt} 
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
