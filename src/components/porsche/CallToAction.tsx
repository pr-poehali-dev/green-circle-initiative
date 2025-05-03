
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Готовы испытать незабываемые эмоции за рулем Porsche?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Запишитесь на тест-драйв и почувствуйте легенду на собственном опыте. 
          Наши дружелюбные консультанты помогут подобрать идеальный Porsche для вас!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Записаться на тест-драйв
          </Button>
          <Button size="lg" variant="outline" className="border-white/50 hover:bg-white/10">
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
