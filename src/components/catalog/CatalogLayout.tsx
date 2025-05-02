
import React from "react";
import FilterSidebar from "@/components/FilterSidebar";
import CategoryFilter from "@/components/CategoryFilter";
import { FiltersState } from "@/hooks/useCatalogFilters";

interface CatalogLayoutProps {
  children: React.ReactNode;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  filters: FiltersState;
  selectedColor: string;
  onPriceChange: (min: number, max: number) => void;
  onFilterChange: (filterId: string, value: boolean) => void;
  onColorChange: (color: string) => void;
  onResetFilters: () => void;
}

const CatalogLayout: React.FC<CatalogLayoutProps> = ({
  children,
  activeCategory,
  setActiveCategory,
  filters,
  selectedColor,
  onPriceChange,
  onFilterChange,
  onColorChange,
  onResetFilters,
}) => {
  return (
    <>
      <CategoryFilter 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="hidden lg:block lg:w-1/4">
          <FilterSidebar 
            onPriceChange={onPriceChange} 
            onFilterChange={onFilterChange}
            onColorChange={onColorChange}
            filters={filters}
            selectedColor={selectedColor}
            onResetFilters={onResetFilters}
          />
        </div>
        
        <div className="lg:w-3/4">
          {children}
        </div>
      </div>
    </>
  );
};

export default CatalogLayout;
