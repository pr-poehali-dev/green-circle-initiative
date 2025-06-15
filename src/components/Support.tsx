import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Support = () => {
  const supportOptions = [
    {
      icon: "MessageCircle",
      title: "Онлайн чат",
      description: "Получите помощь в реальном времени",
      action: "Начать чат",
      available: "24/7",
    },
    {
      icon: "Mail",
      title: "Email поддержка",
      description: "Отправьте нам подробное описание проблемы",
      action: "Написать email",
      available: "Ответ в течение 2 часов",
    },
    {
      icon: "Phone",
      title: "Телефон",
      description: "Свяжитесь с нами по телефону",
      action: "Позвонить",
      available: "Пн-Вс 9:00-21:00",
    },
  ];

  return (
    <section id="support" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Поддержка клиентов
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Мы готовы помочь вам в любое время
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {supportOptions.map((option, index) => (
              <Card key={index} className="hover-scale text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={option.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{option.description}</p>
                  <p className="text-sm text-gray-500 mb-6">
                    {option.available}
                  </p>
                  <Button variant="outline" className="w-full hover:bg-gray-50">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Гарантия качества
              </h3>
              <p className="text-gray-600 mb-6">
                Все наши подарочные карты Apple проходят проверку подлинности.
                Если у вас возникли проблемы с картой, мы решим их в течение 24
                часов или вернем деньги.
              </p>
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={20} className="text-green-600" />
                  <span className="text-sm font-medium">100% Гарантия</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={20} className="text-blue-600" />
                  <span className="text-sm font-medium">Быстрое решение</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Star" size={20} className="text-yellow-600" />
                  <span className="text-sm font-medium">5.0 рейтинг</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
