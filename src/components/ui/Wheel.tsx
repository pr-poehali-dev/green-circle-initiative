
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

  const spinWheel = () => {
    if (spinning) return;
    
    setSpinning(true);
    setSelectedSegment(null);
    
    // Случайное количество оборотов (между 3 и 5) плюс случайное дополнительное вращение
    const spins = 3 + Math.random() * 2;
    const degrees = spins * 360 + Math.random() * 360;
    
    // Устанавливаем новый угол вращения
    setRotation(rotation + degrees);
  };

  useEffect(() => {
    if (!spinning) return;

    const handleTransitionEnd = () => {
      setSpinning(false);
      
      // Вычисляем, какой сегмент выбран после остановки рулетки
      const normalizedRotation = rotation % 360;
      const segmentSize = 360 / segments.length;
      
      // Рассчитываем индекс выбранного сегмента
      // Индикатор указывает на верх колеса, поэтому мы делаем коррекцию
      const segmentIndex = Math.floor(((360 - normalizedRotation) % 360) / segmentSize);
      
      // Получаем выбранный сегмент
      const selected = segments[segmentIndex].text;
      setSelectedSegment(selected);
      
      if (onSpinEnd) {
        onSpinEnd(selected);
      }
    };

    const wheel = wheelRef.current;
    if (wheel) {
      wheel.addEventListener('transitionend', handleTransitionEnd);
      return () => {
        wheel.removeEventListener('transitionend', handleTransitionEnd);
      };
    }
  }, [spinning, rotation, segments, onSpinEnd]);

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
          className="w-full h-full rounded-full overflow-hidden border-4 border-gray-800 shadow-xl relative transition-transform duration-[5000ms] ease-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >

          {segments.map((segment, index) => {
            const angle = 360 / segments.length;
            const rotate = index * angle;
            
            return (
              <div 
                key={segment.id}
                className="absolute top-0 left-0 w-full h-full origin-center"
                style={{ 
                  clip: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((rotate + angle) * Math.PI / 180)}% ${50 + 50 * Math.sin((rotate + angle) * Math.PI / 180)}%, 50% 0%)`,
                  transform: `rotate(${rotate}deg)`,
                  backgroundColor: segment.color 
                }}
              >
                <div 
                  className="absolute top-[15%] left-[50%] -translate-x-1/2 text-sm font-bold whitespace-nowrap"
                  style={{ 
                    transform: `rotate(${angle / 2}deg)`,
                    textShadow: '1px 1px 3px rgba(0,0,0,0.7)'
                  }}
                >
                  {segment.text}
                </div>
              </div>
            );
          })}
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
