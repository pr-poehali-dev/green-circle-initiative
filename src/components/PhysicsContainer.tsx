
import { useState, useCallback, useEffect, useMemo } from 'react';
import PhysicsObject from './PhysicsObject';

interface Position {
  x: number;
  y: number;
}

interface Velocity {
  vx: number;
  vy: number;
}

interface PhysicsObjectData {
  id: string;
  position: Position;
  velocity: Velocity;
  color: string;
  size: number;
  mass: number;
}

const PhysicsContainer = () => {
  const [objects, setObjects] = useState<PhysicsObjectData[]>([
    { 
      id: 'circle1', 
      position: { x: 100, y: 50 }, 
      velocity: { vx: 0, vy: 0 },
      color: 'bg-white', 
      size: 70, 
      mass: 10 
    },
    { 
      id: 'circle2', 
      position: { x: 300, y: 100 }, 
      velocity: { vx: 0, vy: 0 },
      color: 'bg-white', 
      size: 60, 
      mass: 8 
    },
    { 
      id: 'circle3', 
      position: { x: 500, y: 150 }, 
      velocity: { vx: 0, vy: 0 },
      color: 'bg-white', 
      size: 80, 
      mass: 12 
    }
  ]);

  // Кэшированный массив объектов для каждого компонента
  const objectsMap = useMemo(() => {
    return objects.reduce((acc, obj) => {
      acc[obj.id] = objects
        .filter(o => o.id !== obj.id)
        .map(o => ({ id: o.id, position: o.position, size: o.size }));
      return acc;
    }, {} as Record<string, { id: string; position: Position; size: number }[]>);
  }, [objects]);

  const handlePositionChange = useCallback((
    id: string, 
    newPosition: Position, 
    newVelocity: Velocity
  ) => {
    setObjects(prev => {
      // Проверяем, действительно ли позиция изменилась
      const oldObject = prev.find(obj => obj.id === id);
      if (
        oldObject && 
        oldObject.position.x === newPosition.x && 
        oldObject.position.y === newPosition.y &&
        oldObject.velocity.vx === newVelocity.vx &&
        oldObject.velocity.vy === newVelocity.vy
      ) {
        return prev; // Нет изменений, не обновляем состояние
      }
      
      return prev.map(obj => 
        obj.id === id 
          ? { ...obj, position: newPosition, velocity: newVelocity } 
          : obj
      );
    });
  }, []);

  // Добавить случайный объект при нажатии пробела
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        const randomSize = Math.floor(Math.random() * 30) + 40; // Меньше размеры для лучшей производительности
        const randomMass = randomSize / 5;

        setObjects(prev => {
          // Ограничиваем количество объектов для производительности
          const newObjects = [...prev];
          if (newObjects.length > 8) {
            newObjects.shift(); // Удаляем самый старый объект, если их слишком много
          }
          
          return [
            ...newObjects,
            {
              id: `circle${Date.now()}`,
              position: { x: Math.random() * 500 + 50, y: 50 },
              velocity: { vx: (Math.random() - 0.5) * 5, vy: Math.random() * 2 },
              color: 'bg-white',
              size: randomSize,
              mass: randomMass
            }
          ];
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden" style={{minHeight: '500px'}}>
      {objects.map(obj => (
        <PhysicsObject
          key={obj.id}
          id={obj.id}
          initialPosition={obj.position}
          color={obj.color}
          size={obj.size}
          mass={obj.mass}
          onPositionChange={handlePositionChange}
          otherObjects={objectsMap[obj.id] || []}
        />
      ))}
      
      <div className="absolute bottom-4 left-4 text-white/70 text-sm p-2 rounded bg-black/30 backdrop-blur-sm">
        Нажмите <kbd className="px-2 py-1 bg-white/20 rounded">Пробел</kbd> для добавления нового объекта
      </div>
    </div>
  );
};

export default PhysicsContainer;
