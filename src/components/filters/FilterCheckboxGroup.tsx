
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface FilterCheckboxGroupProps {
  items: string[];
  selectedItems: string[];
  onChange: (value: string, isChecked: boolean) => void;
  itemPrefix: string;
  gridCols?: 1 | 2;
}

const FilterCheckboxGroup: React.FC<FilterCheckboxGroupProps> = ({ 
  items, 
  selectedItems, 
  onChange, 
  itemPrefix,
  gridCols = 2
}) => {
  return (
    <div className={`grid grid-cols-1 gap-2 ${gridCols === 2 ? 'sm:grid-cols-2' : ''}`}>
      {items.map((item) => (
        <div key={item} className="flex items-center space-x-2">
          <Checkbox 
            id={`${itemPrefix}-${item}`}
            checked={selectedItems.includes(item)}
            onCheckedChange={(checked) => 
              onChange(item, checked === true)
            }
          />
          <Label htmlFor={`${itemPrefix}-${item}`}>{item}</Label>
        </div>
      ))}
    </div>
  );
};

export default FilterCheckboxGroup;
