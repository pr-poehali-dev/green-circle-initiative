
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CarFeature {
  name: string;
  value: string;
}

interface Car {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  features: string[];
}

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <Card className="overflow-hidden hover-scale transition-all duration-300">
      <div className="h-52 overflow-hidden">
        <img 
          src={car.imageUrl} 
          alt={car.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{car.name}</CardTitle>
        <CardDescription className="text-gray-600 mt-1">{car.price}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">{car.description}</p>
        <div className="flex flex-wrap gap-2">
          {car.features.map((feature, index) => (
            <Badge key={index} variant="outline" className="bg-gray-100">
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Подробнее</Button>
        <Button className="bg-red-600 hover:bg-red-700">Тест-драйв</Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
