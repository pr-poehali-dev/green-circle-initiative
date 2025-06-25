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
            <div className="w-24 h-24 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Cookie" size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                мимишки
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Пышки из далёкой-далёкой галактики
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Давным-давно в далёкой-далёкой галактике... существовали
              легендарные пышки. От древних джедайских рецептов до тайных формул
              ситхов. Приготовленные с помощью Силы, доставляются быстрее, чем
              полёт на «Тысячелетнем соколе».
            </p>
            <RainbowButton
              onClick={() => scrollToSection("catalog")}
              className="text-lg px-10 py-3"
            >
              <Icon name="Cookie" className="mr-2" size={20} />
              Смотреть каталог
            </RainbowButton>
          </div>
        }
      >
        <div className="w-full h-full bg-white rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
            {[
              {
                name: "Классика",
                description: "Вечные произведения",
                price: "от 299₽",
                period: "",
                icon: "Book",
                color: "from-blue-500 to-indigo-500",
                popular: false,
              },
              {
                name: "Бестселлеры",
                description: "Топ продаж 2024",
                price: "от 499₽",
                period: "",
                icon: "Star",
                color: "from-amber-500 to-orange-500",
                popular: true,
              },
              {
                name: "Фантастика",
                description: "Миры будущего",
                price: "от 399₽",
                period: "",
                icon: "Rocket",
                color: "from-purple-500 to-pink-500",
                popular: false,
              },
              {
                name: "Детективы",
                description: "Захватывающие загадки",
                price: "от 349₽",
                period: "",
                icon: "Search",
                color: "from-gray-600 to-gray-800",
                popular: false,
              },
              {
                name: "Психология",
                description: "Развитие личности",
                price: "от 449₽",
                period: "",
                icon: "Brain",
                color: "from-green-500 to-teal-500",
                popular: false,
              },
              {
                name: "Бизнес",
                description: "Успех и развитие",
                price: "от 599₽",
                period: "",
                icon: "TrendingUp",
                color: "from-emerald-500 to-green-600",
                popular: false,
              },
            ].map((sub, index) => (
              <Card
                key={index}
                className={`hover-scale relative transition-all duration-300 ${
                  sub.popular
                    ? "border-2 border-amber-300 shadow-lg"
                    : "border hover:shadow-md"
                }`}
              >
                {sub.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                    onClick={() =>
                      console.log(`Просмотр категории ${sub.name}`)
                    }
                    className={`w-full ${
                      sub.popular
                        ? "bg-amber-600 hover:bg-amber-700"
                        : "bg-gray-800 hover:bg-gray-700"
                    }`}
                    size="sm"
                  >
                    <Icon name="Eye" className="mr-2" size={16} />
                    Смотреть
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
