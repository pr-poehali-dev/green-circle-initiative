import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LegoCharacter = () => {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1); // 1 для движения вправо, -1 для движения влево
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        // Изменение направления при достижении краев экрана
        if (prev > 80) {
          setDirection(-1);
          return 80;
        } else if (prev < 0) {
          setDirection(1);
          return 0;
        }
        return prev + direction * 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div 
      className={cn(
        "absolute bottom-0 z-50 transition-all duration-100 ease-linear", 
        direction === 1 ? "" : "scale-x-[-1]"
      )}
      style={{ left: `${position}%` }}
      onMouseEnter={() => setShowMessage(true)}
      onMouseLeave={() => setShowMessage(false)}
    >
      <div className="relative">
        {/* Сообщение появляется при наведении */}
        {showMessage && (
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white p-2 rounded-md text-center text-xs shadow-md animate-fade-in">
            Привет! Я Кирпичик!
          </div>
        )}
        
        {/* LEGO минифигурка */}
        <div className="w-16 h-24 animate-bounce">
          {/* Голова */}
          <div className="w-10 h-10 mx-auto bg-yellow-400 rounded-t-full relative">
            {/* Глаза */}
            <div className="absolute top-3 left-2 w-2 h-2 bg-black rounded-full"></div>
            <div className="absolute top-3 right-2 w-2 h-2 bg-black rounded-full"></div>
            {/* Улыбка */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-black rounded-full"></div>
          </div>
          
          {/* Тело */}
          <div className="w-12 h-10 mx-auto bg-red-500 relative">
            {/* Ноги */}
            <div className="absolute -bottom-4 left-0 w-6 h-4 bg-blue-600"></div>
            <div className="absolute -bottom-4 right-0 w-6 h-4 bg-blue-600"></div>
            
            {/* Руки */}
            <div className="absolute top-0 -left-4 w-4 h-6 bg-yellow-400 rounded-l-full"></div>
            <div className="absolute top-0 -right-4 w-4 h-6 bg-yellow-400 rounded-r-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegoCharacter;