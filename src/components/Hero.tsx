import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Zap" size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Подписки и{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                Игры
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Премиальные подписки и популярные игры
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Получите доступ к лучшим сервисам и играм по выгодным ценам.
              Мгновенная активация, гарантия качества.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("subscriptions")}
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 hover-scale"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Подписки
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("games")}
              className="border-purple-200 text-purple-600 hover:bg-purple-50 hover-scale"
            >
              <Icon name="Gamepad2" className="mr-2" size={20} />
              Игры
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
