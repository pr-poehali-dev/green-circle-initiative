import React from 'react';

interface GreenCircleProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const GreenCircle: React.FC<GreenCircleProps> = ({ 
  size = 'medium', 
  className = '' 
}) => {
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-32 h-32',
    large: 'w-64 h-64',
  };

  return (
    <div 
      className={`rounded-full bg-green-500 flex items-center justify-center ${sizeClasses[size]} ${className}`}
      aria-label="Зеленый круг"
    >
      <span className="sr-only">Зеленый круг</span>
    </div>
  );
};

export default GreenCircle;
