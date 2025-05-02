
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CatalogHeader from "@/components/catalog/CatalogHeader";
import CatalogLayout from "@/components/catalog/CatalogLayout";
import ProductList from "@/components/catalog/ProductList";
import { useCatalogData } from "@/hooks/useCatalogData";
import { useCatalogFilters } from "@/hooks/useCatalogFilters";

const Catalog = () => {
  // Получаем данные каталога и методы для работы с лайками
  const { products, likedProductIds, handleToggleLike } = useCatalogData();
  
  // Получаем состояния и методы для фильтрации
  const {
    filteredProducts,
    activeCategory,
    filters,
    selectedColor,
    sortBy,
    searchQuery,
    showOnlyLiked,
    setActiveCategory,
    setSortBy,
    setSearchQuery,
    handleFilterChange,
    handlePriceChange,
    handleColorChange,
    resetFilters,
    handleToggleLikedFilter,
  } = useCatalogFilters(products);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Заголовок, поиск и сортировка */}
          <CatalogHeader 
            likedProductIds={likedProductIds}
            showOnlyLiked={showOnlyLiked}
            searchQuery={searchQuery}
            filters={filters}
            selectedColor={selectedColor}
            onToggleLikedFilter={handleToggleLikedFilter}
            onSortChange={setSortBy}
            onSearchChange={setSearchQuery}
            onPriceChange={handlePriceChange}
            onFilterChange={handleFilterChange}
            onColorChange={handleColorChange}
            onResetFilters={resetFilters}
          />
          
          {/* Основной контент с фильтрами и списком товаров */}
          <CatalogLayout
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            filters={filters}
            selectedColor={selectedColor}
            onPriceChange={handlePriceChange}
            onFilterChange={handleFilterChange}
            onColorChange={handleColorChange}
            onResetFilters={resetFilters}
          >
            <ProductList 
              products={filteredProducts}
              onToggleLike={handleToggleLike}
              onResetFilters={resetFilters}
            />
          </CatalogLayout>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
