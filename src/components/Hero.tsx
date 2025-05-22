import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 bg-[#F5F5F7] text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tight mb-4">
        Подарочные карты Apple
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mb-8">
        Идеальный подарок для любого повода. Позвольте им выбрать то, что они
        действительно хотят.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          asChild
          size="lg"
          className="bg-[#0071E3] hover:bg-[#0077ED] text-white rounded-full px-8"
        >
          <Link to="/products">Выбрать карту</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-gray-300 text-black rounded-full px-8"
        >
          <Link to="/instructions">Как это работает</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
