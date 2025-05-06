
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface FilterBadgeProps {
  count: number;
  showText?: boolean;
}

const FilterBadge: React.FC<FilterBadgeProps> = ({ count, showText = true }) => {
  if (count === 0) return null;
  
  return (
    <Badge 
      variant="secondary" 
      className="ml-2 flex items-center py-1 px-2 gap-1"
    >
      <span>{count}</span>
      {showText && <span className="hidden sm:inline">активных</span>}
    </Badge>
  );
};

export default FilterBadge;
