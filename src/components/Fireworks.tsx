
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  velocity: {
    x: number;
    y: number;
  };
  alpha: number;
  size: number;
}

const Fireworks = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Задержка перед запуском первого салюта
    const initialTimeout = setTimeout(() => {
      setActive(true);
    }, 2500);

    // Функция создания салюта
    const createFirework = () => {
      if (!active) return;

      const fireworkContainer = document.getElementById('fireworks-container');
      if (!fireworkContainer) return;

      // Случайная позиция салюта по X (в пределах контейнера)
      const startX = Math.random() * window.innerWidth;
      // Начальная позиция салюта по Y (внизу экрана)
      const startY = window.innerHeight;
      
      // Конечная позиция взрыва
      const endX = startX + (Math.random() * 100 - 50);
      const endY = 100 + Math.random() * (window.innerHeight / 2);

      // Создаем элемент ракеты
      const rocket = document.createElement('div');
      rocket.className = 'absolute w-2 h-2 bg-white rounded-full';
      rocket.style.left = `${startX}px`;
      rocket.style.top = `${startY}px`;
      rocket.style.boxShadow = '0 0 10px 2px rgba(255, 255, 255, 0.8)';
      fireworkContainer.appendChild(rocket);

      // Анимируем ракету
      const rocketAnimation = rocket.animate(
        [
          { transform: `translate(0, 0)`, opacity: 1 },
          { transform: `translate(${endX - startX}px, ${endY - startY}px)`, opacity: 0.8 }
        ],
        {
          duration: 1000,
          easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
        }
      );

      // После достижения верхней точки создаем взрыв
      rocketAnimation.onfinish = () => {
        rocket.remove();
        createExplosion(endX, endY);

        // Звук взрыва
        const audio = new Audio('/explosion.mp3');
        audio.volume = 0.2;
        audio.play().catch(() => {
          // Обработка, если браузер блокирует автопроигрывание без взаимодействия
        });
      };

      // Планируем следующий салют
      if (active) {
        setTimeout(createFirework, 2000 + Math.random() * 3000);
      }
    };

    // Функция создания взрыва из частиц
    const createExplosion = (x, y) => {
      const fireworkContainer = document.getElementById('fireworks-container');
      if (!fireworkContainer) return;

      // Случайный цвет для взрыва
      const colors = [
        '#FF5252', // красный
        '#FFD740', // желтый
        '#69F0AE', // зеленый
        '#40C4FF', // голубой
        '#FF4081', // розовый
        '#7C4DFF', // фиолетовый
        '#FFAB40'  // оранжевый
      ];
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Создаем множество частиц
      const particleCount = 60 + Math.floor(Math.random() * 40);
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        
        // Размер частицы
        const size = 1 + Math.random() * 4;
        
        // Базовый стиль частицы
        particle.className = 'absolute rounded-full';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 ${2 + size}px ${color}`;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        fireworkContainer.appendChild(particle);
        
        // Случайное направление и скорость
        const angle = Math.random() * Math.PI * 2;
        const velocity = 2 + Math.random() * 4;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        // Анимируем частицу
        const particleAnimation = particle.animate(
          [
            { transform: 'translate(0, 0)', opacity: 1 },
            { 
              transform: `translate(${vx * 30}px, ${vy * 30 + 20}px)`, 
              opacity: 0 
            }
          ],
          {
            duration: 1000 + Math.random() * 1000,
            easing: 'cubic-bezier(0.1, 0.8, 0.9, 1)'
          }
        );
        
        // Удаляем частицу после анимации
        particleAnimation.onfinish = () => {
          particle.remove();
        };
      }
    };

    // Запускаем первый салют
    setTimeout(createFirework, 3000);

    return () => {
      clearTimeout(initialTimeout);
      setActive(false);
    };
  }, [active]);

  return (
    <div id="fireworks-container" className="fixed inset-0 overflow-hidden pointer-events-none z-20">
      {/* Частицы будут добавляться здесь динамически */}
    </div>
  );
};

export default Fireworks;
