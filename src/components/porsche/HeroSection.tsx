
import { Button } from "@/components/ui/button";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import ScrollChevron from "./ScrollChevron";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <HeroBackground />
      <div className="container mx-auto px-4 z-10">
        <HeroContent 
          title="Добро пожаловать в мир Porsche"
          subtitle="Откройте для себя автомобили, которые воплощают мечты и дарят незабываемые эмоции"
          text="Мы не просто продаём автомобили — мы делимся страстью к вождению и предлагаем стать частью легендарной истории"
        />
        <div className="mt-8 flex flex-wrap gap-4">
          <Button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3">
            Познакомиться с моделями
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            Запланировать визит
          </Button>
        </div>
      </div>
      <ScrollChevron targetId="models" />
    </section>
  );
};

export default HeroSection;
