
import { useState } from "react";
import Wheel from "@/components/ui/Wheel";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [segments] = useState([
    { id: "1", text: "Приз 1 🎁", color: "#8B5CF6" }, // purple
    { id: "2", text: "Приз 2 💰", color: "#EC4899" }, // pink
    { id: "3", text: "Приз 3 🏆", color: "#10B981" }, // green
    { id: "4", text: "Приз 4 💎", color: "#3B82F6" }, // blue
    { id: "5", text: "Приз 5 🚀", color: "#F97316" }, // orange
    { id: "6", text: "Приз 6 🍀", color: "#6366F1" }, // indigo
  ]);

  const [result, setResult] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative overflow-hidden">
      {/* Анимированный неоновый фон */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      {/* Анимированные неоновые шары и линии на фоне */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-2/3 left-1/4 w-40 h-40 bg-[#EC4899]/20 rounded-full blur-2xl animate-pulse-slow"></div>
      
      {/* Вертикальные неоновые линии */}
      <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-accent/20 to-transparent"></div>
      
      {/* Анимированные частицы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full animate-float-particle"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      <header className="p-6 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center neon-text animate-neon-flicker relative">
          Неоновая Рулетка Удачи
          <span className="absolute -right-8 top-0 animate-bounce-slow text-3xl">🎰</span>
        </h1>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6 z-10">
        <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-8 neon-border relative glow-pulse">
          {/* Декоративные элементы барабана */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-24 bg-gradient-to-b from-primary via-accent to-primary rounded-full blur-sm animate-pulse-slow"></div>
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-2 h-24 bg-gradient-to-b from-primary via-accent to-primary rounded-full blur-sm animate-pulse-slow"></div>
          
          <Wheel 
            segments={segments} 
            onSpinEnd={(segment) => {
              console.log(`Выпало: ${segment}`);
              setResult(segment);
            }} 
          />
          
          {result && (
            <div className="mt-4 py-2 px-4 bg-primary/20 border border-primary/30 rounded-md neon-text animate-fade-in">
              <p className="text-xl font-bold">Ваш выигрыш: {result} 🎉</p>
            </div>
          )}
          


          <div className="mt-8 grid grid-cols-2 gap-4">
            <Button 
              variant="default" 
              size="lg" 
              className="text-lg group font-bold shadow-lg shadow-primary/40 bg-primary hover:bg-primary/80 text-white border-2 border-primary/50 hover:scale-105 transition-transform"
            >
              <Icon name="Gift" className="mr-2 group-hover:animate-bounce-slow" size={24} />
              Призы 🎁
            </Button>
            <Button 
              variant="default" 
              size="lg" 
              className="text-lg group font-bold shadow-lg shadow-accent/40 bg-accent hover:bg-accent/80 text-white border-2 border-accent/50 hover:scale-105 transition-transform"
            >
              <Icon name="Trophy" className="mr-2 group-hover:animate-bounce-slow" size={24} />
              Рейтинг 🏆
            </Button>
          </div>
        </div>
      </main>

      <footer className="p-6 text-center text-muted-foreground z-10">
        <p className="neon-text text-sm opacity-70">© 2025 Неоновая Рулетка Удачи 🎮</p>
      </footer>
    </div>
  );
};

export default Index;
