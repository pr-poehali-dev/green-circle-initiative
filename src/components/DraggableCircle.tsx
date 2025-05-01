
import { useState, useRef, useEffect } from 'react';

const DraggableCircle = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const circleRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (circleRef.current) {
      const rect = circleRef.current.getBoundingClientRect();
      dragOffset.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
      isDragging.current = true;
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !circleRef.current?.parentElement) return;
      
      const parent = circleRef.current.parentElement.getBoundingClientRect();
      const x = e.clientX - parent.left - dragOffset.current.x;
      const y = e.clientY - parent.top - dragOffset.current.y;
      
      // Используем requestAnimationFrame для более плавной анимации
      requestAnimationFrame(() => {
        setPosition({ x, y });
      });
    };
    
    const handleMouseUp = () => {
      isDragging.current = false;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div 
      ref={circleRef}
      className="absolute h-16 w-16 bg-white rounded-full cursor-grab hover:shadow-lg transition-shadow"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        willChange: 'transform',
        zIndex: 20
      }}
      onMouseDown={handleMouseDown}
    />
  );
};

export default DraggableCircle;
