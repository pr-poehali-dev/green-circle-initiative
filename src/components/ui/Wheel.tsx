
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WheelProps {
  segments: {
    id: string;
    text: string;
    color: string;
  }[];
  onSpinEnd?: (segment: string) => void;
  className?: string;
}

const Wheel = ({ segments, onSpinEnd, className }: WheelProps) => {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const spinDuration = 10000; // 10 секунд вращения

  const spinWheel = () => {
    if (spinning) return;
    
    setSpinning(true);
    setSelectedSegment(null);
    
    // Случайное количество оборотов (между 5 и 10) плюс случайное дополнительное вращение
    const spins = 5 + Math.random() * 5;
    const degrees = spins * 360 + Math.random() * 360;
    
    // Устанавливаем новый угол вращения
    setRotation(rotation + degrees);

    // Настраиваем таймер окончания вращения
    setTimeout(() => {
      setSpinning(false);
      
      // Вычисляем, какой сегмент выбран после остановки
      const normalizedRotation = (rotation + degrees) % 360;
      const segmentSize = 360 / segments.length;
      
      // Рассчитываем индекс выбранного сегмента
      const segmentIndex = Math.floor(((360 - normalizedRotation) % 360) / segmentSize);
      
      // Получаем выбранный сегмент
      const selected = segments[segmentIndex % segments.length].text;
      setSelectedSegment(selected);
      
      if (onSpinEnd) {
        onSpinEnd(selected);
      }
    }, spinDuration);
  };

  // Вычисляем угол для каждого сегмента
  const segmentAngle = 360 / segments.length;

  return (
    <div className={cn("flex flex-col items-center gap-6", className)}>
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Неоновый указатель барабана */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 z-10 flex flex-col items-center animate-pulse-slow"
        >
          <div className="w-6 h-10 bg-primary/80 rounded-t-lg backdrop-blur-sm shadow-[0_0_10px_2px_rgba(139,92,246,0.8)]"></div>
          <div className="w-0 h-0 
            border-l-[12px] border-l-transparent 
            border-r-[12px] border-r-transparent 
            border-t-[16px] border-t-primary/80 
            shadow-[0_0_10px_2px_rgba(139,92,246,0.8)]"></div>
        </div>
        
        {/* Барабан рулетки */}
        <div 
          ref={wheelRef}
          className="w-full h-full rounded-full overflow-hidden border-8 border-gray-800/50 shadow-[0_0_15px_rgba(0,0,0,0.8),inset_0_0_10px_rgba(0,0,0,0.6)] relative"
          style={{ 
            transform: `rotate(${rotation}deg)`,
            transition: `transform ${spinDuration}ms cubic-bezier(0.2, 0.8, 0.2, 1)`,
            boxShadow: spinning ? "0 0 20px rgba(139, 92, 246, 0.5), inset 0 0 15px rgba(139, 92, 246, 0.3)" : 
                                   "0 0 15px rgba(0, 0, 0, 0.8), inset 0 0 10px rgba(0, 0, 0, 0.6)"
          }}
        >
          {/* Создаем секторы */}
          <div 
            className="w-full h-full rounded-full"
            style={{ 
              background: `conic-gradient(${
                segments.map((segment, index) => 
                  `${segment.color} ${index * segmentAngle}deg ${(index + 1) * segmentAngle}deg`
                ).join(', ')
              })`
            }}
          >
            {/* Неоновая рамка барабана */}
            <div 
              className={`absolute inset-0 rounded-full border-4 border-primary/50 ${
                spinning ? 'animate-pulse-slow' : ''
              } neon-border overflow-hidden`}
              style={{ 
                transform: `scale(0.95)`,
                backdropFilter: 'blur(2px)'
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-primary/10 to-transparent ${spinning ? 'animate-shine' : ''}`}></div>
            </div>
          </div>

          {segments.map((segment, index) => {
            // Вычисляем средний угол для данного сегмента
            const middleAngle = ((index * segmentAngle) + ((index + 1) * segmentAngle)) / 2;
            // Преобразуем в радианы
            const angleInRadians = (middleAngle - 90) * Math.PI / 180;
            
            // Рассчитываем положение текста (ближе к внешнему краю)
            const radius = 40; // % от размера колеса
            const x = 50 + radius * Math.cos(angleInRadians);
            const y = 50 + radius * Math.sin(angleInRadians);
            
            // Разделяем текст и эмоджи для разного форматирования
            const hasEmoji = segment.text.match(/[\p{Emoji}]/u);
            const textParts = hasEmoji ? segment.text.split(/(\p{Emoji}+)/u).filter(Boolean) : [segment.text];
            
            return (
              <div 
                key={segment.id}
                className="absolute text-white font-bold text-center"
                style={{ 
                  left: `${x}%`, 
                  top: `${y}%`,
                  transform: `translate(-50%, -50%) rotate(${middleAngle}deg)`,
                  textShadow: '1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8)',
                  maxWidth: '80px'
                }}
              >
                {textParts.map((part, i) => {
                  const isEmoji = part.match(/[\p{Emoji}]/u);
                  return isEmoji ? (
                    <span 
                      key={i} 
                      className={`text-xl ${spinning ? 'animate-bounce-slow' : ''}`} 
                      style={{ display: 'inline-block' }}
                    >
                      {part}
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  );
                })}
              </div>
            );
          })}

          {/* Разделительные линии между секторами */}
          {segments.map((_, index) => (
            <div 
              key={`line-${index}`}
              className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-gray-800/80 origin-left"
              style={{ transform: `rotate(${index * segmentAngle}deg)` }}
            />
          ))}

          {/* Центральная точка */}
          <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-gray-800 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(0,0,0,0.8),inset_0_0_5px_rgba(255,255,255,0.2)]">
            <div className="w-4 h-4 bg-gray-700 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          {/* Эффект блеска при вращении */}
          {spinning && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine"></div>
          )}
        </div>
      </div>
      
      <Button 
        onClick={spinWheel} 
        disabled={spinning}
        className="px-8 py-2 text-lg relative overflow-hidden group"
        size="lg"
        variant="neon"
      >
        {spinning ? (
          <>
            <span className="mr-2 animate-spin inline-block">🎰</span>
            Крутится...
          </>
        ) : (
          <>
            <span className="mr-2 group-hover:animate-bounce-slow inline-block">🎮</span>
            Крутить!
          </>
        )}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-shine"></span>
      </Button>
      
      {selectedSegment && (
        <div className="mt-4 text-lg font-medium animate-fade-in flex items-center justify-center">
          Выпало: <span className="font-bold text-primary neon-text ml-2">{selectedSegment}</span>
          <span className="ml-2 animate-bounce-slow text-xl">🎉</span>
        </div>
      )}
    </div>
  );
};

export default Wheel;
