import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
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
              Цифровые{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                Развлечения
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Лучшие подписки и игры в одном месте
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Откройте мир премиум-контента: от музыки и фильмов до топовых игр.
              Быстрая активация, надежная поддержка, честные цены.
            </p>
          </div>

          <div className="flex justify-center">
            <RainbowButton
              onClick={() => scrollToSection("subscriptions")}
              className="text-lg px-10 py-3"
            >
              <Icon name="Zap" className="mr-2" size={20} />
              Начать сейчас
            </RainbowButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
