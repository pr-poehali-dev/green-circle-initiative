import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import MinecraftCube from "./MinecraftCube";

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("обо-мне");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="главная" className="relative min-h-screen flex items-center justify-center pt-16 stone-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center z-10">
        <div className="minecraft-float mb-6">
          <MinecraftCube size={120} rotationSpeed={15} />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-minecraft mb-6 animate-fade-in">
          Привет, я <span className="text-minecraft-green">Проработчик</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mb-10 animate-fade-in" style={{animationDelay: "0.2s"}}>
          Создаю современные веб-приложения и моды для Minecraft
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{animationDelay: "0.4s"}}>
          <a href="#проекты" className="minecraft-btn">
            Посмотреть работы
          </a>
          <a href="#контакты" className="minecraft-btn" style={{backgroundColor: "#8B6914"}}>
            Связаться со мной
          </a>
        </div>

        <Button 
          variant="ghost" 
          size="icon" 
          className="animate-bounce rounded-full w-12 h-12 bg-minecraft-dirt border-2 border-black"
          onClick={scrollToNext}
        >
          <ChevronDown className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
