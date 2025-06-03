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

const StoreManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Управление магазином
            </h1>
            <p className="text-gray-600">
              Контролируйте все аспекты вашего бизнеса
            </p>
          </div>
          <Badge variant="secondary" className="text-sm">
            <Icon name="Circle" size={8} className="text-green-500 mr-2" />
            Активен
          </Badge>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <Icon name="Package" size={20} className="text-blue-600 mr-2" />
                Товары
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">247</div>
              <div className="text-sm text-gray-600">активных товаров</div>
              <Button variant="outline" size="sm" className="mt-3 w-full">
                Управлять товарами
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <Icon
                  name="ShoppingCart"
                  size={20}
                  className="text-green-600 mr-2"
                />
                Заказы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">12</div>
              <div className="text-sm text-gray-600">новых заказов</div>
              <Button variant="outline" size="sm" className="mt-3 w-full">
                Посмотреть заказы
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <Icon
                  name="TrendingUp"
                  size={20}
                  className="text-purple-600 mr-2"
                />
                Аналитика
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">₽45,230</div>
              <div className="text-sm text-gray-600">доход за месяц</div>
              <Button variant="outline" size="sm" className="mt-3 w-full">
                Подробная аналитика
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Быстрые действия</CardTitle>
              <CardDescription>Самые важные функции управления</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить товар
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Icon name="Settings" size={16} className="mr-2" />
                Настройки магазина
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Ответить покупателям
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Уведомления</CardTitle>
              <CardDescription>Важные события в вашем магазине</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <Icon name="Bell" size={16} className="text-blue-600 mr-2" />
                <span className="text-sm">Новый заказ на товар "Смартфон"</span>
              </div>
              <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                <Icon
                  name="AlertTriangle"
                  size={16}
                  className="text-yellow-600 mr-2"
                />
                <span className="text-sm">Товар заканчивается на складе</span>
              </div>
            </CardContent>
          </Card>
        </div>

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

export default StoreManagement;
