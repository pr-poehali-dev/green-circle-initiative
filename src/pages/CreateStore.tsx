import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const CreateStore = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Создать магазин
          </h1>
          <p className="text-lg text-gray-600">
            Начните продавать на нашей платформе уже сегодня
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <Icon name="Store" size={32} className="text-blue-600 mb-2" />
              <CardTitle>Простое создание</CardTitle>
              <CardDescription>
                Настройте свой магазин за несколько минут
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Icon
                name="TrendingUp"
                size={32}
                className="text-green-600 mb-2"
              />
              <CardTitle>Рост продаж</CardTitle>
              <CardDescription>
                Получите доступ к миллионам покупателей
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Icon name="Shield" size={32} className="text-purple-600 mb-2" />
              <CardTitle>Безопасность</CardTitle>
              <CardDescription>Защищенные платежи и гарантии</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Icon
                name="Headphones"
                size={32}
                className="text-orange-600 mb-2"
              />
              <CardTitle>Поддержка 24/7</CardTitle>
              <CardDescription>Помощь на каждом этапе развития</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="text-center">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">
              Готовы начать продавать?
            </h2>
            <div className="space-y-3">
              <Button size="lg" className="w-full md:w-auto">
                <Icon name="Plus" size={20} className="mr-2" />
                Создать магазин
              </Button>
              <div className="text-sm text-gray-500">
                Создание магазина бесплатно
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="mr-4"
          >
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Вернуться на главную
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateStore;
