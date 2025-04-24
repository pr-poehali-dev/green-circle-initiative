import React, { useEffect, useState } from 'react';

interface MinecraftCubeProps {
  size?: number;
  rotationSpeed?: number;
  className?: string;
}

const MinecraftCube: React.FC<MinecraftCubeProps> = ({ 
  size = 100,
  rotationSpeed = 10,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 15, y: 0 });

  // Добавим интерактивность при наведении
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Обработчик движения мыши для интерактивного вращения при наведении
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isHovered) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientY - rect.top) / rect.height - 0.5) * 60;
      const y = ((e.clientX - rect.left) / rect.width - 0.5) * 60;
      
      setRotation({ x, y });
    }
  };

  // Стилизация на основе переданных пропсов
  const containerStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  const cubeStyle = {
    animation: isHovered ? 'none' : `rotate ${rotationSpeed}s infinite linear`,
    transform: isHovered ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` : '',
  };

  return (
    <div 
      className={`minecraft-cube-container ${className}`} 
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div className="minecraft-cube" style={cubeStyle}>
        <div className="minecraft-cube-face front"></div>
        <div className="minecraft-cube-face back"></div>
        <div className="minecraft-cube-face right"></div>
        <div className="minecraft-cube-face left"></div>
        <div className="minecraft-cube-face top"></div>
        <div className="minecraft-cube-face bottom"></div>
      </div>
    </div>
  );
};

export default MinecraftCube;
