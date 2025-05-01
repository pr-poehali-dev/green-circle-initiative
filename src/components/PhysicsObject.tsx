
import { useState, useRef, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

interface Velocity {
  vx: number;
  vy: number;
}

interface PhysicsObjectProps {
  initialPosition: Position;
  color: string;
  size: number;
  mass: number;
  id: string;
  onPositionChange: (id: string, position: Position, velocity: Velocity) => void;
  otherObjects: {id: string, position: Position, size: number}[];
}

const PhysicsObject = ({ 
  initialPosition, 
  color, 
  size,
  mass,
  id,
  onPositionChange,
  otherObjects
}: PhysicsObjectProps) => {
  const [position, setPosition] = useState<Position>(initialPosition);
  const [velocity, setVelocity] = useState<Velocity>({ vx: 0, vy: 0 });
  const objectRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const initialClickOffset = useRef<Position>({ x: 0, y: 0 });

  // Обработка столкновений и обновление позиции
  useEffect(() => {
    if (!isDragging) {
      const interval = setInterval(() => {
        // Применяем гравитацию
        const gravity = 0.2;
        const friction = 0.98;
        
        let newVx = velocity.vx * friction;
        let newVy = velocity.vy + gravity;
        
        // Проверяем столкновения с другими объектами
        otherObjects.forEach(obj => {
          if (obj.id !== id) {
            const dx = position.x - obj.position.x;
            const dy = position.y - obj.position.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = (size + obj.size) / 2;
            
            // Если произошло столкновение
            if (distance < minDistance) {
              // Направление отскока
              const angle = Math.atan2(dy, dx);
              const targetX = position.x + Math.cos(angle) * minDistance;
              const targetY = position.y + Math.sin(angle) * minDistance;
              
              // Изменяем скорость в зависимости от направления столкновения
              newVx = (newVx + Math.cos(angle) * 2) * 0.8;
              newVy = (newVy + Math.sin(angle) * 2) * 0.8;
            }
          }
        });
        
        let newX = position.x + newVx;
        let newY = position.y + newVy;
        
        const element = objectRef.current;
        if (element && element.parentElement) {
          const parentRect = element.parentElement.getBoundingClientRect();
          const maxX = parentRect.width - size;
          const maxY = parentRect.height - size;
          
          // Проверяем столкновение со стенами
          if (newX <= 0) {
            newX = 0;
            newVx = -newVx * 0.8; // Меняем направление и добавляем потерю энергии
          } else if (newX >= maxX) {
            newX = maxX;
            newVx = -newVx * 0.8;
          }
          
          if (newY <= 0) {
            newY = 0;
            newVy = -newVy * 0.8;
          } else if (newY >= maxY) {
            newY = maxY;
            newVy = -newVy * 0.8;
          }
          
          setPosition({ x: newX, y: newY });
          setVelocity({ vx: newVx, vy: newVy });
          onPositionChange(id, { x: newX, y: newY }, { vx: newVx, vy: newVy });
        }
      }, 16); // 60fps
      
      return () => clearInterval(interval);
    }
  }, [position, velocity, isDragging, id, size, mass, onPositionChange, otherObjects]);

  // Обработчики для перетаскивания
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const element = objectRef.current;
      if (element && element.parentElement) {
        const parentRect = element.parentElement.getBoundingClientRect();
        
        const newX = e.clientX - parentRect.left - initialClickOffset.current.x;
        const newY = e.clientY - parentRect.top - initialClickOffset.current.y;
        
        const maxX = parentRect.width - size;
        const maxY = parentRect.height - size;
        
        const boundedX = Math.max(0, Math.min(newX, maxX));
        const boundedY = Math.max(0, Math.min(newY, maxY));
        
        setPosition({ x: boundedX, y: boundedY });
        onPositionChange(id, { x: boundedX, y: boundedY }, velocity);
      }
    };

    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, size, id, velocity, onPositionChange]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const element = objectRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      initialClickOffset.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
      
      setIsDragging(true);
      setVelocity({ vx: 0, vy: 0 }); // Останавливаем при захвате
      
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div 
      ref={objectRef}
      className={`${color} rounded-full shadow-lg absolute shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-colors duration-100`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        width: `${size}px`,
        height: `${size}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
    />
  );
};

export default PhysicsObject;
