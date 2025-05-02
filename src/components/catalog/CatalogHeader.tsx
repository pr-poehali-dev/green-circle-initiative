
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import LikedCounter from "./LikedCounter";

interface CatalogHeaderProps {
  likedProductIds: number[];
  showOnlyLiked: boolean;
  searchQuery: string;
  filters: Record<string, boolean>;
  selectedColor: string | null;
  onToggleLikedFilter: () => void;
  onSortChange: (value: string) => void;
  onSearchChange: (value: string) => void;
  onPriceChange: (min: number, max: number) => void;
  onFilterChange: (filter: string, value: boolean) => void;
  onColorChange: (color: string | null) => void;
  onResetFilters: () => void;
}

const CatalogHeader = ({
  likedProductIds,
  showOnlyLiked,
  searchQuery,
  onToggleLikedFilter,
  onSortChange,
  onSearchChange,
  onResetFilters
}: CatalogHeaderProps) => {
  const [localSearch, setLocalSearch] = useState(searchQuery);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchChange(localSearch);
  };

  const handleClearSearch = () => {
    setLocalSearch("");
    onSearchChange("");
  };

  return (
    <div className="mb-6 flex flex-col gap-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Каталог товаров</h1>
        
        <div className="flex items-center gap-2">
          <LikedCounter 
            count={likedProductIds.length}
            showOnlyLiked={showOnlyLiked}
            onToggleLikedFilter={onToggleLikedFilter}
          />
          
          <Button 
            variant="outline" 
            size="sm"
            onClick={onResetFilters}
          >
            <Icon name="FilterX" size={16} className="mr-1.5" />
            Сбросить фильтры
          </Button>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        <form 
          className="flex-1 relative"
          onSubmit={handleSearchSubmit}
        >
          <Input
            type="text"
            placeholder="Поиск товаров..."
            className="w-full pr-12"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
          
          {localSearch && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-10 top-0 h-full"
              onClick={handleClearSearch}
            >
              <Icon name="X" size={16} />
            </Button>
          )}
          
          <Button
            type="submit"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full"
          >
            <Icon name="Search" size={16} />
          </Button>
        </form>
        
        <div className="w-full md:w-48">
          <Select onValueChange={onSortChange} defaultValue="default">
            <SelectTrigger>
              <SelectValue placeholder="Сортировка" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">По умолчанию</SelectItem>
              <SelectItem value="price-asc">Цена: от низкой к высокой</SelectItem>
              <SelectItem value="price-desc">Цена: от высокой к низкой</SelectItem>
              <SelectItem value="title-asc">По названию (А-Я)</SelectItem>
              <SelectItem value="title-desc">По названию (Я-А)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default CatalogHeader;
