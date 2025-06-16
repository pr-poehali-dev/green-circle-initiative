import { RainbowButton } from "@/components/ui/rainbow-button";
import Icon from "@/components/ui/icon";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="text-center">
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
            <RainbowButton
              onClick={() => scrollToSection("subscriptions")}
              className="text-lg px-10 py-3"
            >
              <Icon name="Zap" className="mr-2" size={20} />
              Начать сейчас
            </RainbowButton>
          </div>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1400&h=720&fit=crop&crop=center"
          alt="Цифровые развлечения"
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};

export default Hero;
