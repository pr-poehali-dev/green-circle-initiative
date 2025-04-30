
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Видео или изображение на фоне */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Porsche 911"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>
      
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 pt-20">
        <h1 className="text-6xl md:text-8xl font-bold leading-tight max-w-xl">
          <span className="block text-red-500">Porsche</span>
          <span className="block">911</span>
        </h1>
        
        <p className="text-xl md:text-2xl mt-6 max-w-lg text-gray-300">
          Легендарный спорткар с более чем 50-летней историей. Неподвластный времени дизайн и экстраординарная производительность.
        </p>
        
        <div className="mt-10 flex flex-wrap gap-4">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 px-8 py-6 text-lg">
            Конфигуратор
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 px-8 py-6 text-lg hover:bg-white/10">
            <span>Тест-драйв</span>
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-red-500">3.0</p>
            <p className="text-sm text-gray-400 mt-1">Объем двигателя, л</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-red-500">450</p>
            <p className="text-sm text-gray-400 mt-1">Мощность, л.с.</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-red-500">3.4</p>
            <p className="text-sm text-gray-400 mt-1">0-100 км/ч, с</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center">
        <a href="#models" className="animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
