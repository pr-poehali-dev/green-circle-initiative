
import { Button } from "@/components/ui/button";
import CarCard from "./CarCard";

const ModelsSection = () => {
  const cars = [
    {
      name: "Porsche 911",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "11 200 000 ₽",
      specs: {
        power: "385 л.с.",
        acceleration: "4.2 сек",
        topSpeed: "293 км/ч",
      },
    },
    {
      name: "Porsche Taycan",
      image: "https://images.unsplash.com/photo-1607603750909-408f4cbcf8b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "7 890 000 ₽",
      specs: {
        power: "408 л.с.",
        acceleration: "5.4 сек",
        topSpeed: "230 км/ч",
      },
    },
    {
      name: "Porsche Cayenne",
      image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "6 700 000 ₽",
      specs: {
        power: "340 л.с.",
        acceleration: "6.2 сек",
        topSpeed: "245 км/ч",
      },
    },
  ];

  return (
    <section id="models" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши любимые модели</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Каждый Porsche уникален и создан с любовью к деталям. 
            Выберите модель, которая подходит именно вам и вашему стилю жизни
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <CarCard
              key={index}
              name={car.name}
              image={car.image}
              price={car.price}
              specs={car.specs}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Посмотреть все модели
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
