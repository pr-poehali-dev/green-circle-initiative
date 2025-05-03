
import { Button } from "@/components/ui/button";

const HeroContent = () => {
  return (
    <div className="container mx-auto px-4 relative z-20 text-white">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Добро пожаловать в мир Porsche
        </h1>
        <p className="text-xl mb-8 text-gray-100">
          Откройте для себя легендарный немецкий инжиниринг и испытайте 
          невероятные эмоции за рулем автомобиля вашей мечты
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Подобрать свой Porsche
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/50">
            Узнать больше о моделях
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
