
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import ProductCard, { Product } from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import FilterSidebar from "@/components/FilterSidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [filters, setFilters] = useState({
    isNew: false,
    isLimited: false,
    hasDiscount: false
  });
  const [selectedColor, setSelectedColor] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [searchQuery, setSearchQuery] = useState("");

  // Данные каталога
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      title: "Замок принцессы",
      price: 12990,
      oldPrice: 15990,
      color: "bg-gradient-to-br from-pink-400 to-pink-600",
      icon: "Castle",
      isNew: true,
      productColor: "#ef4444" // красный
    },
    {
      id: 2,
      title: "Спорткар Техник",
      price: 8990,
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      icon: "Car",
      productColor: "#3b82f6" // синий
    },
    {
      id: 3,
      title: "Космическая станция",
      price: 19990,
      oldPrice: 22990,
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
      icon: "Rocket",
      isLimited: true,
      productColor: "#1c1917" // черный
    },
    {
      id: 4,
      title: "Городская площадь",
      price: 15990,
      color: "bg-gradient-to-br from-green-400 to-green-600",
      icon: "Building2",
      productColor: "#22c55e" // зеленый
    },
    {
      id: 5,
      title: "Подводный мир",
      price: 7990,
      oldPrice: 9990,
      color: "bg-gradient-to-br from-blue-300 to-blue-500",
      icon: "Ship",
      productColor: "#3b82f6" // синий
    },
    {
      id: 6,
      title: "Динозавры",
      price: 6990,
      color: "bg-gradient-to-br from-orange-400 to-orange-600",
      icon: "Footprints",
      productColor: "#eab308" // желтый
    },
    {
      id: 7,
      title: "Средневековый замок",
      price: 17990,
      color: "bg-gradient-to-br from-slate-500 to-slate-700",
      icon: "Castle",
      isLimited: true,
      productColor: "#71717a" // серый
    },
    {
      id: 8,
      title: "Гоночный болид",
      price: 9990,
      oldPrice: 12990,
      color: "bg-gradient-to-br from-red-500 to-red-700",
      icon: "Car",
      productColor: "#ef4444" // красный
    },
    {
      id: 9,
      title: "Джунгли",
      price: 5990,
      color: "bg-gradient-to-br from-green-500 to-green-700",
      icon: "Leaf",
      isNew: true,
      productColor: "#22c55e" // зеленый
    }
  ]);

  // Фильтрованный список товаров
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  // Применение фильтров
  useEffect(() => {
    let result = [...products];
    
    // Фильтр по категории
    if (activeCategory !== "all") {
      const categoryMapping: { [key: string]: string } = {
        city: "Building2",
        technic: "Car",
        castle: "Castle",
        space: "Rocket",
        nature: "Leaf"
      };
      
      result = result.filter(product => product.icon === categoryMapping[activeCategory]);
    }
    
    // Фильтр по цене
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Фильтр по цвету
    if (selectedColor !== "all") {
      const colorMapping: { [key: string]: string } = {
        red: "#ef4444",
        blue: "#3b82f6",
        green: "#22c55e",
        yellow: "#eab308",
        black: "#1c1917",
        white: "#f9fafb",
        gray: "#71717a"
      };
      
      result = result.filter(product => product.productColor === colorMapping[selectedColor]);
    }
    
    // Фильтр по другим параметрам
    if (filters.isNew) {
      result = result.filter(product => product.isNew);
    }
    
    if (filters.isLimited) {
      result = result.filter(product => product.isLimited);
    }
    
    if (filters.hasDiscount) {
      result = result.filter(product => product.oldPrice !== undefined);
    }
    
    // Поиск по названию
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.title.toLowerCase().includes(query)
      );
    }
    
    // Сортировка
    switch (sortBy) {
      case "price_low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price_high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "new":
        result.sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
        break;
      case "popular":
      default:
        // По умолчанию без сортировки
        break;
    }
    
    setFilteredProducts(result);
  }, [activeCategory, priceRange, selectedColor, filters, sortBy, searchQuery, products]);

  const handleFilterChange = (filterId: string, value: boolean) => {
    setFilters(prev => ({
      ...prev,
      [filterId]: value
    }));
  };

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange([min, max]);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const resetFilters = () => {
    setActiveCategory("all");
    setPriceRange([0, 50000]);
    setFilters({ isNew: false, isLimited: false, hasDiscount: false });
    setSelectedColor("all");
    setSearchQuery("");
    setSortBy("popular");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Каталог товаров</h1>
            
            <div className="flex items-center gap-3">
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
                    onPriceChange={handlePriceChange} 
                    onFilterChange={handleFilterChange}
                    onColorChange={handleColorChange}
                    filters={filters}
                    selectedColor={selectedColor}
                    onResetFilters={resetFilters}
                  />
                </SheetContent>
              </Sheet>
              
              <Select
                defaultValue="popular"
                onValueChange={value => setSortBy(value)}
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
              onChange={(e) => setSearchQuery(e.target.value)}
              prefix={<Icon name="Search" size={16} className="text-muted-foreground mr-2" />}
            />
          </div>
          
          <CategoryFilter 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="hidden lg:block lg:w-1/4">
              <FilterSidebar 
                onPriceChange={handlePriceChange} 
                onFilterChange={handleFilterChange}
                onColorChange={handleColorChange}
                filters={filters}
                selectedColor={selectedColor}
                onResetFilters={resetFilters}
              />
            </div>
            
            <div className="lg:w-3/4">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center bg-white rounded-lg shadow-sm">
                  <Icon name="SearchX" size={48} className="mx-auto mb-4 text-muted-foreground/70" />
                  <h2 className="text-2xl font-semibold mb-2">Товары не найдены</h2>
                  <p className="text-muted-foreground mb-4">
                    Попробуйте изменить параметры фильтрации или поискать что-то другое.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={resetFilters}
                  >
                    Сбросить все фильтры
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
