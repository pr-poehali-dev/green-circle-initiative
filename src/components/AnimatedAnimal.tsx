
import React from 'react';
import { useEffect, useState } from 'react';

const AnimatedAnimal = () => {
  const [position, setPosition] = useState({ x: 10, y: 10 });
  const [isVisible, setIsVisible] = useState(false);
  const [animalIndex, setAnimalIndex] = useState(0);
  
  // Коллекция животных с эмодзи и именами
  const animals = [
    { emoji: '🦊', name: 'Лиса Алиса', image: 'https://images.unsplash.com/photo-1500479694472-551d1fb6258d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80', color: 'orange-400' },
    { emoji: '🐵', name: 'Мартышка Чита', image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80', color: 'brown-400' },
    { emoji: '🦁', name: 'Лев Бонифаций', image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80', color: 'yellow-400' },
    { emoji: '🐘', name: 'Слон Дамбо', image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80', color: 'gray-400' },
    { emoji: '🦒', name: 'Жираф Мелман', image: 'https://images.unsplash.com/photo-1534567110243-8875d64c2cb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80', color: 'yellow-500' }
  ];

  useEffect(() => {
    // Показываем животное с задержкой после загрузки страницы
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    // Анимируем перемещение животного каждые 5 секунд
    const animationTimer = setInterval(() => {
      // Случайное положение в верхней части экрана
      const newX = Math.floor(Math.random() * 70);
      setPosition({ x: newX, y: 5 + Math.floor(Math.random() * 15) });
      
      // Меняем животное при перемещении
      setAnimalIndex((prev) => (prev + 1) % animals.length);
    }, 4000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(animationTimer);
    };
  }, []);

  const currentAnimal = animals[animalIndex];
  
  // CSS анимация для плавного перемещения
  const animalStyle = {
    position: 'absolute',
    left: `${position.x}%`,
    top: `${position.y}%`,
    transition: 'left 2s ease-in-out, top 2s ease-in-out, opacity 1s ease-in-out, transform 0.3s ease',
    opacity: isVisible ? 1 : 0,
    zIndex: 10,
    transform: 'scale(1)',
  };

  return (
    <div 
      style={animalStyle as React.CSSProperties} 
      className="hidden md:block cursor-pointer"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <div className="relative group">
        <img 
          src={currentAnimal.image} 
          alt={currentAnimal.name} 
          className={`w-28 h-28 object-cover rounded-full border-4 border-${currentAnimal.color} transition-all shadow-lg group-hover:shadow-xl`}
        />
        <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md">
          <span role="img" aria-label={currentAnimal.name} className="text-xl">{currentAnimal.emoji}</span>
        </div>
        
        {/* Имя животного всплывает при наведении */}
        <div className="absolute -bottom-10 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full py-1 px-3 shadow-md text-center text-sm font-medium">
          {currentAnimal.name}
        </div>
      </div>
    </div>
  );
};

export default AnimatedAnimal;
