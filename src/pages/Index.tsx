import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { useState } from "react";

const giftCards = [
  { id: 1, value: 1000, price: 1000, discount: 0 },
  { id: 2, value: 2000, price: 2000, discount: 0 },
  { id: 3, value: 3000, price: 3000, discount: 0 },
  { id: 4, value: 5000, price: 4800, discount: 4 },
  { id: 5, value: 10000, price: 9500, discount: 5 },
  { id: 6, value: 15000, price: 14000, discount: 7 },
];

const benefits = [
  {
    icon: "Zap",
    title: "Мгновенная доставка",
    description: "Получите код в течение 1 минуты после оплаты"
  },
  {
    icon: "Shield",
    title: "100% гарантия",
    description: "Все карты официальные и проверены"
  },
  {
    icon: "Wallet",
    title: "Выгодные цены",
    description: "Скидки до 7% при покупке от 5000₽"
  },
  {
    icon: "HeadphonesIcon",
    title: "Поддержка 24/7",
    description: "Всегда готовы помочь с любым вопросом"
  }
];

const faqItems = [
  {
    question: "Как получить карту после оплаты?",
    answer: "После успешной оплаты код карты придет на вашу электронную почту в течение 1 минуты. Также вы сможете скопировать код прямо на сайте."
  },
  {
    question: "Можно ли использовать карту в любой стране?",
    answer: "Да, Apple Gift Card можно использовать в любой стране, где доступен App Store, iTunes Store и другие сервисы Apple."
  },
  {
    question: "Есть ли срок действия у карты?",
    answer: "Нет, Apple Gift Card не имеет срока действия. Вы можете использовать её в любое удобное время."
  },
  {
    question: "Что делать, если код не работает?",
    answer: "Свяжитесь с нашей поддержкой через чат или email. Мы заменим код или вернем деньги в течение 24 часов."
  },
  {
    question: "Можно ли вернуть карту?",
    answer: "После активации карты возврат невозможен. Если у карты есть проблемы, мы заменим её на новую."
  }
];

const Index = () => {
  const { addItem } = useCart();
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleAddToCart = (card: typeof giftCards[0]) => {
    addItem({
      id: card.id,
      name: `Apple Gift Card ${card.value}₽`,
      price: card.price,
      quantity: 1,
      image: ""
    });
    toast.success("Карта добавлена в корзину", {
      description: `Apple Gift Card ${card.value}₽`
    });
    setSelectedCard(card.id);
    setTimeout(() => setSelectedCard(null), 300);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Apple" className="w-8 h-8" />
            <span className="text-xl font-semibold">Gift Cards</span>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Icon name="ShoppingCart" className="w-4 h-4" />
            Корзина
          </Button>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="mb-4">
            Официальный продавец
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Apple Gift Card
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Пополняйте баланс Apple ID и покупайте приложения, игры, музыку и подписки
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="lg" className="gap-2 text-lg">
              Выбрать карту
              <Icon name="ArrowDown" className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-lg">
              <Icon name="MessageCircle" className="w-5 h-5" />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Выберите номинал</h2>
          <p className="text-muted-foreground text-lg">
            Скидки до 7% на карты от 5000₽
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {giftCards.map((card) => (
            <Card 
              key={card.id} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${
                selectedCard === card.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => handleAddToCart(card)}
            >
              {card.discount > 0 && (
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  -{card.discount}%
                </Badge>
              )}
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                  <Icon name="Apple" className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Номинал</p>
                  <p className="text-3xl font-bold">{card.value}₽</p>
                </div>
                <div className="pt-2">
                  {card.discount > 0 ? (
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground line-through">{card.value}₽</p>
                      <p className="text-2xl font-semibold text-primary">{card.price}₽</p>
                    </div>
                  ) : (
                    <p className="text-2xl font-semibold">{card.price}₽</p>
                  )}
                </div>
                <Button className="w-full gap-2" size="lg">
                  <Icon name="ShoppingCart" className="w-4 h-4" />
                  Купить
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Icon name={benefit.icon} className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Частые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="border-t border-border/40 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Apple" className="w-6 h-6" />
              <span className="font-semibold">Gift Cards</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © 2024 Apple Gift Cards. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">Поддержка</Button>
              <Button variant="ghost" size="sm">Контакты</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
