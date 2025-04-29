import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedAnimal = () => {
  const [position, setPosition] = useState({ x: 50, y: 10 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Плавное перемещение животного по экрану
      setPosition({
        x: Math.random() * 80, // Случайная позиция по горизонтали (0-80%)
        y: Math.random() * 15 + 5, // Случайная позиция по вертикали (5-20%)
      });
    }, 5000); // Изменение позиции каждые 5 секунд
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="absolute z-10 w-24 h-24 sm:w-32 sm:h-32 overflow-hidden"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        x: `${position.x}%`,
        y: `${position.y}%`,
      }}
      transition={{ 
        duration: 2,
        ease: "easeInOut"
      }}
    >
      <img 
        src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" 
        alt="Лиса" 
        className="w-full h-full object-cover rounded-full"
      />
      <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-xs rounded-full w-8 h-8 flex items-center justify-center">
        <span className="animate-bounce">🦊</span>
      </div>
    </motion.div>
  );
};

export default AnimatedAnimal;