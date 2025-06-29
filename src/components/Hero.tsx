import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#000000]">
            Красивые номера и
            <span className="text-primary block">VIP-линейки</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">sdfsdf</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Подобрать{" "}
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Icon name="Crown" size={20} className="mr-2" />
              VIP-каталог
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Sparkles" size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Красивые номера</h3>
            <p className="text-gray-600">
              Уникальные комбинации цифр для запоминающихся номеров
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Crown" size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">VIP-линейки</h3>
            <p className="text-gray-600">
              Премиальные номера для статуса и престижа
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Truck" size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Быстрая доставка</h3>
            <p className="text-gray-600">
              Доставим симку в любую точку России за 1-3 дня
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
