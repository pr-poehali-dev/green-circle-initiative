import { useState } from "react";
import { DrinkCard } from "@/components/drinks/DrinkCard";
import { DrinkRecipeDialog } from "@/components/drinks/DrinkRecipeDialog";
import { drinks, drinksData } from "@/data/drinksData";
import { Footer } from "@/components/layout/Footer";

export default function Index() {
  const [generatedDrinks, setGeneratedDrinks] = useState<string[]>([]);
  const [animationKey, setAnimationKey] = useState(0);
  const [selectedDrink, setSelectedDrink] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const generateDrink = () => {
    // Выбираем случайный напиток из списка
    const randomIndex = Math.floor(Math.random() * drinks.length);
    const newDrink = drinks[randomIndex];

    // Добавляем напиток в начало списка сгенерированных напитков
    setGeneratedDrinks([newDrink, ...generatedDrinks]);

    // Обновляем ключ анимации для запуска анимации
    setAnimationKey((prev) => prev + 1);
  };

  const handleDrinkClick = (drink: string) => {
    setSelectedDrink(drink);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col items-center justify-center p-6">
        <DrinkCard
          generatedDrinks={generatedDrinks}
          animationKey={animationKey}
          onGenerateDrink={generateDrink}
          onDrinkClick={handleDrinkClick}
        />

        <DrinkRecipeDialog
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          selectedDrink={selectedDrink}
          drinksData={drinksData}
        />
      </div>
      <Footer />
    </div>
  );
}
