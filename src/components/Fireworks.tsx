import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  gravity: number;
  resistance: number;
  shrink: number;
  fade: number;
  shimmer: boolean;
}

interface Rocket {
  x: number;
  y: number;
  targetY: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  trailParticles: Particle[];
}

const Fireworks = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const animFrameRef = useRef<number>(0);
  const rocketRef = useRef<Rocket[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const lastFireTimeRef = useRef<number>(0);
  const frameTimeRef = useRef<number>(0);

  // Современные цвета
  const colors = [
    '#FF3366', // Розовый неон
    '#33CCFF', // Яркий голубой
    '#FF9933', // Оранжевый
    '#33FF99', // Мятный
    '#CC33FF', // Фиолетовый
    '#FFCC33', // Золотой
    '#FF6666', // Коралловый
    '#6666FF', // Лаванда
    '#66FFFF', // Бирюзовый
    '#FFFFFF', // Белый
  ];

  // Создаем ракету
  const createRocket = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const x = Math.random() * canvas.width;
    const targetY = canvas.height * (Math.random() * 0.2 + 0.1); // Высота взрыва
    
    const rocket: Rocket = {
      x,
      y: canvas.height,
      targetY,
      vx: Math.random() * 1 - 0.5,
      vy: -Math.random() * 5 - 8, // Быстрее вверх
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 3,
      trailParticles: []
    };
    
    rocketRef.current.push(rocket);
  };

  // Создаем частицы для взрыва
  const createExplosion = (x: number, y: number, color: string) => {
    const particleCount = Math.floor(Math.random() * 80) + 60;
    const baseHue = Math.random() * 30 - 15; // Небольшая вариация цвета
    
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 6 + 1;
      const size = Math.random() * 3 + 1;

      // Случайно выбираем между основным цветом и случайным из палитры
      const particleColor = Math.random() > 0.7 
        ? colors[Math.floor(Math.random() * colors.length)]
        : color;

      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size,
        color: particleColor,
        alpha: 1,
        gravity: 0.06 + (Math.random() * 0.02),
        resistance: 0.92 + (Math.random() * 0.05),
        shrink: 0.97 + (Math.random() * 0.02),
        fade: 0.015 + (Math.random() * 0.015),
        shimmer: Math.random() > 0.5
      });
    }
  };

  // Анимируем ракеты
  const updateRockets = (deltaTime: number) => {
    const ctx = contextRef.current;
    if (!ctx) return;
    
    rocketRef.current.forEach((rocket, index) => {
      // Обновляем позицию ракеты
      rocket.x += rocket.vx * deltaTime;
      rocket.y += rocket.vy * deltaTime;
      
      // Добавляем эффект дрожания для реализма
      rocket.vx += (Math.random() * 0.4 - 0.2) * deltaTime;
      
      // Добавляем частицы следа
      if (Math.random() > 0.5) {
        rocket.trailParticles.push({
          x: rocket.x,
          y: rocket.y,
          vx: (Math.random() * 0.6 - 0.3) * deltaTime,
          vy: (Math.random() * 0.6 + 0.5) * deltaTime,
          size: Math.random() * 2 + 1,
          color: rocket.color,
          alpha: 0.8,
          gravity: 0.05,
          resistance: 0.92,
          shrink: 0.96,
          fade: 0.035,
          shimmer: false
        });
      }
      
      // Рисуем ракету
      ctx.beginPath();
      ctx.arc(rocket.x, rocket.y, rocket.size, 0, Math.PI * 2);
      ctx.fillStyle = rocket.color;
      ctx.fill();
      
      // Рисуем частицы следа
      rocket.trailParticles.forEach((particle, pIndex) => {
        particle.alpha -= particle.fade * deltaTime;
        particle.size *= particle.shrink;
        
        if (particle.alpha <= 0 || particle.size <= 0.5) {
          rocket.trailParticles.splice(pIndex, 1);
          return;
        }
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${parseInt(particle.color.slice(1, 3), 16)}, ${parseInt(particle.color.slice(3, 5), 16)}, ${parseInt(particle.color.slice(5, 7), 16)}, ${particle.alpha})`;
        ctx.fill();
      });
      
      // Проверяем, достигла ли ракета высоты взрыва
      if (rocket.y <= rocket.targetY) {
        // Создаем взрыв
        createExplosion(rocket.x, rocket.y, rocket.color);
        // Удаляем ракету
        rocketRef.current.splice(index, 1);
      }
    });
  };

  // Анимируем частицы взрыва
  const updateParticles = (deltaTime: number) => {
    const ctx = contextRef.current;
    if (!ctx) return;
    
    particlesRef.current.forEach((particle, index) => {
      // Обновляем скорость с учетом гравитации и сопротивления
      particle.vy += particle.gravity * deltaTime;
      particle.vx *= particle.resistance;
      particle.vy *= particle.resistance;
      
      // Обновляем позицию
      particle.x += particle.vx * deltaTime;
      particle.y += particle.vy * deltaTime;
      
      // Уменьшаем размер и прозрачность
      particle.size *= particle.shrink;
      particle.alpha -= particle.fade * deltaTime;
      
      // Эффект мерцания для части частиц
      let alpha = particle.alpha;
      if (particle.shimmer) {
        alpha = particle.alpha * (0.8 + Math.random() * 0.4);
      }
      
      // Если частица исчезла или слишком маленькая, удаляем её
      if (particle.alpha <= 0 || particle.size <= 0.5) {
        particlesRef.current.splice(index, 1);
        return;
      }
      
      // Рисуем частицу
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.globalCompositeOperation = 'lighter';
      
      // Добавляем размытие для более красивого эффекта свечения
      ctx.shadowBlur = particle.size * 2;
      ctx.shadowColor = particle.color;
      
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      
      ctx.restore();
    });
  };

  const animate = (time: number) => {
    const ctx = contextRef.current;
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;
    
    // Вычисляем deltaTime для плавной анимации
    const deltaTime = (time - frameTimeRef.current) / 16;
    frameTimeRef.current = time;
    
    // Накладываем слой с прозрачностью для создания эффекта угасания
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Запускаем новые ракеты
    if (time - lastFireTimeRef.current > (Math.random() * 1500 + 500)) {
      createRocket();
      lastFireTimeRef.current = time;
    }
    
    // Обновляем и рисуем все объекты
    updateRockets(deltaTime);
    updateParticles(deltaTime);
    
    // Следующий кадр
    animFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    contextRef.current = ctx;
    
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Запускаем анимацию
    lastFireTimeRef.current = performance.now();
    frameTimeRef.current = performance.now();
    animFrameRef.current = requestAnimationFrame(animate);
    
    // Создаем первые ракеты
    for (let i = 0; i < 2; i++) {
      setTimeout(() => createRocket(), i * 800);
    }
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
    />
  );
};

export default Fireworks;
