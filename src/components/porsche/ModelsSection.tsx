
import CarCard, { CarModel } from "./CarCard";

const ModelsSection = () => {
  const carModels: CarModel[] = [
    {
      id: "911",
      name: "911",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
      description: "Легендарный спорткар с непревзойденной управляемостью и мощностью."
    },
    {
      id: "taycan",
      name: "Taycan",
      image: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
      description: "Полностью электрический спорткар с инновационными технологиями."
    },
    {
      id: "cayenne",
      name: "Cayenne",
      image: "https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
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
