import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AppleDock } from "@/components/AppleDock";
import { GiftIcon, CreditCardIcon, SparklesIcon } from "lucide-react";

const GiftCard = ({ 
  title, 
  description, 
  price, 
  color 
}: { 
  title: string; 
  description: string; 
  price: string;
  color: string;
}) => {
  return (
    <Card className={`overflow-hidden ${color}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex justify-center py-4">
          <GiftIcon className="h-24 w-24 opacity-90" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between bg-white/10 backdrop-blur-sm pt-3">
        <span className="text-lg font-bold">{price}</span>
        <Button variant="secondary">Купить</Button>
      </CardFooter>
    </Card>
  );
};

export default function Cards() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 container mx-auto px-4 py-8 pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
            <GiftIcon className="h-8 w-8 text-pink" />
            Подарочные карты
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Выберите идеальный подарок для ваших близких
          </p>
          
          <div className="flex flex-col gap-6 mb-12">
            <div className="flex items-center gap-3 bg-primary/10 p-4 rounded-lg">
              <CreditCardIcon className="h-10 w-10 text-primary" />
              <div>
                <h3 className="font-medium text-lg">Электронная доставка</h3>
                <p className="text-muted-foreground">Мгновенная доставка на email получателя</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary/10 p-4 rounded-lg">
              <SparklesIcon className="h-10 w-10 text-primary" />
              <div>
                <h3 className="font-medium text-lg">Персонализация</h3>
                <p className="text-muted-foreground">Добавьте личное сообщение к вашему подарку</p>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-6">Доступные карты</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GiftCard 
              title="Базовая карта" 
              description="Универсальный подарок на любой случай" 
              price="1000 ₽"
              color="bg-gradient-to-br from-blue-500/20 to-purple-500/20"
            />
            <GiftCard 
              title="Премиум карта" 
              description="Особый подарок для особого человека" 
              price="3000 ₽"
              color="bg-gradient-to-br from-amber-500/20 to-red-500/20"
            />
            <GiftCard 
              title="VIP карта" 
              description="Эксклюзивный подарок высшего качества" 
              price="5000 ₽"
              color="bg-gradient-to-br from-pink-500/20 to-rose-500/20"
            />
            <GiftCard 
              title="Праздничная карта" 
              description="Идеальна для дней рождения и юбилеев" 
              price="2000 ₽"
              color="bg-gradient-to-br from-green-500/20 to-teal-500/20"
            />
            <GiftCard 
              title="Корпоративная карта" 
              description="Для бизнес-партнеров и коллег" 
              price="10000 ₽"
              color="bg-gradient-to-br from-slate-500/20 to-gray-500/20"
            />
            <GiftCard 
              title="Семейная карта" 
              description="Для самых близких и родных" 
              price="7500 ₽"
              color="bg-gradient-to-br from-indigo-500/20 to-violet-500/20"
            />
          </div>
        </div>
      </div>
      <AppleDock />
    </div>
  );
}
