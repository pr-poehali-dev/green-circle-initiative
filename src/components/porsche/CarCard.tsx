
import { Button } from "@/components/ui/button"; // Добавляю импорт кнопки

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
  // Весь предыдущий код остается без изменений
};

export default CarCard;
