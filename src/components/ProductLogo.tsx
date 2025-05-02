
import React from "react";
import Icon from "@/components/ui/icon";

type ProductLogoProps = {
  title: string;
  color: string;
  icon: string;
  isNew?: boolean;
  isLimited?: boolean;
};

const ProductLogo = ({ title, color, icon, isNew, isLimited }: ProductLogoProps) => {
  // Получаем первую букву названия продукта
  const initial = title.charAt(0).toUpperCase();
  
  return (
    <div className={`w-full h-64 flex flex-col items-center justify-center ${color}`}>
      <div className="relative flex items-center justify-center mb-4">
        <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md">
          <Icon name={icon} size={48} className="text-gray-800" />
        </div>
        
        {isNew && (
          <span className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full shadow-sm">
            Новинка
          </span>
        )}
        
        {isLimited && (
          <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full shadow-sm">
            Ограниченная серия
          </span>
        )}
      </div>
      
      <div className="text-5xl font-bold text-white drop-shadow-lg">{initial}</div>
      
      <div className="mt-2 text-white text-sm font-medium tracking-wider uppercase drop-shadow">
        {title}
      </div>
      
      <div className="mt-4 flex">
        {[...Array(5)].map((_, index) => (
          <div 
            key={index} 
            className={`w-4 h-4 rounded-sm mx-1 bg-white/30 border-2 border-white/50 ${index % 2 === 0 ? 'translate-y-1' : ''}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductLogo;
