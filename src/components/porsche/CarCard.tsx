
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export interface CarModel {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface CarCardProps {
  car: CarModel;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <Card className="overflow-hidden hover-scale">
      <div className="h-64 overflow-hidden">
        <img 
          src={car.image} 
          alt={`Porsche ${car.name}`} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
        <p className="text-gray-600 mb-4">{car.description}</p>
        <Button className="w-full">Подробнее</Button>
      </div>
    </Card>
  );
};

export default CarCard;
