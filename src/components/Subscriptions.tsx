import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Subscriptions = () => {
  const subscriptions = [
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
  ];

  const handleBuyClick = (name: string) => {
    console.log(`Покупка подписки ${name}`);
  };

  return (
    <section id="subscriptions" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Премиум подписки
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Получите доступ к лучшим сервисам
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subscriptions.map((sub, index) => (
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
                    className={`w-16 h-16 bg-gradient-to-r ${sub.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon
                      name={sub.icon as any}
                      size={28}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {sub.name}
                  </CardTitle>
                  <div className="text-sm text-gray-500">{sub.description}</div>
                </CardHeader>

                <CardContent className="text-center">
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-gray-900">
                        {sub.price}
                      </span>
                      <span className="text-gray-500 ml-1">{sub.period}</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleBuyClick(sub.name)}
                    className={`w-full ${
                      sub.popular
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "bg-gray-800 hover:bg-gray-700"
                    }`}
                    size="lg"
                  >
                    <Icon name="ShoppingCart" className="mr-2" size={18} />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;
