
import { useState, useRef, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

const DraggableCircle = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [circleColor, setCircleColor] = useState('bg-red-500');
  const circleRef = useRef<HTMLDivElement>(null);
  const initialClickOffset = useRef<Position>({ x: 0, y: 0 });

  // Начальное положение круга при монтировании
  useEffect(() => {
    const circle = circleRef.current;
    if (circle && circle.parentElement) {
      const parentRect = circle.parentElement.getBoundingClientRect();
      setPosition({
        x: parentRect.width / 2 - circle.offsetWidth / 2,
        y: 0
      });
    }
  }, []);

  // Добавляем обработчики на уровне документа для отслеживания движения курсора
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const circle = circleRef.current;
      if (circle && circle.parentElement) {
        const parentRect = circle.parentElement.getBoundingClientRect();
        
        // Вычисляем новую позицию круга с учетом смещения от точки захвата
        const newX = e.clientX - parentRect.left - initialClickOffset.current.x;
        const newY = e.clientY - parentRect.top - initialClickOffset.current.y;
        
        // Ограничиваем перемещение в пределах родительского элемента
        const maxX = parentRect.width - circle.offsetWidth;
        const maxY = parentRect.height - circle.offsetHeight;
        
        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY))
        });
      }
    };

    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        // Возвращаем исходный цвет
        setTimeout(() => {
          setCircleColor('bg-red-500');
        }, 500);
      }
    };

    // Устанавливаем обработчики на уровне документа
    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    // Очищаем обработчики при размонтировании компонента
    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const circle = circleRef.current;
    if (circle) {
      // Запоминаем смещение от начала круга до точки захвата
      const rect = circle.getBoundingClientRect();
      initialClickOffset.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
      
      setIsDragging(true);
      // Изменяем цвет на зеленый при нажатии
      setCircleColor('bg-green-500');
      
      // Запрещаем выделение текста при перетаскивании
      e.preventDefault();
    }
  };

  return (
    <div 
      ref={circleRef}
      className={`w-32 h-32 ${circleColor} rounded-full shadow-lg cursor-grab transition-colors duration-300 absolute shadow-[0_0_20px_rgba(255,255,255,0.3)]`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
        animation: !isDragging ? 'float 6s ease-in-out infinite' : 'none'
      }}
      onMouseDown={handleMouseDown}
    />
  );
};

export default DraggableCircle;
