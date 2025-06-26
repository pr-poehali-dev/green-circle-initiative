import { RainbowButton } from "@/components/ui/rainbow-button";
import Icon from "@/components/ui/icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="py-20 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="w-24 h-24 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Icon name="Cookie" size={40} className="text-white" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
            Мир пышек
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Пышки из далёкой-далёкой галактики
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          Давным-давно в далёкой-далёкой галактике... существовали легендарные
          пышки. От древних джедайских рецептов до тайных формул ситхов.
          Приготовленные с помощью Силы, доставляются быстрее, чем полёт на
          «Тысячелетнем соколе».
        </p>
        <RainbowButton
          onClick={() => scrollToSection("catalog")}
          className="text-lg px-10 py-3"
        >
          <Icon name="Cookie" className="mr-2" size={20} />
          Смотреть каталог
        </RainbowButton>
      </div>
    </div>
  );
};

export default Hero;
