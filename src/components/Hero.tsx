
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative animated-gradient bg-gradient-to-r from-primary/30 via-accent/20 to-primary/10 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Постройте свой мир с<br />
            <span className="text-primary">Кирпичами</span>
          </h1>
          <p className="text-xs md:text-sm text-gray-700 mb-6 max-w-md">
            Крупнейший магазин конструкторов в России. Доставка по всей стране.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link to="/catalog">Каталог товаров</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/sales">Акции месяца</Link>
            </Button>
            <Button size="lg" asChild>
              <Link to="/contacts">Контакты</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img 
            src="https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Конструкторы" 
            className="rounded-lg shadow-xl max-w-full h-auto"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560961911-ba7ef651d427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=60')] opacity-5 bg-cover bg-center z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-primary/5 mix-blend-overlay animated-gradient z-1"></div>
    </section>
  );
};

export default Hero;
