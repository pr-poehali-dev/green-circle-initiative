
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import FilterSidebar from "@/components/FilterSidebar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface FiltersState {
  isNew: boolean;
  isLimited: boolean;
  hasDiscount: boolean;
}

interface CatalogHeaderProps {
  likedProductIds: number[];
  showOnlyLiked: boolean;
  searchQuery: string;
  filters: FiltersState;
  selectedColor: string;
  onToggleLikedFilter: () => void;
  onSortChange: (value: string) => void;
  onSearchChange: (value: string) => void;
  onPriceChange: (min: number, max: number) => void;
  onFilterChange: (filterId: string, value: boolean) => void;
  onColorChange: (color: string) => void;
  onResetFilters: () => void;
}

const CatalogHeader = ({
  likedProductIds,
  showOnlyLiked,
  searchQuery,
  filters,
  selectedColor,
  onToggleLikedFilter,
  onSortChange,
  onSearchChange,
  onPriceChange,
  onFilterChange,
  onColorChange,
  onResetFilters,
}: CatalogHeaderProps) => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <h1 className="text-3xl font-bold">Каталог товаров</h1>
        
        <div className="flex flex-wrap items-center gap-3">
          <Button 
            variant={showOnlyLiked ? "default" : "outline"} 
            size="sm" 
            onClick={onToggleLikedFilter}
            className="flex items-center gap-2"
          >
            <Icon name={showOnlyLiked ? "HeartFilled" : "Heart"} size={16} />
            <span>Избранное{likedProductIds.length > 0 && ` (${likedProductIds.length})`}</span>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="lg:hidden flex items-center gap-2">
                <Icon name="Filter" size={16} />
                Фильтры
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:max-w-sm">
              <h2 className="text-lg font-semibold mb-4">Фильтры</h2>
              <Separator className="mb-4" />
              <FilterSidebar 
                onPriceChange={onPriceChange} 
                onFilterChange={onFilterChange}
                onColorChange={onColorChange}
                filters={filters}
                selectedColor={selectedColor}
                onResetFilters={onResetFilters}
              />
            </SheetContent>
          </Sheet>
          
          <Select
            defaultValue="popular"
            onValueChange={onSortChange}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Сортировка" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Популярные</SelectItem>
              <SelectItem value="price_low">Сначала дешевые</SelectItem>
              <SelectItem value="price_high">Сначала дорогие</SelectItem>
              <SelectItem value="new">Новинки</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="mb-6">
        <Input
          placeholder="Поиск по названию"
          className="max-w-md"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          prefix={<Icon name="Search" size={16} className="text-muted-foreground mr-2" />}
        />
      </div>
    </>
  );
};

export default CatalogHeader;
