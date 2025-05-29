import { useState } from "react";
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

const giftCards = [
  {
    id: 1,
    amount: 1000,
    price: 1050,
    discount: 5,
    popular: false,
  },
  {
    id: 2,
    amount: 2500,
    price: 2400,
    discount: 4,
    popular: true,
  },
  {
    id: 3,
    amount: 5000,
    price: 4700,
    discount: 6,
    popular: false,
  },
];

export default function Products() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Apple Gift карты</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Выберите номинал и получите код моментально на электронную почту
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {giftCards.map((card) => (
          <Card
            key={card.id}
            className={`relative cursor-pointer transition-all hover:shadow-lg ${
              selectedCard === card.id ? "ring-2 ring-primary" : ""
            } ${card.popular ? "border-primary" : ""}`}
            onClick={() => setSelectedCard(card.id)}
          >
            {card.popular && (
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                Популярный
              </Badge>
            )}

            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center">
                <Icon name="Gift" size={24} className="text-white" />
              </div>
              <CardTitle className="text-2xl">{card.amount} ₽</CardTitle>
              <CardDescription>Apple Gift Card</CardDescription>
            </CardHeader>

            <CardContent className="text-center">
              <div className="mb-4">
                <div className="text-sm text-muted-foreground line-through">
                  {card.amount} ₽
                </div>
                <div className="text-2xl font-bold text-primary">
                  {card.price} ₽
                </div>
                <Badge variant="secondary" className="mt-1">
                  Скидка {card.discount}%
                </Badge>
              </div>

              <Button
                className="w-full"
                variant={selectedCard === card.id ? "default" : "outline"}
              >
                {selectedCard === card.id ? (
                  <>
                    <Icon name="Check" size={16} className="mr-2" />
                    Выбрано
                  </>
                ) : (
                  "Выбрать"
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedCard && (
        <div className="mt-12 max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Оформить заказ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Номинал:</span>
                <span className="font-semibold">
                  {giftCards.find((c) => c.id === selectedCard)?.amount} ₽
                </span>
              </div>
              <div className="flex justify-between">
                <span>К оплате:</span>
                <span className="font-bold text-lg">
                  {giftCards.find((c) => c.id === selectedCard)?.price} ₽
                </span>
              </div>
              <Button className="w-full" size="lg">
                <Icon name="CreditCard" size={16} className="mr-2" />
                Перейти к оплате
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
