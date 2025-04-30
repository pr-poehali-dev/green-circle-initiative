
import React, { useState } from "react";
import Wheel from "@/components/ui/Wheel";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  // Данные сегментов рулетки
  const wheelSegments = [
    { id: "1", text: "Победа!", color: "#8B5CF6" },
    { id: "2", text: "Попробуй еще", color: "#EC4899" },
    { id: "3", text: "Приз", color: "#3B82F6" },
    { id: "4", text: "Бонус", color: "#10B981" },
    { id: "5", text: "Скидка 10%", color: "#F97316" },
    { id: "6", text: "Джекпот", color: "#6366F1" },
    { id: "7", text: "Утешительный", color: "#EF4444" },
    { id: "8", text: "Второй шанс", color: "#0EA5E9" },
  ];

  const [spinCount, setSpinCount] = useState(0);

  const handleSpinEnd = (result: string) => {
    toast({
      title: "Результат рулетки",
      description: `Вы выиграли: ${result}`,
      duration: 5000,
    });
    
    setSpinCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-gray-50">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 text-black">Рулетка удачи</h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Испытайте свою удачу! Вращайте колесо и выигрывайте призы!
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">
        <Wheel 
          segments={wheelSegments} 
          onSpinEnd={handleSpinEnd}
          className="mb-4" 
        />
        
        {spinCount > 0 && (
          <div className="text-center mt-6 p-3 bg-gray-50 rounded-lg">
            <p className="text-gray-700">Вы крутили рулетку: <span className="font-bold text-primary">{spinCount} раз</span></p>
          </div>
        )}
      </div>
      
      <div className="mt-10 text-center text-gray-500 text-sm">
        Рулетка является демонстрационной. Призы не настоящие.
      </div>
    </div>
  );
};

export default Index;
