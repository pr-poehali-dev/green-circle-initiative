import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

// Временные данные для напитков
const drinks = [
  {
    id: 1,
    name: "Американо",
    description: "Классический кофе с добавлением горячей воды",
    price: 150,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    name: "Латте",
    description: "Эспрессо с добавлением подогретого молока",
    price: 180,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80",
  },
  {
    id: 3,
    name: "Зеленый чай",
    description: "Освежающий зеленый чай с жасмином",
    price: 120,
    category: "tea",
    image:
      "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 4,
    name: "Лимонад",
    description: "Освежающий напиток с лимоном и мятой",
    price: 140,
    category: "cold",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

const DrinkCard = ({ drink }: { drink: (typeof drinks)[0] }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 overflow-hidden rounded-t-lg h-48">
        <img
          src={drink.image}
          alt={drink.name}
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardContent className="pt-4">
        <CardTitle>{drink.name}</CardTitle>
        <CardDescription className="mt-2">{drink.description}</CardDescription>
        <p className="mt-2 font-bold">{drink.price} ₽</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Добавить в корзину</Button>
      </CardFooter>
    </Card>
  );
};

const DrinksPage = () => {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Наши напитки</h1>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">Все</TabsTrigger>
          <TabsTrigger value="coffee">Кофе</TabsTrigger>
          <TabsTrigger value="tea">Чай</TabsTrigger>
          <TabsTrigger value="cold">Холодные</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {drinks.map((drink) => (
              <DrinkCard key={drink.id} drink={drink} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="coffee">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {drinks
              .filter((d) => d.category === "coffee")
              .map((drink) => (
                <DrinkCard key={drink.id} drink={drink} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="tea">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {drinks
              .filter((d) => d.category === "tea")
              .map((drink) => (
                <DrinkCard key={drink.id} drink={drink} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="cold">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {drinks
              .filter((d) => d.category === "cold")
              .map((drink) => (
                <DrinkCard key={drink.id} drink={drink} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DrinksPage;
