
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import ProductLogo from "./ProductLogo";
import LikeButton from "./LikeButton";

export type Product = {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  color: string;
  icon: string;
  isNew?: boolean;
  isLimited?: boolean;
  productColor?: string;
  isLiked?: boolean;
};

interface ProductCardProps {
  product: Product;
  onToggleLike?: (id: number) => void;
}

const ProductCard = ({ product, onToggleLike }: ProductCardProps) => {
  const { id, title, price, oldPrice, color, icon, isNew, isLimited, productColor, isLiked } = product;
  const [isHovered, setIsHovered] = useState(false);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleLike) {
      onToggleLike(id);
    }
  };

  // Для отладки
  console.log(`Рендер ProductCard: "${title}" (ID: ${id}), isLiked = ${Boolean(isLiked)}`);

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Link to={`/product/${id}`}>
          <ProductLogo 
            title={title} 
            color={color} 
            icon={icon}
            isNew={isNew}
            isLimited={isLimited}
          />
        </Link>
        
        {/* Новый компонент для кнопки лайка */}
        <LikeButton 
          isLiked={Boolean(isLiked)} 
          onClick={handleLikeClick}
          className={isHovered || isLiked ? "opacity-100 scale-100" : "lg:opacity-70 lg:scale-95"}
        />
      </div>
      
      <div className="p-4">
        <Link to={`/product/${id}`} className="hover:text-primary">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        </Link>
        
        {productColor && (
          <div className="flex items-center mt-2 mb-3">
            <span className="text-sm text-muted-foreground mr-2">Цвет:</span>
            <div 
              className="w-5 h-5 rounded-full border border-gray-200" 
              style={{ backgroundColor: productColor }} 
              title={productColor}
            />
          </div>
        )}
        
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