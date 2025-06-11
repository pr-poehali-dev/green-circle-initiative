import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      icon: "Calendar",
      title: "24 месяца выплат",
      description: "Получайте доход 2 года с каждого активного клиента",
    },
    {
      icon: "BarChart3",
      title: "Прозрачность",
      description: "Личный кабинет с детальной статистикой в реальном времени",
    },
    {
      icon: "HeartHandshake",
      title: "Поддержка",
      description: "Маркетинговые материалы и помощь менеджера",
    },
    {
      icon: "Shield",
      title: "Надежность",
      description: "Выплаты строго по графику, до 10 числа каждого месяца",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Почему выбирают нашу партнерку
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Преимущества работы с Poehali.dev
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-scale text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={benefit.icon}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
