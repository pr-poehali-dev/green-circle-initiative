
import { Button } from "@/components/ui/button";

const HeroContent = () => {
  const scrollToModels = () => {
    document.getElementById('models-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
        Превосходство инженерной мысли в каждой детали
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
        Откройте для себя непревзойденное сочетание мощности, комфорта и престижа 
        в моделях Porsche нового поколения.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          size="lg" 
          className="bg-white text-black hover:bg-white/90 text-base font-medium px-8"
          onClick={scrollToModels}
        >
          Изучить модели
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="border-white text-white hover:bg-white/10 text-base font-medium px-8"
        >
          Записаться на тест-драйв
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
