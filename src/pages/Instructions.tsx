import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const steps = [
  {
    icon: "ShoppingCart",
    title: "Выберите номинал",
    description:
      "Выберите подходящий номинал Apple Gift карты на странице товаров",
  },
  {
    icon: "CreditCard",
    title: "Оплатите заказ",
    description:
      "Произведите оплату любым удобным способом - карта, электронные деньги",
  },
  {
    icon: "Mail",
    title: "Получите код",
    description:
      "Код активации придет на указанную электронную почту в течение 5 минут",
  },
  {
    icon: "Smartphone",
    title: "Активируйте",
    description: "Введите код в App Store или iTunes для пополнения баланса",
  },
];

const faqItems = [
  {
    question: "Как долго действует код?",
    answer:
      "Коды Apple Gift карт не имеют срока действия и могут быть использованы в любое время.",
  },
  {
    question: "В каких регионах работают карты?",
    answer:
      "Наши карты предназначены для российского App Store и iTunes Store.",
  },
  {
    question: "Можно ли вернуть купленную карту?",
    answer:
      "Возврат цифровых товаров не предусмотрен согласно законодательству РФ.",
  },
  {
    question: "Что делать, если код не работает?",
    answer:
      "Обратитесь в нашу службу поддержки - мы поможем решить любые проблемы.",
  },
];

export default function Instructions() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Как купить Apple Gift карту</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Простая инструкция по покупке и активации Gift карт Apple
        </p>
      </div>

      {/* Пошаговая инструкция */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {steps.map((step, index) => (
          <Card key={index} className="text-center relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
              {index + 1}
            </div>

            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon
                  name={step.icon as any}
                  size={24}
                  className="text-primary"
                />
              </div>
              <CardTitle className="text-lg">{step.title}</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Преимущества */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Наши преимущества
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-3">
            <Icon name="Zap" className="text-primary" size={20} />
            <div>
              <h3 className="font-semibold">Мгновенная доставка</h3>
              <p className="text-sm text-muted-foreground">
                Код придет в течение 5 минут
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Icon name="Shield" className="text-primary" size={20} />
            <div>
              <h3 className="font-semibold">100% гарантия</h3>
              <p className="text-sm text-muted-foreground">
                Все коды проверены и работают
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Icon name="HeadphonesIcon" className="text-primary" size={20} />
            <div>
              <h3 className="font-semibold">Поддержка 24/7</h3>
              <p className="text-sm text-muted-foreground">
                Поможем в любое время
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">
          Часто задаваемые вопросы
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Icon
                    name="HelpCircle"
                    size={20}
                    className="mr-2 text-primary"
                  />
                  {item.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Контакты поддержки */}
      <div className="mt-16 text-center">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Нужна помощь?</CardTitle>
            <CardDescription>Обратитесь в службу поддержки</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Badge variant="outline" className="w-full justify-center py-2">
              <Icon name="Mail" size={16} className="mr-2" />
              support@giftstore.ru
            </Badge>
            <Badge variant="outline" className="w-full justify-center py-2">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Telegram: @giftsupport
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
