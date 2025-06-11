import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToCalculator = () => {
    const element = document.getElementById("calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Зарабатывайте до{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              30%
            </span>{" "}
            с каждого клиента Poehali.dev
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            Рекомендуйте инновационный сервис для разработчиков и получайте
            стабильный пассивный доход до 2 лет
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition-transform px-8 py-4 text-lg"
              onClick={scrollToCalculator}
            >
              Начать зарабатывать
              <Icon name="ArrowRight" size={20} />
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in">
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <Icon name="Check" size={20} />
              <span className="font-medium">Без вложений</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <Icon name="Check" size={20} />
              <span className="font-medium">Выплаты каждый месяц</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <Icon name="Check" size={20} />
              <span className="font-medium">Прозрачная статистика</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
