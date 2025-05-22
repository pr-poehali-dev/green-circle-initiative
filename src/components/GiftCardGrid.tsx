import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface GiftCard {
  id: string;
  amount: number;
  image: string;
  description: string;
}

const giftCards: GiftCard[] = [
  {
    id: "1000",
    amount: 1000,
    image: "/placeholder.svg",
    description: "Идеально для небольшого подарка или пополнения счета.",
  },
  {
    id: "2500",
    amount: 2500,
    image: "/placeholder.svg",
    description: "Отличный выбор для любого праздника или особого случая.",
  },
  {
    id: "5000",
    amount: 5000,
    image: "/placeholder.svg",
    description: "Премиальный подарок для истинных ценителей Apple.",
  },
];

const GiftCardGrid: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Выберите номинал
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {giftCards.map((card) => (
            <div
              key={card.id}
              className="bg-[#F5F5F7] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={`Подарочная карта ${card.amount} руб.`}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{card.amount} ₽</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <Button className="w-full bg-[#0071E3] hover:bg-[#0077ED] text-white rounded-full">
                  <Icon name="ShoppingCart" className="mr-2" size={16} />
                  Добавить в корзину
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftCardGrid;
