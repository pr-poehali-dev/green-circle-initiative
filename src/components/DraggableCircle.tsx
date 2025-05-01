
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

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    // Изменяем цвет на зеленый при нажатии
    setCircleColor('bg-green-500');
    
    // Запрещаем выделение текста при перетаскивании
    e.preventDefault();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Возвращаем исходный цвет
    setTimeout(() => {
      setCircleColor('bg-red-500');
    }, 500);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const circle = circleRef.current;
    if (circle && circle.parentElement) {
      const parentRect = circle.parentElement.getBoundingClientRect();
      const circleRect = circle.getBoundingClientRect();
      
      // Вычисляем новую позицию круга
      const newX = e.clientX - parentRect.left - circleRect.width / 2;
      const newY = e.clientY - parentRect.top - circleRect.height / 2;
      
      // Ограничиваем перемещение в пределах родительского элемента
      const maxX = parentRect.width - circleRect.width;
      const maxY = parentRect.height - circleRect.height;
      
      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY))
      });
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
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
    />
  );
};

export default DraggableCircle;
