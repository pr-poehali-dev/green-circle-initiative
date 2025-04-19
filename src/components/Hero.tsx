import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-slide-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Привет, я <span className="text-primary">Технический Лидер</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              5 лет опыта в FullStack разработке и 
              Deep Learning. Помогаю командам создавать 
              инновационные решения.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="hover-scale">
                <a href="#contact">
                  Связаться <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild className="hover-scale">
                <a href="#" download>
                  Резюме <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center animate-fade-in">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Фото профиля" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 md:bottom-0 md:right-12 bg-accent px-4 py-2 rounded-lg shadow-md animate-fade-in">
              <span className="text-lg font-medium">5+ лет опыта</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
