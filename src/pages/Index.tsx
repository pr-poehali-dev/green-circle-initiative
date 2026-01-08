import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const giftCards = [
  { amount: 500, price: 500, discount: 0 },
  { amount: 1000, price: 1000, discount: 0 },
  { amount: 1500, price: 1500, discount: 0 },
  { amount: 2000, price: 1900, discount: 5 },
  { amount: 3000, price: 2850, discount: 5 },
  { amount: 5000, price: 4700, discount: 6 },
];

const features: Array<{ icon: string; title: string; description: string }> = [
  {
    icon: 'Zap',
    title: 'Мгновенная доставка',
    description: 'Получите карту сразу после оплаты на email'
  },
  {
    icon: 'Shield',
    title: 'Безопасно',
    description: 'Официальные карты Apple, проверенные и гарантированные'
  },
  {
    icon: 'Percent',
    title: 'Выгодные цены',
    description: 'Скидки до 6% на крупные номиналы'
  },
  {
    icon: 'CreditCard',
    title: 'Любой способ оплаты',
    description: 'Банковские карты, электронные кошельки, СБП'
  }
];

const faqs = [
  {
    question: 'Как получить карту после оплаты?',
    answer: 'Сразу после успешной оплаты код карты придет на указанный вами email. Обычно это занимает не более 1-2 минут.'
  },
  {
    question: 'Где можно использовать Apple Gift Card?',
    answer: 'Карты можно использовать в App Store, iTunes Store, Apple Music, iCloud, Apple Books и для покупки устройств Apple.'
  },
  {
    question: 'Есть ли срок действия у карт?',
    answer: 'Нет, Apple Gift Card не имеют срока действия. Вы можете использовать их когда угодно.'
  },
  {
    question: 'Можно ли вернуть карту?',
    answer: 'После отправки кода возврат невозможен согласно правилам Apple. Пожалуйста, внимательно проверяйте данные перед покупкой.'
  },
  {
    question: 'Это официальные карты Apple?',
    answer: 'Да, мы продаем только официальные Apple Gift Card, которые активируются в вашем Apple ID без проблем.'
  }
];

export default function Index() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted">
      {/* Header */}
      <header className="border-b border-white/10 bg-foreground/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Gift" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-white">Apple Gift Card</span>
          </div>
          <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
            <Icon name="User" size={18} className="mr-2" />
            Вход
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">
              Официальный продавец
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Покупайте Apple Gift Card онлайн
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Мгновенная доставка на email. Скидки до 6%. Безопасно и просто.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Выбрать номинал
              <Icon name="ArrowDown" size={20} className="ml-2" />
            </Button>
          </div>
          <div className="animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/489d77e8-4b0d-49f7-bd2e-a9c1ad00ee9a/files/b58cb920-8e78-473a-8320-fde7261afc2d.jpg" 
              alt="Apple Gift Card"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-lg transition-shadow animate-slide-up border-muted"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon} size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Выберите номинал карты
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {giftCards.map((card) => (
            <Card 
              key={card.amount}
              className={`p-6 cursor-pointer transition-all hover:scale-105 hover:shadow-xl ${
                selectedCard === card.amount ? 'ring-2 ring-primary shadow-xl' : ''
              }`}
              onClick={() => setSelectedCard(card.amount)}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Номинал</p>
                  <p className="text-3xl font-bold text-foreground">{card.amount} ₽</p>
                </div>
                {card.discount > 0 && (
                  <Badge className="bg-secondary text-white">
                    -{card.discount}%
                  </Badge>
                )}
              </div>
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-1">Цена</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-bold text-primary">{card.price} ₽</p>
                  {card.discount > 0 && (
                    <p className="text-sm text-muted-foreground line-through">{card.amount} ₽</p>
                  )}
                </div>
              </div>
              <Button 
                className="w-full" 
                variant={selectedCard === card.amount ? "default" : "outline"}
              >
                {selectedCard === card.amount ? (
                  <>
                    <Icon name="Check" size={18} className="mr-2" />
                    Выбрано
                  </>
                ) : (
                  'Купить'
                )}
              </Button>
            </Card>
          ))}
        </div>
        {selectedCard && (
          <div className="mt-8 text-center animate-fade-in">
            <Button size="lg" className="px-12 py-6 text-lg">
              Перейти к оплате
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        )}
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Gift" size={28} className="text-primary" />
                <span className="text-xl font-bold">Apple Gift Card</span>
              </div>
              <p className="text-gray-400 text-sm">
                Официальный продавец Apple Gift Card с мгновенной доставкой
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  support@example.com
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  Поддержка 24/7
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Правила использования</li>
                <li>Политика конфиденциальности</li>
                <li>Способы оплаты</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 Apple Gift Card Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}