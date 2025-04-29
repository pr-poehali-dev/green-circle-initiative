import React from 'react';
import { useEffect, useState } from 'react';

const AnimatedAnimal = () => {
  const [position, setPosition] = useState({ x: 10, y: 10 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Показываем животное с задержкой после загрузки страницы
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Анимируем перемещение животного каждые 5 секунд
    const animationTimer = setInterval(() => {
      // Случайное положение в верхней части экрана
      const newX = Math.floor(Math.random() * 70);
      setPosition({ x: newX, y: 10 + Math.floor(Math.random() * 10) });
    }, 5000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(animationTimer);
    };
  }, []);

  // CSS анимация для плавного перемещения
  const animalStyle = {
    position: 'absolute',
    left: `${position.x}%`,
    top: `${position.y}%`,
    transition: 'left 2s ease-in-out, top 2s ease-in-out, opacity 1s ease-in-out',
    opacity: isVisible ? 1 : 0,
    zIndex: 10,
  };

  return (
    <div style={animalStyle as React.CSSProperties} className="hidden md:block">
      <div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1500479694472-551d1fb6258d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80" 
          alt="Лиса" 
          className="w-28 h-28 object-cover rounded-full border-4 border-yellow-400"
        />
        <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md">
          <span role="img" aria-label="Fox" className="text-xl">🦊</span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedAnimal;