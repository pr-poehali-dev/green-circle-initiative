
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const animals = [
  {
    id: 1,
    name: "Лев Симба",
    description: "Величественный король зверей, которому нужна ваша поддержка для полноценного питания.",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    name: "Жираф Мелман",
    description: "Самый высокий житель нашего зоопарка, который любит лакомиться свежими листьями акации.",
    image: "https://images.unsplash.com/photo-1534567110243-8875d64c2424?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    name: "Пингвин Ковальски",
    description: "Очаровательный и умный пингвин, который нуждается в специальном уходе и свежей рыбе.",
    image: "https://images.unsplash.com/photo-1598439210625-358bf2febfce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
];

const AnimalsSection = () => {
  return (
    <section className="py-16 bg-white" id="animals">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Опека над животными
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Вы можете стать опекуном для любого из наших питомцев и помочь в их содержании и уходе.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {animals.map((animal) => (
            <Card key={animal.id} className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{animal.name}</h3>
                <p className="mt-2 text-base text-gray-500">{animal.description}</p>
                <div className="mt-4">
                  <Button className="w-full">Стать опекуном</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="mt-8">
            <Link to="/animals">Посмотреть всех животных</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AnimalsSection;
