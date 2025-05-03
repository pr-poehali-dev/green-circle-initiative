
import CarCard from "./CarCard";
import { Button } from "@/components/ui/button"; // Добавляю импорт кнопки

const ModelsSection = () => {
  const cars = [
    {
      id: "911",
      name: "Porsche 911",
      image: "https://images.unsplash.com/photo-1553440569-bcc610516146?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "11 200 000 ₽",
      specs: {
        power: "385 л.с.",
        acceleration: "4.2 сек",
        topSpeed: "293 км/ч",
      },
    },
    {
      id: "taycan",
      name: "Porsche Taycan",
      image: "https://images.unsplash.com/photo-1618509731442-9c9a2eab45b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "7 890 000 ₽",
      specs: {
        power: "408 л.с.",
        acceleration: "5.4 сек",
        topSpeed: "230 км/ч",
      },
    },
    {
      id: "cayenne",
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
    <section id="models-section" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши любимые модели</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Каждый Porsche уникален и создан с любовью к деталям. 
            Выберите модель, которая подходит именно вам и вашему стилю жизни
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard
              key={car.id}
              {...car}
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
