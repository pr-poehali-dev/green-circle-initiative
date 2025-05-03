
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Готовы испытать настоящие эмоции за рулём?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Запишитесь на персональный тест-драйв и почувствуйте, почему Porsche — это больше, чем просто автомобиль. Это начало вашей новой истории.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3">
            Записаться на тест-драйв
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            Узнать больше о моделях
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
