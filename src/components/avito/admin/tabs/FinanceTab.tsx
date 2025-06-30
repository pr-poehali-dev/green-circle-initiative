import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function FinanceTab() {
  const transactions = [
    {
      id: 1,
      user: "Алексей И.",
      amount: 2500,
      type: "income",
      service: "Поднятие в топ",
      date: "2024-06-29",
    },
    {
      id: 2,
      user: "Мария П.",
      amount: 1200,
      type: "income",
      service: "Премиум размещение",
      date: "2024-06-29",
    },
    {
      id: 3,
      user: "Дмитрий С.",
      amount: 5000,
      type: "refund",
      service: "Возврат средств",
      date: "2024-06-28",
    },
    {
      id: 4,
      user: "Елена К.",
      amount: 800,
      type: "income",
      service: "Выделение цветом",
      date: "2024-06-28",
    },
    {
      id: 5,
      user: "Андрей В.",
      amount: 3200,
      type: "income",
      service: "Пакет услуг",
      date: "2024-06-27",
    },
  ];

  const monthlyStats = [
    {
      month: "Июнь 2024",
      income: 12500000,
      expenses: 3200000,
      profit: 9300000,
    },
    { month: "Май 2024", income: 11800000, expenses: 3100000, profit: 8700000 },
    {
      month: "Апрель 2024",
      income: 13200000,
      expenses: 3400000,
      profit: 9800000,
    },
    {
      month: "Март 2024",
      income: 10900000,
      expenses: 2900000,
      profit: 8000000,
    },
  ];

  const services = [
    { name: "Поднятие в топ", revenue: 4500000, orders: 18500 },
    { name: "Премиум размещение", revenue: 3200000, orders: 8900 },
    { name: "Выделение цветом", revenue: 2100000, orders: 15600 },
    { name: "Турбо-продажа", revenue: 1800000, orders: 4200 },
    { name: "Пакет услуг", revenue: 1400000, orders: 2800 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Доход за месяц
            </CardTitle>
            <Icon
              name="TrendingUp"
              size={16}
              className="text-muted-foreground"
            />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₽ 12,500,000</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+15.2%</span> от прошлого месяца
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Расходы</CardTitle>
            <Icon
              name="TrendingDown"
              size={16}
              className="text-muted-foreground"
            />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₽ 3,200,000</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600">+8.1%</span> от прошлого месяца
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Чистая прибыль
            </CardTitle>
            <Icon
              name="DollarSign"
              size={16}
              className="text-muted-foreground"
            />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₽ 9,300,000</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+18.5%</span> от прошлого месяца
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Последние транзакции</CardTitle>
            <CardDescription>
              Последние платежи и операции пользователей
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        transaction.type === "income"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }`}
                    >
                      <Icon
                        name={transaction.type === "income" ? "Plus" : "Minus"}
                        size={14}
                        className={
                          transaction.type === "income"
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      />
                    </div>
                    <div>
                      <div className="font-medium text-sm">
                        {transaction.user}
                      </div>
                      <div className="text-xs text-gray-500">
                        {transaction.service}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`font-medium ${
                        transaction.type === "income"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.type === "income" ? "+" : "-"}₽{" "}
                      {transaction.amount.toLocaleString("ru-RU")}
                    </div>
                    <div className="text-xs text-gray-500">
                      {transaction.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              Показать все транзакции
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Доходы по услугам</CardTitle>
            <CardDescription>Самые популярные платные услуги</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">{service.name}</div>
                    <div className="text-xs text-gray-500">
                      {service.orders.toLocaleString("ru-RU")} заказов
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">
                      ₽ {(service.revenue / 1000000).toFixed(1)}M
                    </div>
                    <div className="w-20 h-1 bg-gray-200 rounded-full mt-1">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{
                          width: `${(service.revenue / Math.max(...services.map((s) => s.revenue))) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Финансовая динамика</CardTitle>
          <CardDescription>
            Доходы, расходы и прибыль за последние месяцы
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monthlyStats.map((stat, index) => (
              <div
                key={index}
                className="grid grid-cols-4 gap-4 p-4 border rounded-lg"
              >
                <div>
                  <div className="text-sm font-medium">{stat.month}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500">Доходы</div>
                  <div className="font-medium text-green-600">
                    ₽ {(stat.income / 1000000).toFixed(1)}M
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500">Расходы</div>
                  <div className="font-medium text-red-600">
                    ₽ {(stat.expenses / 1000000).toFixed(1)}M
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500">Прибыль</div>
                  <div className="font-medium text-blue-600">
                    ₽ {(stat.profit / 1000000).toFixed(1)}M
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
