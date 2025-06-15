import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Payment = () => {
  const paymentMethods = [
    {
      icon: "CreditCard",
      title: "Банковские карты",
      description: "Visa, MasterCard, МИР",
      popular: true,
    },
    {
      icon: "Smartphone",
      title: "СБП",
      description: "Система быстрых платежей",
      popular: true,
    },
    {
      icon: "Wallet",
      title: "ЮMoney",
      description: "Электронный кошелек",
      popular: false,
    },
    {
      icon: "DollarSign",
      title: "QIWI",
      description: "QIWI кошелек",
      popular: false,
    },
    {
      icon: "Building",
      title: "Сбербанк Онлайн",
      description: "Прямая оплата через банк",
      popular: false,
    },
    {
      icon: "Zap",
      title: "WebMoney",
      description: "Система WebMoney",
      popular: false,
    },
  ];

  const securityFeatures = [
    {
      icon: "Lock",
      title: "SSL шифрование",
      description: "Все данные защищены 256-битным шифрованием",
    },
    {
      icon: "Shield",
      title: "PCI DSS",
      description: "Соответствие стандартам безопасности платежей",
    },
    {
      icon: "Eye",
      title: "Не храним данные карт",
      description: "Платежные данные не сохраняются на наших серверах",
    },
  ];

  return (
    <section id="payment" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Способы оплаты
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Выберите удобный способ оплаты
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {paymentMethods.map((method, index) => (
              <Card
                key={index}
                className={`hover-scale ${
                  method.popular ? "border-gray-800 bg-white" : ""
                }`}
              >
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon name={method.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-lg flex items-center justify-center gap-2">
                    {method.title}
                    {method.popular && (
                      <span className="bg-gray-800 text-white px-2 py-1 rounded-full text-xs">
                        Популярный
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Безопасность платежей
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={feature.icon}
                      size={28}
                      className="text-green-600"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-lg border">
              <Icon name="Info" size={16} className="text-gray-600" />
              <span className="text-sm text-gray-600">
                Оплата проходит через защищенное соединение. Мы не имеем доступа
                к вашим платежным данным.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
