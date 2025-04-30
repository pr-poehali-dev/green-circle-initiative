
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
  const spinDuration = 10000; // Увеличенное время вращения до 10 секунд

  const spinWheel = () => {
    if (spinning) return;
    
    setSpinning(true);
    setSelectedSegment(null);
    
    // Случайное количество оборотов (между 5 и 10) плюс случайное дополнительное вращение
    const spins = 5 + Math.random() * 5;
    const degrees = spins * 360 + Math.random() * 360;
    
    // Устанавливаем новый угол вращения
    setRotation(rotation + degrees);

    // Настраиваем таймер окончания вращения вместо использования transitionend
    setTimeout(() => {
      setSpinning(false);
      
      // Вычисляем, какой сегмент выбран после остановки рулетки
      const normalizedRotation = rotation % 360;
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
        {/* Треугольный индикатор */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 z-10 w-0 h-0 
          border-l-[10px] border-l-transparent 
          border-r-[10px] border-r-transparent 
          border-b-[20px] border-b-primary"
        />
        
        {/* Колесо рулетки */}
        <div 
          ref={wheelRef}
          className="w-full h-full rounded-full overflow-hidden border-4 border-gray-800 shadow-xl relative"
          style={{ 
            transform: `rotate(${rotation}deg)`,
            transition: `transform ${spinDuration}ms cubic-bezier(0.2, 0.8, 0.2, 1)` // Используем плавное замедление
          }}
        >
          {/* Создаем секторы с помощью conic-gradient */}
          <div 
            className="w-full h-full rounded-full"
            style={{ 
              background: `conic-gradient(${
                segments.map((segment, index) => 
                  `${segment.color} ${index * segmentAngle}deg ${(index + 1) * segmentAngle}deg`
                ).join(', ')
              })` 
            }}
          />

          {/* Текст на секторах */}
          {segments.map((segment, index) => {
            // Вычисляем средний угол для данного сегмента
            const middleAngle = ((index * segmentAngle) + ((index + 1) * segmentAngle)) / 2;
            // Преобразуем в радианы
            const angleInRadians = (middleAngle - 90) * Math.PI / 180;
            
            // Рассчитываем положение текста (ближе к внешнему краю)
            const radius = 40; // % от размера колеса
            const x = 50 + radius * Math.cos(angleInRadians);
            const y = 50 + radius * Math.sin(angleInRadians);
            
            return (
              <div 
                key={segment.id}
                className="absolute text-white font-bold text-sm text-center"
                style={{ 
                  left: `${x}%`, 
                  top: `${y}%`,
                  transform: `translate(-50%, -50%) rotate(${middleAngle}deg)`,
                  textShadow: '1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8)',
                  maxWidth: '80px'
                }}
              >
                {segment.text}
              </div>
            );
          })}

          {/* Разделительные линии между секторами */}
          {segments.map((_, index) => (
            <div 
              key={`line-${index}`}
              className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-gray-800 origin-left"
              style={{ transform: `rotate(${index * segmentAngle}deg)` }}
            />
          ))}

          {/* Центральная точка */}
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gray-800 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
      
      <Button 
        onClick={spinWheel} 
        disabled={spinning}
        className="px-8 py-2 text-lg"
        size="lg"
      >
        {spinning ? "Крутится..." : "Крутить!"}
      </Button>
      
      {selectedSegment && (
        <div className="mt-4 text-lg font-medium animate-fade-in">
          Выпало: <span className="font-bold text-primary">{selectedSegment}</span>
        </div>
      )}
    </div>
  );
};

export default Wheel;
