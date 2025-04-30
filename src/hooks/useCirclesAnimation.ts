
import { useState, useEffect, useRef } from 'react';

export type Circle = {
  id: number;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  size: number;
  image: string;
  alt: string;
};

export const useCirclesAnimation = (containerRef: React.RefObject<HTMLElement>) => {
  const [circles, setCircles] = useState<Circle[]>([]);
  const animationRef = useRef<number | null>(null);
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
          velocityX: 0.5,
          velocityY: 0.4,
          size: 120,
          image: "https://images.unsplash.com/photo-1534567110243-8875d64c2cb3?q=80&w=1740&auto=format&fit=crop",
          alt: "Животные в зоопарке"
        },
        {
          id: 2,
          x: width - 150,
          y: 80,
          velocityX: -0.4,
          velocityY: 0.6,
          size: 120,
          image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=1470&auto=format&fit=crop",
          alt: "Сотрудники зоопарка"
        },
        {
          id: 3,
          x: 100,
          y: height - 150,
          velocityX: 0.4,
          velocityY: -0.5,
          size: 120,
          image: "https://images.unsplash.com/photo-1584122250444-1704e669d707?q=80&w=1374&auto=format&fit=crop",
          alt: "Территория зоопарка"
        },
        {
          id: 4,
          x: width - 130,
          y: height - 170,
          velocityX: -0.6,
          velocityY: -0.4,
          size: 120,
          image: "https://images.unsplash.com/photo-1559253664-ca249d4608c6?q=80&w=1374&auto=format&fit=crop",
          alt: "Посетители зоопарка"
        },
        {
          id: 5,
          x: width / 2 - 80,
          y: height / 2 - 80,
          velocityX: 0.7,
          velocityY: 0.5,
          size: 160,
          image: "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?q=80&w=1587&auto=format&fit=crop",
          alt: "Главное фото зоопарка"
        }
      ];

      setCircles(initialCircles);
      initializedRef.current = true;
    }
  }, [containerRef]);

  // Анимация движения кружков
  useEffect(() => {
    if (circles.length > 0 && containerRef.current) {
      const container = containerRef.current;
      const { width, height } = container.getBoundingClientRect();
      
      const animate = () => {
        setCircles(prevCircles => {
          // Создаем копию для дальнейших изменений
          const updatedCircles = [...prevCircles];
          
          // Обновляем позиции всех кружков
          updatedCircles.forEach(circle => {
            // Обновление позиции
            circle.x += circle.velocityX;
            circle.y += circle.velocityY;
            
            // Проверка столкновения со стенками контейнера
            if (circle.x <= 0 || circle.x + circle.size >= width) {
              circle.velocityX = -circle.velocityX;
              circle.x = circle.x <= 0 ? 0 : width - circle.size;
            }
            
            if (circle.y <= 0 || circle.y + circle.size >= height) {
              circle.velocityY = -circle.velocityY;
              circle.y = circle.y <= 0 ? 0 : height - circle.size;
            }
          });
          
          // Проверяем столкновения между кружками
          handleCollisions(updatedCircles);
          
          return updatedCircles;
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
  }, [circles.length, containerRef]);

  // Обработка столкновений между кружками
  const handleCollisions = (circles: Circle[]) => {
    for (let i = 0; i < circles.length; i++) {
      for (let j = i + 1; j < circles.length; j++) {
        const circle1 = circles[i];
        const circle2 = circles[j];
        
        // Центры кружков
        const c1x = circle1.x + circle1.size / 2;
        const c1y = circle1.y + circle1.size / 2;
        const c2x = circle2.x + circle2.size / 2;
        const c2y = circle2.y + circle2.size / 2;
        
        // Расстояние между центрами
        const dx = c2x - c1x;
        const dy = c2y - c1y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Минимальное расстояние для столкновения (сумма радиусов)
        const minDistance = (circle1.size + circle2.size) / 2;
        
        // Если кружки столкнулись
        if (distance < minDistance) {
          // Вычисляем нормализованный вектор направления между центрами
          const nx = dx / distance;
          const ny = dy / distance;
          
          // Глубина перекрытия
          const overlap = minDistance - distance;
          
          // Отталкиваем кружки друг от друга, чтобы избежать залипания
          circle1.x -= nx * overlap / 2;
          circle1.y -= ny * overlap / 2;
          circle2.x += nx * overlap / 2;
          circle2.y += ny * overlap / 2;
          
          // Меняем направления движения (отражение векторов скорости)
          const v1x = circle1.velocityX;
          const v1y = circle1.velocityY;
          const v2x = circle2.velocityX;
          const v2y = circle2.velocityY;
          
          circle1.velocityX = v1x - 2 * nx * (nx * v1x + ny * v1y);
          circle1.velocityY = v1y - 2 * ny * (nx * v1x + ny * v1y);
          circle2.velocityX = v2x - 2 * nx * (nx * v2x + ny * v2y);
          circle2.velocityY = v2y - 2 * ny * (nx * v2x + ny * v2y);
        }
      }
    }
  };

  return { circles };
};
