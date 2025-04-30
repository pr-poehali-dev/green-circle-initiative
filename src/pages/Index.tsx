
import { useState } from "react";
import Wheel from "@/components/ui/Wheel";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [segments] = useState([
    { id: "1", text: "Приз 1", color: "#8B5CF6" }, // purple
    { id: "2", text: "Приз 2", color: "#EC4899" }, // pink
    { id: "3", text: "Приз 3", color: "#10B981" }, // green
    { id: "4", text: "Приз 4", color: "#3B82F6" }, // blue
    { id: "5", text: "Приз 5", color: "#F97316" }, // orange
    { id: "6", text: "Приз 6", color: "#6366F1" }, // indigo
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative overflow-hidden">
      {/* Неоновая сетка на заднем плане */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgxMDEsIDEzMSwgMjU1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiPjxwYXRoIGQ9Ik0wIDYwTDYwIDAiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      {/* Неоновое свечение на фоне */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
      
      <header className="p-6 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center neon-text animate-neon-flicker">
          Неоновая Рулетка Удачи
        </h1>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6 z-10">
        <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-8 neon-border">
          <Wheel segments={segments} onSpinEnd={(segment) => console.log(`Выпало: ${segment}`)} />
          
          <div className="mt-8 grid grid-cols-2 gap-4">
            <Button variant="neon" className="text-lg">
              <Icon name="Gift" className="mr-2" />
              Призы
            </Button>
            <Button variant="neon-accent" className="text-lg">
              <Icon name="Trophy" className="mr-2" />
              Рейтинг
            </Button>
          </div>
        </div>
      </main>

      <footer className="p-6 text-center text-muted-foreground z-10">
        <p className="neon-text text-sm opacity-70">© 2025 Неоновая Рулетка Удачи</p>
      </footer>
    </div>
  );
};

export default Index;
