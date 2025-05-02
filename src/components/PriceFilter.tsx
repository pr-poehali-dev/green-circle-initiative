
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

interface PriceFilterProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
}

const PriceFilter = ({ minPrice, maxPrice, onPriceChange }: PriceFilterProps) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);
  
  const handlePriceChange = (value: number[]) => {
    const [min, max] = value as [number, number];
    setPriceRange([min, max]);
  };
  
  const applyPriceFilter = () => {
    onPriceChange(priceRange[0], priceRange[1]);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="font-medium mb-4 flex items-center gap-2">
        <Icon name="Banknote" size={18} />
        Цена
      </h3>
      
      <div className="px-2">
        <Slider
          defaultValue={[minPrice, maxPrice]}
          min={0}
          max={50000}
          step={500}
          value={[priceRange[0], priceRange[1]]}
          onValueChange={handlePriceChange}
          className="mb-6"
        />
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm">
          <span className="text-muted-foreground">От:</span> {priceRange[0].toLocaleString()} ₽
        </div>
        <div className="text-sm">
          <span className="text-muted-foreground">До:</span> {priceRange[1].toLocaleString()} ₽
        </div>
      </div>
      
      <Button 
        variant="outline" 
        size="sm" 
        className="w-full" 
        onClick={applyPriceFilter}
      >
        Применить
      </Button>
    </div>
  );
};

export default PriceFilter;
