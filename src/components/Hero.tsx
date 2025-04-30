
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative w-full h-[85vh] overflow-hidden mt-2">
      {/* Фоновое изображение */}
      <div>
        <img 
          src="https://images.unsplash.com/photo-1503919275948-1f118d8ecf0b?q=80&w=1770&auto=format&fit=crop" 
          alt="Зоопарк Баба Фрося" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
      </div>
      
      {/* Контент героя */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-4 md:p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Баба Фрося
        </h1>

        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
          Место, где природа и человек встречаются в гармонии.
          Познакомьтесь с удивительным миром животных!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            Купить билеты
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/50 hover:bg-white/20">
            Стать опекуном
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
