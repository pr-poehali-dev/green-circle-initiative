import { useState } from "react";
import { DrinkCard } from "@/components/drinks/DrinkCard";

const DRINK_EXAMPLES = [
  "Американо с миндальным сиропом",
  "Клубничный раф",
  "Матча латте с лавандой",
  "Цитрусовый холодный чай",
  "Кокосовый латте с корицей",
  "Эспрессо тоник",
];

const DrinksPage = () => {
  const [generatedDrinks, setGeneratedDrinks] = useState<string[]>([]);
  const [animationKey, setAnimationKey] = useState(0);

  const generateRandomDrink = () => {
    const randomIndex = Math.floor(Math.random() * DRINK_EXAMPLES.length);
    const newDrink = DRINK_EXAMPLES[randomIndex];
    setGeneratedDrinks([newDrink, ...generatedDrinks]);
    setAnimationKey((prev) => prev + 1);
  };

  const handleDrinkClick = (drink: string) => {
    // В будущем здесь может быть логика для выбранного напитка
    console.log(`Выбран напиток: ${drink}`);
  };

  return (
    <div className="container py-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Генератор напитков
      </h1>

      <div className="w-full max-w-md">
        <DrinkCard
          generatedDrinks={generatedDrinks}
          animationKey={animationKey}
          onGenerateDrink={generateRandomDrink}
          onDrinkClick={handleDrinkClick}
        />
      </div>
    </div>
  );
};

export default DrinksPage;
