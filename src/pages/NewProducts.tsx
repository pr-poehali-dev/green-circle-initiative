import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const NewProducts = () => {
  const navigate = useNavigate();

  const newProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      category: "Электроника",
      price: "₽129,990",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
      isNew: true,
    },
    {
      id: 2,
      name: "Кроссовки Nike Air Max",
      category: "Одежда",
      price: "₽12,990",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      isNew: true,
    },
    {
      id: 3,
      name: "Диван скандинавский",
      category: "Дом и сад",
      price: "₽45,990",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      isNew: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Новинки</h1>
          <p className="text-lg text-gray-600">
            Самые свежие поступления на нашей площадке
          </p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="text-sm">
              <Icon name="Sparkles" size={14} className="mr-1" />
              Только что добавлено
            </Badge>
            <span className="text-gray-600">
              Показано {newProducts.length} товаров
            </span>
          </div>
          <Button variant="outline" size="sm">
            <Icon name="Filter" size={16} className="mr-2" />
            Фильтры
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {newProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {product.isNew && (
                  <Badge className="absolute top-2 left-2 bg-red-500">
                    Новинка
                  </Badge>
                )}
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription>{product.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">
                    {product.price}
                  </span>
                  <Button size="sm">
                    <Icon name="ShoppingCart" size={16} className="mr-1" />В
                    корзину
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="text-center">
          <CardContent className="py-8">
            <Icon
              name="Package"
              size={48}
              className="text-gray-400 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Следите за обновлениями
            </h3>
            <p className="text-gray-600 mb-4">
              Каждый день мы добавляем сотни новых товаров
            </p>
            <Button>
              <Icon name="Bell" size={16} className="mr-2" />
              Подписаться на уведомления
            </Button>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <Button variant="outline" onClick={() => navigate("/")}>
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Вернуться на главную
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
