import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { DrinksList } from "./DrinksList";
import { useState } from "react";

interface DrinkCardProps {
  generatedDrinks: string[];
  animationKey: number;
  onGenerateDrink: () => void;
  onDrinkClick: (drink: string) => void;
}

export function DrinkCard({
  generatedDrinks,
  animationKey,
  onGenerateDrink,
  onDrinkClick,
}: DrinkCardProps) {
  return (
    <Card className="w-full max-w-md bg-[#2B3144] border-[#9b87f5]/20 shadow-xl">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-3xl font-bold text-[#D6BCFA]">
          Генератор напитков
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="mb-8 w-full flex justify-center">
          <Button
            onClick={onGenerateDrink}
            className="w-48 h-48 rounded-full bg-gradient-to-br from-[#4ade80] to-[#22c55e] hover:from-[#86efac] hover:to-[#4ade80] shadow-lg transition-all duration-300 hover:shadow-[#4ade80]/20 hover:shadow-xl hover:scale-105 group"
          >
            <div className="flex flex-col items-center">
              <Icon
                name="Wine"
                size={48}
                className="text-white mb-2 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xl font-semibold">Нажми меня!</span>
            </div>
          </Button>
        </div>

        <DrinksList
          drinks={generatedDrinks}
          animationKey={animationKey}
          onDrinkClick={onDrinkClick}
        />
      </CardContent>
    </Card>
  );
}
