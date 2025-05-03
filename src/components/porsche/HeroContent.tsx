
import { Button } from "@/components/ui/button";

const HeroContent = () => {
  return (
    <div className="max-w-4xl text-center z-10">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
        Воплощение вашей мечты на дороге жизни
      </h1>
      <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
        Porsche — это не просто автомобиль, это ваше личное заявление миру. 
        Почувствуйте привилегию быть за рулем легенды, созданной специально для вас.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white font-medium px-8"
        >
          Забронировать тест-драйв
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm px-8"
        >
          Подобрать модель
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
