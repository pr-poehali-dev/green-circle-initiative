
import { useState, useEffect } from "react";
import { Product } from "@/components/ProductCard";

export interface FiltersState {
  isNew: boolean;
  isLimited: boolean;
  hasDiscount: boolean;
}

export interface FilterOptions {
  activeCategory: string;
  priceRange: [number, number];
  selectedColor: string;
  filters: FiltersState;
  sortBy: string;
  searchQuery: string;
  likedProductIds: number[];
  showOnlyLiked: boolean;
}

export const useCatalogFilters = (products: Product[]) => {
  // Состояния фильтров
  const [activeCategory, setActiveCategory] = useState("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [filters, setFilters] = useState<FiltersState>({
    isNew: false,
    isLimited: false,
    hasDiscount: false
  });
  const [selectedColor, setSelectedColor] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [searchQuery, setSearchQuery] = useState("");

  // Состояния для лайков
  const [likedProductIds, setLikedProductIds] = useState<number[]>([]);
  const [showOnlyLiked, setShowOnlyLiked] = useState(false);

  // Фильтрованный список товаров
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  
  // Обновляем продукты, добавляя статус лайка
  useEffect(() => {
    const updatedProducts = products.map(product => ({
      ...product,
      isLiked: likedProductIds.includes(product.id)
    }));
    setFilteredProducts(updatedProducts);
  }, [likedProductIds, products]);

  // Применение фильтров
  useEffect(() => {
    let result = [...products.map(product => ({
      ...product,
      isLiked: likedProductIds.includes(product.id)
    }))];
    
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
    
    // Фильтр по лайкам
    if (showOnlyLiked) {
      result = result.filter(product => likedProductIds.includes(product.id));
    }
    
    setFilteredProducts(result);
  }, [activeCategory, priceRange, selectedColor, filters, sortBy, searchQuery, showOnlyLiked, likedProductIds, products]);

  // Обработчики событий для фильтров
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
    setShowOnlyLiked(false);
  };

  const handleToggleLikedFilter = () => {
    setShowOnlyLiked(prev => !prev);
  };

  return {
    // Состояния
    filteredProducts,
    activeCategory,
    priceRange,
    filters,
    selectedColor,
    sortBy,
    searchQuery,
    likedProductIds,
    showOnlyLiked,
    
    // Сеттеры
    setActiveCategory,
    setPriceRange,
    setFilters,
    setSelectedColor,
    setSortBy,
    setSearchQuery,
    setLikedProductIds,
    setShowOnlyLiked,
    
    // Обработчики
    handleFilterChange,
    handlePriceChange,
    handleColorChange,
    resetFilters,
    handleToggleLikedFilter
  };
};
