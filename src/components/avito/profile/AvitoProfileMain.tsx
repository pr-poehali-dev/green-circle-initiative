import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useAuth } from "@/hooks/useAuth";
import { storeApi } from "@/lib/store";

const AvitoProfileMain = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalCategories: 0,
    totalCities: 0,
    totalRevenue: 0,
    monthlyRevenue: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await storeApi.getStats();
        setStats(data);
      } catch (error) {
        console.error("Ошибка загрузки статистики:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadStats();
  }, []);

  if (!user) return null;

  const userStats = [
    {
      label: "Активных объявлений",
      value: 3,
      icon: "Package",
      color: "text-green-600",
    },
    {
      label: "Всего пользователей",
      value: stats.totalUsers,
      icon: "Users",
      color: "text-blue-600",
    },
    {
      label: "Активных пользователей",
      value: stats.activeUsers,
      icon: "UserCheck",
      color: "text-purple-600",
    },
    {
      label: "Категорий",
      value: stats.totalCategories,
      icon: "Grid3X3",
      color: "text-orange-600",
    },
  ];

  const recentActivity = [
    {
      type: "sale",
      title: "Новое объявление размещено",
      time: "2 дня назад",
      amount: `${stats.totalUsers} пользователей`,
    },
    {
      type: "message",
      title: `Активных категорий: ${stats.totalCategories}`,
      time: "Всего",
    },
    {
      type: "view",
      title: `Городов в системе: ${stats.totalCities}`,
      time: "Всего",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Профиль */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start space-x-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Icon name="User" size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {user.firstName} {user.lastName}
              </h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <span className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-1" />
                  {user.email}
                </span>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-700"
                >
                  <Icon name="Shield" size={12} className="mr-1" />
                  Проверен
                </Badge>
              </div>
              <div
                className="flex items-center space-x-2 cursor-pointer hover:opacity-80"
                onClick={() => navigate("/avito/profile/reviews")}
              >
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className={i < 4 ? "fill-current" : ""}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.2 (8 отзывов)</span>
              </div>
            </div>
            <Button
              onClick={() => navigate("/avito/profile/settings")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              Редактировать профиль
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Статистика */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {userStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-gray-50">
                  <Icon
                    name={stat.icon as any}
                    size={24}
                    className={stat.color}
                  />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Быстрые действия */}
      <Card>
        <CardHeader>
          <CardTitle>Быстрые действия</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="h-16 flex-col space-y-2 border-blue-200 text-blue-600 hover:bg-blue-50"
              onClick={() => navigate("/avito/sell")}
            >
              <Icon name="Plus" size={24} />
              <span>Подать объявление</span>
            </Button>
            <Button
              variant="outline"
              className="h-16 flex-col space-y-2 border-purple-200 text-purple-600 hover:bg-purple-50"
              onClick={() => navigate("/avito/profile/ads")}
            >
              <Icon name="Package" size={24} />
              <span>Мои объявления</span>
            </Button>
            <Button
              variant="outline"
              className="h-16 flex-col space-y-2 border-blue-200 text-blue-600 hover:bg-blue-50"
              onClick={() => navigate("/avito/profile/messages")}
            >
              <Icon name="MessageCircle" size={24} />
              <span>Сообщения</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Последняя активность */}
      <Card>
        <CardHeader>
          <CardTitle>Последняя активность</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
              >
                <div
                  className={`p-2 rounded-full ${
                    activity.type === "sale"
                      ? "bg-green-100"
                      : activity.type === "message"
                        ? "bg-blue-100"
                        : "bg-gray-100"
                  }`}
                >
                  <Icon
                    name={
                      activity.type === "sale"
                        ? "DollarSign"
                        : activity.type === "message"
                          ? "MessageCircle"
                          : "Eye"
                    }
                    size={20}
                    className={
                      activity.type === "sale"
                        ? "text-green-600"
                        : activity.type === "message"
                          ? "text-blue-600"
                          : "text-gray-600"
                    }
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-gray-600">{activity.time}</p>
                </div>
                {activity.amount && (
                  <div className="text-right">
                    <p className="font-semibold text-green-600">
                      {activity.amount}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AvitoProfileMain;
