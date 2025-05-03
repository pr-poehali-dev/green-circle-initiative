
import { Button } from "@/components/ui/button";

/**
 * Содержимое hero-секции на главной странице
 */
const HeroContent = () => {
  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="text-center px-4 max-w-4xl">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
        Испытайте легендарную точность Porsche
      </h1>
      <p className="text-xl mb-8 text-gray-100 drop-shadow-md">
        Откройте для себя непревзойденное сочетание производительности, 
        комфорта и инноваций
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Button 
          size="lg" 
          className="bg-[#D5001C] hover:bg-[#B0001A] text-white font-medium px-8"
          onClick={scrollToContact}
        >
          Записаться на тест-драйв
        </Button>
        
        <Button 
          variant="outline" 
          size="lg" 
          className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
          onClick={() => document.getElementById('models-section')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Узнать больше
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
