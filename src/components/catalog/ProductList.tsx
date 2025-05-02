
import { Product } from "@/components/ProductCard";
import ProductCard from "@/components/ProductCard";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface ProductListProps {
  products: Product[];
  onToggleLike: (productId: number) => void;
  onResetFilters: () => void;
}

const ProductList = ({ products, onToggleLike, onResetFilters }: ProductListProps) => {
  if (products.length === 0) {
    return (
      <div className="p-12 text-center bg-white rounded-lg shadow-sm">
        <Icon name="SearchX" size={48} className="mx-auto mb-4 text-muted-foreground/70" />
        <h2 className="text-2xl font-semibold mb-2">Товары не найдены</h2>
        <p className="text-muted-foreground mb-4">
          Попробуйте изменить параметры фильтрации или поискать что-то другое.
        </p>
        <Button 
          variant="outline"
          onClick={onResetFilters}
        >
          Сбросить все фильтры
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product}
          onToggleLike={onToggleLike} 
        />
      ))}
    </div>
  );
};

export default ProductList;
