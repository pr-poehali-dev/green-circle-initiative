
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

// Определение типов для карт
type GiftCard = {
  id: number;
  title: string;
  amount: number;
  price: number;
  description: string;
  isPopular?: boolean;
};

// Массив с доступными картами
const giftCards: GiftCard[] = [
  {
    id: 1,
    title: "Apple Gift Card",
    amount: 1000,
    price: 950,
    description: "Идеально для небольших покупок в App Store, iTunes, Apple Books",
  },
  {
    id: 2,
    title: "Apple Gift Card",
    amount: 3000,
    price: 2850,
    description: "Подходит для покупки игр, приложений и подписок",
    isPopular: true,
  },
  {
    id: 3,
    title: "Apple Gift Card",
    amount: 5000,
    price: 4750,
    description: "Для настоящих фанатов Apple: купите несколько подписок сразу",
  },
  {
    id: 4,
    title: "Apple Gift Card",
    amount: 10000,
    price: 9500,
    description: "Максимальная выгода: сэкономьте больше при покупке",
  }
];

export const GiftCardGrid = () => {
  return (
    <section id="cards" className="py-16 px-4 bg-gradient-to-b from-white to-[#f9f7ff]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#222]">
          Выберите подходящий номинал
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Мы предлагаем подарочные карты Apple разных номиналов под любой бюджет и потребности
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {giftCards.map((card) => (
            <Card key={card.id} className={`border overflow-hidden hover:shadow-lg transition-all ${card.isPopular ? 'ring-2 ring-[#8B5CF6]' : ''}`}>
              {card.isPopular && (
                <div className="bg-[#8B5CF6] text-white py-1 px-3 absolute right-0 top-4 text-sm font-medium">
                  Популярный
                </div>
              )}
              <CardHeader className="pb-2">
                <CardTitle>{card.title}</CardTitle>
                <div className="flex items-end mt-2">
                  <span className="text-3xl font-bold text-[#222]">{card.amount} ₽</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-600 mb-4">
                  <p>{card.description}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[#8B5CF6] font-medium">Цена:</span>
                    <span className="font-medium">{card.price} ₽</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-medium">Экономия:</span>
                    <span className="text-green-600 font-medium">{card.amount - card.price} ₽</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#8B5CF6] hover:bg-[#7E69AB]">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Купить
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
