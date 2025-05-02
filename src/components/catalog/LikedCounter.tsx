import React from 'react';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';

interface LikedCounterProps {
  count: number;
  showOnlyLiked: boolean;
  toggleShowOnlyLiked: () => void;
}

const LikedCounter = ({ count, showOnlyLiked, toggleShowOnlyLiked }: LikedCounterProps) => {
  if (count === 0) {
    return null;
  }

  return (
    <button
      onClick={toggleShowOnlyLiked}
      className={cn(
        "flex items-center gap-1.5 py-1.5 px-3 rounded-full transition-all duration-300",
        showOnlyLiked 
          ? "bg-red-50 text-red-500 hover:bg-red-100" 
          : "bg-gray-100 hover:bg-gray-200"
      )}
      title={showOnlyLiked ? "Показать все товары" : "Показать только избранное"}
    >
      <Icon 
        name="HeartFilled" 
        size={16} 
        className={cn(
          "transition-transform", 
          showOnlyLiked ? "text-red-500 scale-110" : "text-gray-500"
        )}
      />
      <Badge 
        variant={showOnlyLiked ? "destructive" : "secondary"} 
        className="transition-all duration-300"
      >
        {count}
      </Badge>
    </button>
  );
};

export default LikedCounter;