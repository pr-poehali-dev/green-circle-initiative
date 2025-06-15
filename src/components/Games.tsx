import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Games = () => {
  const games = [
    {
      name: "Minecraft",
      category: "Sandbox",
      price: "799₽",
      originalPrice: "999₽",
      discount: "20%",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=200&fit=crop",
      popular: true,
    },
    {
      name: "Among Us",
      category: "Мультиплеер",
      price: "99₽",
      originalPrice: "149₽",
      discount: "33%",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=200&fit=crop",
      popular: false,
    },
    {
      name: "PUBG Mobile",
      category: "Battle Royale",
      price: "Бесплатно",
      originalPrice: null,
      discount: null,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop",
      popular: false,
    },
    {
      name: "Call of Duty Mobile",
      category: "Шутер",
      price: "Бесплатно",
      originalPrice: null,
      discount: null,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=200&fit=crop",
      popular: false,
    },
    {
      name: "Genshin Impact",
      category: "RPG",
      price: "Бесплатно",
      originalPrice: null,
      discount: null,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=200&fit=crop",
      popular: true,
    },
    {
      name: "Clash Royale",
      category: "Стратегия",
      price: "Бесплатно",
      originalPrice: null,
      discount: null,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=300&h=200&fit=crop",
      popular: false,
    },
  ];

  const handleBuyClick = (name: string) => {
    console.log(`Покупка игры ${name}`);
  };

  return (
    <section id="games" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            🎮 Популярные игры
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Лучшие игры для всех платформ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, index) => (
              <Card
                key={index}
                className={`hover-scale relative transition-all duration-300 overflow-hidden ${
                  game.popular
                    ? "border-2 border-purple-300 shadow-lg"
                    : "border hover:shadow-md"
                }`}
              >
                {game.popular && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Хит
                    </span>
                  </div>
                )}

                <div className="relative h-32 overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-bold text-gray-900">
                        {game.name}
                      </CardTitle>
                      <div className="text-sm text-gray-500">
                        {game.category}
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon
                        name="Star"
                        size={14}
                        className="text-yellow-400 fill-current"
                      />
                      <span className="text-sm text-gray-600">
                        {game.rating}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-gray-900">
                          {game.price}
                        </span>
                        {game.originalPrice && (
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-gray-500 line-through text-sm">
                              {game.originalPrice}
                            </span>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                              -{game.discount}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleBuyClick(game.name)}
                    className={`w-full ${
                      game.price === "Бесплатно"
                        ? "bg-green-600 hover:bg-green-700"
                        : game.popular
                          ? "bg-purple-600 hover:bg-purple-700"
                          : "bg-gray-800 hover:bg-gray-700"
                    }`}
                    size="lg"
                  >
                    <Icon
                      name={
                        game.price === "Бесплатно" ? "Download" : "ShoppingCart"
                      }
                      className="mr-2"
                      size={18}
                    />
                    {game.price === "Бесплатно" ? "Скачать" : "Купить"}
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

export default Games;
