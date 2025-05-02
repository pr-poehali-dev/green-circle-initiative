
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";
import PriceFilter from "./PriceFilter";

interface FilterSidebarProps {
  onPriceChange: (min: number, max: number) => void;
  onFilterChange: (filterId: string, value: boolean) => void;
  filters: {
    isNew: boolean;
    isLimited: boolean;
    hasDiscount: boolean;
  };
}

const FilterSidebar = ({ onPriceChange, onFilterChange, filters }: FilterSidebarProps) => {
  return (
    <div className="space-y-6">
      <PriceFilter 
        minPrice={0} 
        maxPrice={50000} 
        onPriceChange={onPriceChange} 
      />
      
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="font-medium mb-4 flex items-center gap-2">
          <Icon name="Tags" size={18} />
          Параметры
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="isNew" 
              checked={filters.isNew}
              onCheckedChange={(checked) => onFilterChange('isNew', !!checked)} 
            />
            <label htmlFor="isNew" className="text-sm font-medium leading-none cursor-pointer">
              Новинки
            </label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="isLimited" 
              checked={filters.isLimited}
              onCheckedChange={(checked) => onFilterChange('isLimited', !!checked)} 
            />
            <label htmlFor="isLimited" className="text-sm font-medium leading-none cursor-pointer">
              Ограниченная серия
            </label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="hasDiscount" 
              checked={filters.hasDiscount}
              onCheckedChange={(checked) => onFilterChange('hasDiscount', !!checked)} 
            />
            <label htmlFor="hasDiscount" className="text-sm font-medium leading-none cursor-pointer">
              Со скидкой
            </label>
          </div>
        </div>
      </div>
      
      <Button variant="outline" className="w-full" size="sm">
        Сбросить фильтры
      </Button>
    </div>
  );
};

export default FilterSidebar;
