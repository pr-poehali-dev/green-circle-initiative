
import { useState, useCallback, useEffect } from 'react';
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
      color: 'bg-red-500', 
      size: 70, 
      mass: 10 
    },
    { 
      id: 'circle2', 
      position: { x: 300, y: 100 }, 
      velocity: { vx: 0, vy: 0 },
      color: 'bg-blue-500', 
      size: 60, 
      mass: 8 
    },
    { 
      id: 'circle3', 
      position: { x: 500, y: 150 }, 
      velocity: { vx: 0, vy: 0 },
      color: 'bg-green-500', 
      size: 80, 
      mass: 12 
    },
    { 
      id: 'circle4', 
      position: { x: 200, y: 250 }, 
      velocity: { vx: 0, vy: 0 },
      color: 'bg-purple-500', 
      size: 65, 
      mass: 9 
    },
    { 
      id: 'circle5', 
      position: { x: 400, y: 300 }, 
      velocity: { vx: 0, vy: 0 },
      color: 'bg-yellow-500', 
      size: 75, 
      mass: 11 
    }
  ]);

  const handlePositionChange = useCallback((
    id: string, 
    newPosition: Position, 
    newVelocity: Velocity
  ) => {
    setObjects(prev => 
      prev.map(obj => 
        obj.id === id 
          ? { ...obj, position: newPosition, velocity: newVelocity } 
          : obj
      )
    );
  }, []);

  // Добавить случайный объект при нажатии пробела
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        const colors = ['bg-yellow-500', 'bg-purple-500', 'bg-pink-500', 'bg-orange-500', 'bg-cyan-500'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomSize = Math.floor(Math.random() * 50) + 40; // От 40 до 90
        const randomMass = randomSize / 5;

        setObjects(prev => [
          ...prev,
          {
            id: `circle${Date.now()}`,
            position: { x: Math.random() * 500 + 50, y: 50 },
            velocity: { vx: (Math.random() - 0.5) * 5, vy: Math.random() * 2 },
            color: randomColor,
            size: randomSize,
            mass: randomMass
          }
        ]);
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
          otherObjects={objects.filter(o => o.id !== obj.id).map(o => ({ 
            id: o.id, 
            position: o.position, 
            size: o.size 
          }))}
        />
      ))}
      
      <div className="absolute bottom-4 left-4 text-white/70 text-sm p-2 rounded bg-black/30 backdrop-blur-sm">
        Нажмите <kbd className="px-2 py-1 bg-white/20 rounded">Пробел</kbd> для добавления нового объекта
      </div>
    </div>
  );
};

export default PhysicsContainer;
