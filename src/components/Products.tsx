import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Products = () => {
  const products = [
    {
      denomination: "500₽",
      price: "550₽",
      originalPrice: "580₽",
      discount: "5%",
      popular: false,
    },
    {
      denomination: "1000₽",
      price: "1100₽",
      originalPrice: "1150₽",
      discount: "4%",
      popular: true,
    },
    {
      denomination: "3000₽",
      price: "3200₽",
      originalPrice: "3350₽",
      discount: "4%",
      popular: false,
    },
  ];

  const handleBuyClick = (denomination: string) => {
    // В реальном проекте здесь будет переход к оплате
    console.log(`Покупка карты ${denomination}`);
  };

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Подарочные карты Apple
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Выберите номинал карты
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className={`hover-scale relative ${
                  product.popular
                    ? "border-2 border-gray-800 shadow-lg"
                    : "border"
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Популярный
                    </span>
                  </div>
                )}

                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Gift" size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {product.denomination}
                  </CardTitle>
                  <div className="text-sm text-gray-500">
                    Подарочная карта Apple
                  </div>
                </CardHeader>

                <CardContent className="text-center">
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {product.price}
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-gray-500 line-through text-sm">
                        {product.originalPrice}
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        -{product.discount}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-2">
                      <Icon
                        name="Shield"
                        size={16}
                        className="text-green-600"
                      />
                      <span>Гарантия подлинности</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Zap" size={16} className="text-blue-600" />
                      <span>Мгновенная доставка</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-green-600"
                      />
                      <span>Проверенный продавец</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleBuyClick(product.denomination)}
                    className={`w-full ${
                      product.popular
                        ? "bg-gray-800 hover:bg-gray-700"
                        : "bg-gray-600 hover:bg-gray-700"
                    }`}
                    size="lg"
                  >
                    <Icon name="ShoppingCart" className="mr-2" size={18} />
                    Купить сейчас
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-lg">
              <Icon name="Info" size={16} className="text-gray-600" />
              <span className="text-sm text-gray-600">
                Все карты проходят проверку подлинности перед продажей
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
