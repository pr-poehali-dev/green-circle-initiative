
import React from "react";
import { Button } from "@/components/ui/button";

const HeroContent = () => {
  return (
    <div className="lg:w-1/2 text-center lg:text-left">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">PORSCHE</h1>
      <p className="text-xl md:text-2xl mb-8 max-w-xl">
        Воплощение совершенства в каждой детали. Испытайте непревзойденные характеристики и элегантный дизайн.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="bg-porsche-green hover:bg-porsche-green-light text-white font-medium text-lg px-8 py-6 shadow-lg">
          Тест-драйв
        </Button>
        <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6">
          Каталог моделей
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
