
import { useState, useRef, useEffect, memo, useCallback } from 'react';

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

const PhysicsObject = memo(({ 
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
  const animationFrameRef = useRef<number | null>(null);
  
  // Используем для хранения последних значений без перерендера
  const stateRef = useRef({
    position,
    velocity,
    isDragging,
    otherObjects
  });

  // Обновляем ref при изменении состояния
  useEffect(() => {
    stateRef.current = {
      position,
      velocity,
      isDragging,
      otherObjects
    };
  }, [position, velocity, isDragging, otherObjects]);

  // Функция обновления физики, оптимизированная для requestAnimationFrame
  const updatePhysics = useCallback(() => {
    if (stateRef.current.isDragging) return;
    
    // Применяем гравитацию
    const gravity = 0.2;
    const friction = 0.98;
    
    let newVx = stateRef.current.velocity.vx * friction;
    let newVy = stateRef.current.velocity.vy + gravity;
    
    // Проверяем столкновения с другими объектами
    stateRef.current.otherObjects.forEach(obj => {
      const dx = stateRef.current.position.x - obj.position.x;
      const dy = stateRef.current.position.y - obj.position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const minDistance = (size + obj.size) / 2;
      
      // Если произошло столкновение
      if (distance < minDistance && distance > 0) {
        // Направление отскока
        const angle = Math.atan2(dy, dx);
        
        // Упрощенная физика отскока
        newVx = (newVx + Math.cos(angle) * 1.5) * 0.8;
        newVy = (newVy + Math.sin(angle) * 1.5) * 0.8;
      }
    });
    
    let newX = stateRef.current.position.x + newVx;
    let newY = stateRef.current.position.y + newVy;
    
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
      
      // Обновляем только если изменения существенные
      if (
        Math.abs(newX - stateRef.current.position.x) > 0.1 || 
        Math.abs(newY - stateRef.current.position.y) > 0.1
      ) {
        setPosition({ x: newX, y: newY });
        setVelocity({ vx: newVx, vy: newVy });
        onPositionChange(id, { x: newX, y: newY }, { vx: newVx, vy: newVy });
      }
    }
    
    // Продолжаем анимационный цикл
    animationFrameRef.current = requestAnimationFrame(updatePhysics);
  }, [id, size, onPositionChange]);

  // Запускаем и останавливаем физическую симуляцию
  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(updatePhysics);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updatePhysics]);

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

  // Использовать transform вместо top/left для лучшей производительности
  return (

    <div 
      ref={objectRef}
      className={`${color} rounded-full shadow-lg absolute shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-colors duration-100`}
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px)`,
        width: `${size}px`,
        height: `${size}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
        zIndex: isDragging ? 10 : 1,
        willChange: 'transform',
      }}

      }}
      onMouseDown={handleMouseDown}
    />
  );
});

export default PhysicsObject;
