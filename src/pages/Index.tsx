
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const drinks = [
  "Мохито", "Пина Колада", "Маргарита", "Космополитен", "Голубая лагуна",
  "Мартини", "Апероль Шприц", "Кровавая Мэри", "Лонг Айленд", "Дайкири",
  "Май Тай", "Негрони", "Манхэттен", "Виски сауэр", "Белый русский",
  "Текила санрайз", "Джин-тоник", "Куба либре", "Старомодный", "Секс на пляже",
  "Эспрессо мартини", "Беллини", "Кайпиринья", "Хуго", "Зомби",
  "Голубое небо", "Малиновый мохито", "Ягодная маргарита", "Кофейный ликер",
  "Горячий шоколад", "Клубничное молоко", "Яблочный сидр", "Персиковый лимонад",
  "Манговый смузи", "Вишневый компот", "Черничный морс", "Имбирный чай",
  "Мятный лимонад", "Грушевый сок", "Апельсиновый фреш"
];

export default function Index() {
  const [generatedDrinks, setGeneratedDrinks] = useState<string[]>([]);
  const [animationKey, setAnimationKey] = useState(0);

  const generateDrink = () => {
    // Выбираем случайный напиток из списка
    const randomIndex = Math.floor(Math.random() * drinks.length);
    const newDrink = drinks[randomIndex];
    
    // Добавляем напиток в начало списка сгенерированных напитков
    setGeneratedDrinks([newDrink, ...generatedDrinks]);
    
    // Обновляем ключ анимации для запуска анимации
    setAnimationKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white flex flex-col items-center justify-center p-6">
      <Card className="w-full max-w-md bg-[#2B3144] border-[#9b87f5]/20 shadow-xl">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-3xl font-bold text-[#D6BCFA]">
            Генератор напитков
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="mb-8 w-full flex justify-center">
            <Button 
              onClick={generateDrink}
              className="w-48 h-48 rounded-full bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] hover:from-[#a794ff] hover:to-[#8E76BD] shadow-lg transition-all duration-300 hover:shadow-[#9b87f5]/20 hover:shadow-xl hover:scale-105 group"
            >
              <div className="flex flex-col items-center">
                <Icon name="Wine" size={48} className="text-white mb-2 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-xl font-semibold">Нажми меня!</span>
              </div>
            </Button>
          </div>
          
          <div className="w-full">
            <h3 className="text-xl font-semibold mb-3 text-[#D6BCFA]">Сгенерированные напитки:</h3>
            
            {generatedDrinks.length === 0 ? (
              <p className="text-center text-gray-400 italic">Нажмите на кнопку, чтобы создать напиток</p>
            ) : (
              <ul className="space-y-2 max-h-60 overflow-auto pr-2 custom-scrollbar">
                {generatedDrinks.map((drink, index) => (
                  <li 
                    key={`${drink}-${index}`}
                    className={`flex items-center p-3 rounded-md ${index === 0 ? 'bg-[#9b87f5]/20 animate-fade-in font-semibold' : 'bg-[#3A4058]'}`}
                  >
                    <Icon name="GlassWater" size={20} className="mr-2 text-[#9b87f5]" />
                    {index === 0 && <span className="absolute left-0 bg-[#9b87f5]/10"></span>}
                    <span>{drink}</span>
                    {index === 0 && (
                      <span key={animationKey} className="ml-auto text-[#D6BCFA] font-normal text-sm animate-pulse">
                        Новый!
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
