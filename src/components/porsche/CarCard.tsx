
import { Button } from "@/components/ui/button";

interface CarCardProps {
  name: string;
  image: string;
  price: string;
  specs: {
    power: string;
    acceleration: string;
    topSpeed: string;
  };
}

const CarCard = ({ name, image, price, specs }: CarCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-primary text-white text-sm px-2 py-1 rounded">От {price}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        
        <div className="grid grid-cols-3 gap-2 mb-6">
          <div className="text-center">
            <p className="text-gray-500 text-xs">Мощность</p>
            <p className="font-semibold">{specs.power}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-500 text-xs">0-100 км/ч</p>
            <p className="font-semibold">{specs.acceleration}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-500 text-xs">Макс. скорость</p>
            <p className="font-semibold">{specs.topSpeed}</p>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="default" className="flex-1">
            Подробнее
          </Button>
          <Button variant="outline" className="flex-1">
            Конфигуратор
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
