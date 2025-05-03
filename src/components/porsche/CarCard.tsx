
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CarCardProps {
  id: string;
  model: string;
  image: string;
  price: string;
  description: string;
}

/**
 * Карточка модели автомобиля для секции "Модели"
 */
const CarCard = ({ id, model, image, price, description }: CarCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={model} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{model}</h3>
          <span className="text-sm font-medium text-gray-600">{price}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center">
          <Link to={`/model/${id}`}>
            <Button variant="outline" className="text-gray-700 hover:text-gray-900">
              Подробнее
            </Button>
          </Link>
          
          <Button className="bg-[#D5001C] hover:bg-[#B0001A] text-white">
            Заказать
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
