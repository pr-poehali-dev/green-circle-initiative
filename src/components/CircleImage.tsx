
import React from 'react';
import { Circle } from '@/hooks/useCirclesAnimation';

interface CircleImageProps {
  circle: Circle;
}

const CircleImage: React.FC<CircleImageProps> = ({ circle }) => {
  return (
    <div 
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
  );
};

export default CircleImage;
