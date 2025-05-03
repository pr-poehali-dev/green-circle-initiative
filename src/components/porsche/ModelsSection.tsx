
import { useState } from "react";
import CarCard from "./CarCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const models = [
  {
    id: 1,
    name: "Porsche 911",
    description: "Воплощение совершенства и динамики — легендарный спорткар, который всегда остаётся верен своим корням",
    price: "от 10 990 000 ₽",
    imageUrl: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&q=80",
    features: ["3.0 турбо двигатель", "450 л.с.", "3.4 сек до 100 км/ч"]
  },
  {
    id: 2,
    name: "Taycan",
    description: "Будущее уже наступило — электрический спорткар с невероятной динамикой и неповторимым дизайном",
    price: "от 9 190 000 ₽",
    imageUrl: "https://images.unsplash.com/photo-1607211773248-bc152be32328?auto=format&fit=crop&q=80",
    features: ["800-вольтная архитектура", "До 761 л.с.", "2.8 сек до 100 км/ч"]
  },
  {
    id: 3,
    name: "Cayenne",
    description: "Идеальный баланс между комфортом и спортивными характеристиками для тех, кто ценит универсальность",
    price: "от 7 790 000 ₽",
    imageUrl: "https://images.unsplash.com/photo-1632548260498-b7acc7f8294b?auto=format&fit=crop&q=80",
    features: ["3.0 литра V6", "340 л.с.", "Полный привод"]
  }
];

const ModelsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <section id="models" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Выберите свой Porsche</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Познакомьтесь с нашей великолепной коллекцией автомобилей, каждый из которых — шедевр инженерного искусства и воплощение ваших желаний
        </p>

        <Tabs defaultValue="all" className="mb-10">
          <TabsList className="mx-auto">
            <TabsTrigger value="all" onClick={() => setSelectedCategory("all")}>Все модели</TabsTrigger>
            <TabsTrigger value="sports" onClick={() => setSelectedCategory("sports")}>Спортивные</TabsTrigger>
            <TabsTrigger value="suv" onClick={() => setSelectedCategory("suv")}>Внедорожники</TabsTrigger>
            <TabsTrigger value="electric" onClick={() => setSelectedCategory("electric")}>Электромобили</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors">
            Посмотреть все модели
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
