import React, { useState, useEffect, useMemo } from 'react';
import { FilterOptions } from '@/types/car';
import { getBrands, getFuelTypes, getTransmissionTypes } from '@/data/cars';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

// Импорт компонентов-фильтров
import FilterBadge from './filters/FilterBadge';
import FilterCheckboxGroup from './filters/FilterCheckboxGroup';
import RangeSlider from './filters/RangeSlider';
import FilterAccordionItem from './filters/FilterAccordionItem';

interface CarFilterProps {
  onFilterChange: (filters: FilterOptions) => void;
  initialFilters?: FilterOptions;
  className?: string;
}

const CarFilter: React.FC<CarFilterProps> = ({ 
  onFilterChange, 
  initialFilters = {}, 
  className 
}) => {
  // Кешируем данные
  const brands = useMemo(() => getBrands(), []);
  const transmissionTypes = useMemo(() => getTransmissionTypes(), []);
  const fuelTypes = useMemo(() => getFuelTypes(), []);
  const isMobile = useIsMobile();
  
  // Получаем текущий год для установки максимального значения
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  
  const [filters, setFilters] = useState<FilterOptions>(initialFilters);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    initialFilters.minPrice as number || 500, 
    initialFilters.maxPrice as number || 5000
  ]);
  const [yearRange, setYearRange] = useState<[number, number]>([
    initialFilters.minYear as number || 2010, 
    initialFilters.maxYear as number || currentYear + 1
  ]);
  const [activeFiltersCount, setActiveFiltersCount] = useState<number>(0);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(["brand", "price"]);

  // Настраиваемые опции автомобилей
  const carFeatures = useMemo(() => [
    'Кондиционер', 
    'Навигация', 
    'Парктроник', 
    'Кожаный салон', 
    'Подогрев сидений',
    'Круиз-контроль',
    'Bluetooth',
    'Камера заднего вида',
    'Люк',
    'Электропривод сидений'
  ], []);

  // Подсчет количества активных фильтров
  useEffect(() => {
    let count = 0;
    
    // Считаем каждый фильтр отдельно
    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        if (value.length > 0) count++;
      } else if (value !== undefined && value !== '') {
        // Проверяем пары минимальных и максимальных значений
        if (key === 'minPrice' && filters.maxPrice !== undefined) {
          // Считаем только один раз для пары
        } else if (key === 'maxPrice' && filters.minPrice !== undefined) {
          count++;
        } else if (key === 'minYear' && filters.maxYear !== undefined) {
          // Считаем только один раз для пары
        } else if (key === 'maxYear' && filters.minYear !== undefined) {
          count++;
        } else {
          count++;
        }
      }
    });
    
    setActiveFiltersCount(count);
  }, [filters]);
  
  // Обработчик изменения фильтров
  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    const newFilters = { ...filters, [key]: value };
    
    // Если значение пусто, удаляем фильтр
    if (value === '' || value === undefined) {
      delete newFilters[key];
    }
    
    setFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  // Обработчик изменения диапазона цен
  const handlePriceRangeChange = (value: [number, number]) => {
    setPriceRange(value);
    handleFilterChange('minPrice', value[0]);
    handleFilterChange('maxPrice', value[1]);
  };
  
  // Обработчик изменения диапазона годов
  const handleYearRangeChange = (value: [number, number]) => {
    setYearRange(value);
    handleFilterChange('minYear', value[0]);
    handleFilterChange('maxYear', value[1]);
  };
  
  // Обработчик множественного выбора
  const handleMultiSelectChange = (key: keyof FilterOptions, value: string, isChecked: boolean) => {
    const currentValues = filters[key] as string[] || [];
    
    let newValues: string[];
    if (isChecked) {
      newValues = [...currentValues, value];
    } else {
      newValues = currentValues.filter(v => v !== value);
    }
    
    if (newValues.length === 0) {
      const newFilters = { ...filters };
      delete newFilters[key];
      setFilters(newFilters);
      onFilterChange(newFilters);
    } else {
      handleFilterChange(key, newValues);
    }
  };
  
  // Сброс всех фильтров
  const resetFilters = () => {
    setFilters({});
    setPriceRange([500, 5000]);
    setYearRange([2010, currentYear + 1]);
    onFilterChange({});
  };

  // Обработчик аккордеона
  const handleAccordionChange = (value: string[]) => {
    setExpandedSections(value);
  };

  // Применение фильтров (для мобильного вида)
  const applyFilters = () => {
    onFilterChange(filters);
    setIsFilterOpen(false);
  };
  
  // Содержимое фильтра
  const renderFilterContent = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Фильтры</h3>
        <FilterBadge count={activeFiltersCount} />
      </div>
      
      {activeFiltersCount > 0 && (
        <div className="pt-1 pb-3">
          <Button 
            variant="outline" 
            onClick={resetFilters} 
            className="w-full flex items-center justify-center gap-2 border-dashed"
            size="sm"
          >
            <Icon name="RefreshCw" className="h-3.5 w-3.5" />
            Сбросить все фильтры
          </Button>
        </div>
      )}
      
      <Accordion 
        type="multiple" 
        value={expandedSections}
        onValueChange={handleAccordionChange}
        className="space-y-2"
      >
        <FilterAccordionItem 
          value="brand" 
          title="Марка" 
          icon="CarFront"
          badgeValue={filters.brand ? filters.brand : null}
        >
          <FilterCheckboxGroup
            items={brands}
            selectedItems={[(filters.brand as string) || '']}
            onChange={(value, checked) => {
              handleFilterChange('brand', checked ? value : '');
            }}
            itemPrefix="brand"
          />
        </FilterAccordionItem>
        
        <FilterAccordionItem 
          value="transmission" 
          title="Коробка передач" 
          icon="Cog"
          badgeValue={(filters.transmissionTypes && (filters.transmissionTypes as string[]).length > 0) 
            ? (filters.transmissionTypes as string[]).length 
            : null}
        >
          <FilterCheckboxGroup
            items={transmissionTypes}
            selectedItems={(filters.transmissionTypes as string[]) || []}
            onChange={(value, checked) => handleMultiSelectChange('transmissionTypes', value, checked)}
            itemPrefix="transmission"
          />
        </FilterAccordionItem>
        
        <FilterAccordionItem 
          value="fuel" 
          title="Тип топлива" 
          icon="Droplets"
          badgeValue={(filters.fuelTypes && (filters.fuelTypes as string[]).length > 0) 
            ? (filters.fuelTypes as string[]).length 
            : null}
        >
          <FilterCheckboxGroup
            items={fuelTypes}
            selectedItems={(filters.fuelTypes as string[]) || []}
            onChange={(value, checked) => handleMultiSelectChange('fuelTypes', value, checked)}
            itemPrefix="fuel"
          />
        </FilterAccordionItem>
        
        <FilterAccordionItem 
          value="price" 
          title="Цена (₽/день)" 
          icon="CircleDollarSign"
          badgeValue={filters.minPrice || filters.maxPrice 
            ? `${priceRange[0].toLocaleString()} — ${priceRange[1].toLocaleString()} ₽` 
            : null}
        >
          <RangeSlider
            min={500}
            max={10000}
            step={100}
            value={priceRange}
            onChange={handlePriceRangeChange}
            labelMin="От"
            labelMax="До"
          />
        </FilterAccordionItem>
        
        <FilterAccordionItem 
          value="year" 
          title="Год выпуска" 
          icon="Calendar"
          badgeValue={filters.minYear || filters.maxYear 
            ? `${yearRange[0]} — ${yearRange[1]}` 
            : null}
        >
          <RangeSlider
            min={2000}
            max={currentYear + 1}
            step={1}
            value={yearRange}
            onChange={handleYearRangeChange}
            labelMin="От"
            labelMax="До"
          />
        </FilterAccordionItem>
        
        <FilterAccordionItem 
          value="features" 
          title="Дополнительные опции" 
          icon="ListChecks"
          badgeValue={filters.features && (filters.features as string[])?.length > 0 
            ? (filters.features as string[])?.length 
            : null}
        >
          <FilterCheckboxGroup
            items={carFeatures}
            selectedItems={(filters.features as string[]) || []}
            onChange={(value, checked) => handleMultiSelectChange('features', value, checked)}
            itemPrefix="feature"
          />
        </FilterAccordionItem>
      </Accordion>
      
      {isMobile && (
        <>
          <Separator className="my-4" />
          <SheetFooter>
            <div className="grid grid-cols-2 gap-3 w-full">
              <Button 
                variant="outline" 
                onClick={resetFilters} 
                disabled={activeFiltersCount === 0}
              >
                Сбросить
              </Button>
              <SheetClose asChild>
                <Button onClick={applyFilters}>
                  Применить
                </Button>
              </SheetClose>
            </div>
          </SheetFooter>
        </>
      )}
    </div>
  );
  
  // Для мобильных устройств - выводим кнопку и фильтры в drawer
  if (isMobile) {
    return (
      <div className={cn("mb-4", className)}>
        <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <SheetTrigger asChild>
            <Button 
              variant={activeFiltersCount > 0 ? "default" : "outline"}
              className="w-full flex items-center justify-center gap-2"
              onClick={() => setIsFilterOpen(true)}
            >
              <Icon name="SlidersHorizontal" className="h-4 w-4" />
              Фильтры
              <FilterBadge count={activeFiltersCount} showText={false} />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[85vh] overflow-y-auto">
            <SheetHeader className="text-left pb-1">
              <SheetTitle>Фильтры</SheetTitle>
              <SheetDescription>
                Настройте параметры поиска автомобилей
              </SheetDescription>
            </SheetHeader>
            {renderFilterContent()}
          </SheetContent>
        </Sheet>
      </div>
    );
  }
  
  // Для desktop - обычный вид
  return (
    <div className={cn("space-y-4 p-4 bg-white rounded-lg border sticky top-4", className)}>
      {renderFilterContent()}
    </div>
  );
};

export default CarFilter;