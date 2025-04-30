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
}

const colors = [
  '#FF5252', // красный
  '#FFD740', // желтый
  '#64FFDA', // бирюзовый
  '#448AFF', // синий
  '#B388FF', // фиолетовый
  '#FF4081', // розовый
  '#69F0AE', // зеленый
];

const Fireworks = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  const createFirework = (x: number, y: number) => {
    const particleCount = Math.floor(Math.random() * 50) + 30;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 1;
      
      particlesRef.current.push({
        x,
        y,
        color,
        velocity: {
          x: Math.cos(angle) * speed,
          y: Math.sin(angle) * speed
        },
        alpha: 1,
        life: Math.random() * 30 + 60
      });
    }
  };

  const animate = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Очищаем canvas с прозрачностью для создания эффекта затухания
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Обновляем и рисуем частицы
    particlesRef.current.forEach((particle, index) => {
      // Обновляем положение частицы
      particle.x += particle.velocity.x;
      particle.y += particle.velocity.y;
      
      // Добавляем гравитацию
      particle.velocity.y += 0.03;
      
      // Уменьшаем жизнь и прозрачность
      particle.life -= 1;
      particle.alpha = particle.life / 100;
      
      // Рисуем частицу
      ctx.globalAlpha = particle.alpha;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
      ctx.fill();
      
      // Удаляем частицы с истекшим временем жизни
      if (particle.life <= 0) {
        particlesRef.current.splice(index, 1);
      }
    });
    
    // Случайно создаем новые салюты
    if (Math.random() < 0.03) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height * 0.5;
      createFirework(x, y);
    }
    
    ctx.globalAlpha = 1;
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
    
    // Начинаем анимацию
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
