import React from "react";
import { Button } from "@/components/ui/button";

interface LikeButtonProps {
  isLiked: boolean;
  onClick: (e: React.MouseEvent) => void;
  size?: number;
  className?: string;
}

// Создаем отдельный компонент для кнопки лайка
const LikeButton = ({ isLiked, onClick, size = 18, className = "" }: LikeButtonProps) => {
  // Определяем классы на основе состояния лайка
  const buttonClassName = `absolute top-2 right-2 bg-white/80 hover:bg-white transition-all duration-300 ${
    isLiked ? "text-red-500 hover:text-red-600" : "text-gray-500 hover:text-gray-700"
  } ${className}`;

  // SVG для пустого сердечка
  const emptyHeart = (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );

  // SVG для заполненного сердечка
  const filledHeart = (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      stroke="none"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className={buttonClassName}
      aria-label={isLiked ? "Убрать из избранного" : "Добавить в избранное"}
      onClick={onClick}
    >
      {isLiked ? filledHeart : emptyHeart}
    </Button>
  );
};

export default LikeButton;