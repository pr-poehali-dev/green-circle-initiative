
import CarCard, { CarModel } from "./CarCard";

const ModelsSection = () => {
  const carModels: CarModel[] = [
    {
      id: "911",
      name: "911",
      image: "https://images.unsplash.com/photo-1611821064430-0d40291e5362?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      description: "Легендарный спорткар с непревзойденной управляемостью и мощностью."
    },
    {
      id: "taycan",
      name: "Taycan",
      image: "https://images.unsplash.com/photo-1619551734325-81aaf323686c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      description: "Полностью электрический спорткар с инновационными технологиями."
    },
    {
      id: "cayenne",
      name: "Cayenne",
      image: "https://images.unsplash.com/photo-1607853827552-0ea7cad29e6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      description: "Спортивный внедорожник, объединяющий комфорт и динамику."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Модельный ряд</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carModels.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
