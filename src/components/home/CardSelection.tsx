import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type GiftCard = {
  id: string;
  name: string;
  amount: number;
  image: string;
};

const giftCards: GiftCard[] = [
  { id: "card-1", name: "Apple Gift Card", amount: 1000, image: "/placeholder.svg" },
  { id: "card-2", name: "Apple Gift Card", amount: 2000, image: "/placeholder.svg" },
  { id: "card-3", name: "Apple Gift Card", amount: 3000, image: "/placeholder.svg" },
  { id: "card-4", name: "Apple Gift Card", amount: 5000, image: "/placeholder.svg" },
  { id: "card-5", name: "Apple Gift Card", amount: 10000, image: "/placeholder.svg" },
];

const CardSelection = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <section className="py-16 bg-apple-gray">
      <div className="apple-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Выберите номинал карты</h2>
          <p className="text-apple-darkgray max-w-2xl mx-auto">
            Apple Gift Cards доступны в разных номиналах, выберите подходящий вам вариант
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {giftCards.map((card) => (
            <Card 
              key={card.id}
              className={`overflow-hidden cursor-pointer transition-all border-2 ${
                selectedCard === card.id 
                  ? "border-apple-blue" 
                  : "border-transparent hover:border-gray-200"
              }`}
              onClick={() => setSelectedCard(card.id)}
            >
              <CardContent className="p-0">
                <img
                  src={card.image}
                  alt={`${card.name} ${card.amount} ₽`}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2">{card.name}</h3>
                  <p className="text-2xl font-semibold mb-4">{card.amount} ₽</p>
                  <Button 
                    variant={selectedCard === card.id ? "default" : "outline"}
                    className={selectedCard === card.id ? "bg-apple-blue hover:bg-apple-blue/90" : ""}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCard(card.id);
                    }}
                    size="sm"
                  >
                    {selectedCard === card.id ? "Выбрано" : "Выбрать"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to={selectedCard ? `/checkout/${selectedCard}` : "#"}
            className={`apple-button inline-block px-8 py-3 text-base ${
              !selectedCard ? "opacity-70 cursor-not-allowed" : ""
            }`}
            onClick={(e) => !selectedCard && e.preventDefault()}
          >
            Перейти к оформлению
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CardSelection;