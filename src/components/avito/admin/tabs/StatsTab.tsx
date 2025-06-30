import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function StatsTab() {
  const stats = [
    {
      title: "Активные объявления",
      value: "1,234,567",
      icon: "FileText",
      change: "+12%",
    },
    {
      title: "Пользователи онлайн",
      value: "89,432",
      icon: "Users",
      change: "+8%",
    },
    {
      title: "Сделки за сегодня",
      value: "45,678",
      icon: "TrendingUp",
      change: "+15%",
    },
    {
      title: "Доход за месяц",
      value: "₽ 12,345,678",
      icon: "DollarSign",
      change: "+22%",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <Icon
                name={stat.icon as any}
                size={16}
                className="text-muted-foreground"
              />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> от
                прошлого месяца
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>График активности</CardTitle>
            <CardDescription>
              Активность пользователей за последние 7 дней
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              График будет здесь
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Популярные категории</CardTitle>
            <CardDescription>
              Топ категории по количеству объявлений
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                "Автомобили",
                "Недвижимость",
                "Электроника",
                "Одежда",
                "Мебель",
              ].map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm">{category}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${90 - index * 15}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {90 - index * 15}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
