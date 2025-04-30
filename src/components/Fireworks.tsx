import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  color: string;
  velocity: {
    x: number;
    y: number;
  };
  alpha: number;
  life: number;
  size: number;
  hue: number;
  brightness: number;
  saturation: number;
}

// Современная цветовая палитра
const colorPalettes = [
  // Пастельные цвета
  ['hsla(0, 100%, 70%, 0.8)', 'hsla(60, 100%, 70%, 0.8)', 'hsla(120, 100%, 70%, 0.8)', 'hsla(180, 100%, 70%, 0.8)', 'hsla(240, 100%, 70%, 0.8)', 'hsla(300, 100%, 70%, 0.8)'],
  // Неоновые цвета
  ['hsla(0, 100%, 50%, 0.8)', 'hsla(120, 100%, 50%, 0.8)', 'hsla(240, 100%, 50%, 0.8)', 'hsla(300, 100%, 50%, 0.8)'],
  // Голографические цвета
  ['hsla(180, 100%, 80%, 0.8)', 'hsla(300, 100%, 80%, 0.8)', 'hsla(60, 100%, 80%, 0.8)'],
  // Монохромные (белый/серый/серебристый)
  ['hsla(0, 0%, 100%, 0.9)', 'hsla(0, 0%, 90%, 0.9)', 'hsla(0, 0%, 80%, 0.9)']
];

const Fireworks = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const lastTimeRef = useRef<number>(0);

  const createFirework = (x: number, y: number) => {
    // Случайно выбираем палитру для этого салюта
    const palette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
    const baseHue = Math.random() * 360; // Случайный базовый оттенок для гармоничных цветов
    
    // Параметры этого взрыва
    const particleCount = Math.floor(Math.random() * 80) + 50; // Больше частиц
    const explosionSize = Math.random() * 0.5 + 0.5; // Масштаб взрыва
    
    // Создаем частицы
    for (let i = 0; i < particleCount; i++) {
      // Используем золотое сечение для более естественного распределения
      const angle = Math.random() * Math.PI * 2;
      // Скорость с вариацией для более реалистичного эффекта
      const speed = (Math.random() * 4 + 2) * explosionSize;
      // Размер частицы варьируется
      const size = Math.random() * 3 + 1;
      // Основной цвет из палитры или случайный оттенок от базового
      const useHue = Math.random() > 0.5 
        ? baseHue + Math.random() * 60 - 30 // Вариация вокруг базового оттенка
        : parseInt(Math.random() * 360 + ''); // Гарантированно числовое значение оттенка
      // Расширенные свойства для современных эффектов
      particlesRef.current.push({
        x,
        y,
        color: palette[Math.floor(Math.random() * palette.length)],
        velocity: {
          x: Math.cos(angle) * speed,
          y: Math.sin(angle) * speed
        },
        alpha: 1,
        life: Math.random() * 60 + 80, // Дольше живут
        size, // Разные размеры для реализма
        hue: useHue,
        brightness: Math.random() * 20 + 80, // 80-100%
        saturation: Math.random() * 20 + 80, // 80-100%
      });
    }
  };

  const animate = (time: number) => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Вычисляем delta для плавной анимации независимо от FPS
    const delta = (time - (lastTimeRef.current || time)) / 16.67; // Нормализуем к 60 FPS
    lastTimeRef.current = time;
    
    // Очищаем canvas с прозрачностью для создания эффекта светящегося следа
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Применяем эффект размытия для свечения
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
    ctx.globalCompositeOperation = 'lighter'; // Для яркого сложения цветов
    
    // Обновляем и рисуем частицы
    particlesRef.current.forEach((particle, index) => {
      // Обновляем положение частицы с учетом delta
      particle.x += particle.velocity.x * delta;
      particle.y += particle.velocity.y * delta;
      
      // Добавляем реалистичную гравитацию
      particle.velocity.y += 0.02 * delta;
      
      // Случайное отклонение для эффекта мерцания
      particle.velocity.x += (Math.random() - 0.5) * 0.2 * delta;
      
      // Уменьшаем жизнь и прозрачность
      particle.life -= 1 * delta;
      particle.alpha = particle.life / 100;
      
      // Меняем размер для имитации угасания
      const lifeRatio = particle.life / 100;
      const currentSize = particle.size * (lifeRatio > 0.5 ? 1 : lifeRatio * 2);
      
      // Рисуем частицу как светящийся круг с градиентом
      ctx.globalAlpha = particle.alpha;
      
      // Создаем градиент для частицы
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, currentSize * 2
      );
      
      // Яркий центр частицы
      gradient.addColorStop(0, `hsla(${particle.hue}, ${particle.saturation}%, ${particle.brightness}%, ${particle.alpha})`);
      // Прозрачный край для эффекта свечения
      gradient.addColorStop(1, `hsla(${particle.hue}, ${particle.saturation}%, ${particle.brightness}%, 0)`);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, currentSize * 2, 0, Math.PI * 2);
      ctx.fill();
      
      // Удаляем частицы с истекшим временем жизни
      if (particle.life <= 0) {
        particlesRef.current.splice(index, 1);
      }
    });
    
    // Сбрасываем композитный режим для следующего кадра
    ctx.globalCompositeOperation = 'source-over';
    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1;
    
    // Случайно создаем новые салюты с меньшей вероятностью для более редких, но эффектных взрывов
    if (Math.random() < 0.015) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height * 0.3; // Только в верхней трети экрана
      createFirework(x, y);
    }
    
    animFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Начинаем анимацию с первым салютом
    createFirework(canvas.width / 2, canvas.height * 0.2);
    animFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animFrameRef.current);
      particlesRef.current = [];
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
