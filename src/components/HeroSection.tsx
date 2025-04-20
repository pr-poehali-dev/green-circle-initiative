
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("обо-мне");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="главная" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          Привет, я <span className="text-primary">Разработчик</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mb-10 animate-fade-in" style={{animationDelay: "0.2s"}}>
          Создаю современные веб-приложения и сайты, которые решают бизнес-задачи
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{animationDelay: "0.4s"}}>
          <Button size="lg" onClick={() => window.location.href = "#проекты"}>
            Посмотреть работы
          </Button>
          <Button size="lg" variant="outline" onClick={() => window.location.href = "#контакты"}>
            Связаться со мной
          </Button>
        </div>

        <Button 
          variant="ghost" 
          size="icon" 
          className="animate-bounce rounded-full w-12 h-12"
          onClick={scrollToNext}
        >
          <ChevronDown className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
