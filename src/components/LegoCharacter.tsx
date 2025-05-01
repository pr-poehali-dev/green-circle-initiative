import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LegoCharacter = () => {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1); // 1 для движения вправо, -1 для движения влево

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
        "absolute bottom-0 z-50 transition-all duration-100 ease-linear cursor-pointer", 
        direction === 1 ? "" : "scale-x-[-1]"
      )}
      style={{ left: `${position}%` }}
    >
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1566140967404-b8b3932483f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=120&q=80"
          alt="LEGO Персонаж"
          className="h-20 w-auto object-contain animate-bounce"
        />
        <div className="absolute -top-12 left-0 right-0 opacity-0 bg-white p-2 rounded-md text-center text-xs shadow-md transition-opacity group-hover:opacity-100 hover:opacity-100">
          Привет! Я Кирпичик!
        </div>
      </div>
    </div>
  );
};

export default LegoCharacter;