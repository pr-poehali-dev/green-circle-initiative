import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export type Product = {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  isNew?: boolean;
  isLimited?: boolean;
};

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, title, price, oldPrice, imageUrl, isNew, isLimited } = product;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <Link to={`/product/${id}`}>
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-64 object-cover"
          />
        </Link>
        
        {isNew && (
          <span className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
            Новинка
          </span>
        )}
        
        {isLimited && (
          <span className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
            Ограниченная серия
          </span>
        )}
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 bg-white/80 hover:bg-white" 
          aria-label="Добавить в избранное"
        >
          <Icon name="Heart" size={18} />
        </Button>
      </div>
      
      <div className="p-4">
        <Link to={`/product/${id}`} className="hover:text-primary">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        </Link>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            {oldPrice && (
              <span className="text-sm text-gray-500 line-through">{oldPrice.toLocaleString()} ₽</span>
            )}
            <span className="font-bold text-lg">{price.toLocaleString()} ₽</span>
          </div>
          
          <Button size="sm" className="flex items-center gap-1">
            <Icon name="ShoppingCart" size={16} />
            <span>В корзину</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;