import { RainbowButton } from "@/components/ui/rainbow-button";
import Icon from "@/components/ui/icon";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
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
        <div className="w-full h-full bg-white rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
            {[
              {
                name: "Apple Music",
                description: "Музыка и подкасты",
                price: "169₽",
                period: "/месяц",
                icon: "Music",
                color: "from-red-500 to-pink-500",
                popular: false,
              },
              {
                name: "Netflix Premium",
                description: "Фильмы и сериалы 4K",
                price: "599₽",
                period: "/месяц",
                icon: "Tv",
                color: "from-red-600 to-red-800",
                popular: true,
              },
              {
                name: "Spotify Premium",
                description: "Музыка без рекламы",
                price: "199₽",
                period: "/месяц",
                icon: "Radio",
                color: "from-green-500 to-green-600",
                popular: false,
              },
              {
                name: "iCloud+",
                description: "200 ГБ хранилища",
                price: "75₽",
                period: "/месяц",
                icon: "Cloud",
                color: "from-blue-500 to-blue-600",
                popular: false,
              },
              {
                name: "YouTube Premium",
                description: "Видео без рекламы",
                price: "299₽",
                period: "/месяц",
                icon: "PlayCircle",
                color: "from-red-500 to-red-600",
                popular: false,
              },
              {
                name: "Adobe Creative",
                description: "Все приложения Adobe",
                price: "1299₽",
                period: "/месяц",
                icon: "Palette",
                color: "from-purple-600 to-pink-600",
                popular: false,
              },
            ].map((sub, index) => (
              <Card
                key={index}
                className={`hover-scale relative transition-all duration-300 ${
                  sub.popular
                    ? "border-2 border-purple-300 shadow-lg"
                    : "border hover:shadow-md"
                }`}
              >
                {sub.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Популярный
                    </span>
                  </div>
                )}

                <CardHeader className="text-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${sub.color} rounded-2xl flex items-center justify-center mx-auto mb-3`}
                  >
                    <Icon
                      name={sub.icon as any}
                      size={20}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {sub.name}
                  </CardTitle>
                  <div className="text-sm text-gray-500">{sub.description}</div>
                </CardHeader>

                <CardContent className="text-center">
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-2xl font-bold text-gray-900">
                        {sub.price}
                      </span>
                      <span className="text-gray-500 ml-1 text-sm">
                        {sub.period}
                      </span>
                    </div>
                  </div>

                  <Button
                    onClick={() => console.log(`Покупка подписки ${sub.name}`)}
                    className={`w-full ${
                      sub.popular
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "bg-gray-800 hover:bg-gray-700"
                    }`}
                    size="sm"
                  >
                    <Icon name="ShoppingCart" className="mr-2" size={16} />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
};

export default Hero;
