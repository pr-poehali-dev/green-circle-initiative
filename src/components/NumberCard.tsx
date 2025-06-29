import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface NumberCardProps {
  number: string;
  operator: "МТС" | "Билайн" | "Мегафон" | "Теле2";
  price: number;
  category: "VIP" | "Золотой" | "Красивый";
  isNew?: boolean;
}

const NumberCard = ({
  number,
  operator,
  price,
  category,
  isNew = false,
}: NumberCardProps) => {
  const operatorColors = {
    МТС: "bg-red-500",
    Билайн: "bg-yellow-500",
    Мегафон: "bg-green-500",
    Теле2: "bg-black",
  };

  const categoryColors = {
    VIP: "bg-purple-100 text-purple-800",
    Золотой: "bg-yellow-100 text-yellow-800",
    Красивый: "bg-blue-100 text-blue-800",
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
      {isNew && (
        <Badge className="absolute top-3 right-3 bg-green-500 text-white">
          Новинка
        </Badge>
      )}

      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div
            className={`w-3 h-3 rounded-full ${operatorColors[operator]}`}
          ></div>
          <Badge variant="secondary" className={categoryColors[category]}>
            {category}
          </Badge>
        </div>

        <div className="text-center mb-6">
          <p className="text-2xl font-bold font-mono text-gray-900 mb-1">
            +7 {number}
          </p>
          <p className="text-sm text-gray-500">{operator}</p>
        </div>

        <div className="text-center mb-6">
          <p className="text-3xl font-bold text-primary mb-1">
            {price.toLocaleString()} ₽
          </p>
          <p className="text-sm text-gray-500">единоразово</p>
        </div>

        <Button className="w-full" size="lg">
          <Icon name="ShoppingCart" size={16} className="mr-2" />В корзину
        </Button>
      </CardContent>
    </Card>
  );
};

export default NumberCard;
