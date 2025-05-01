import { useState } from 'react';
import ProductCard, { Product } from './ProductCard';
import { Button } from "@/components/ui/button";

const FeaturedProducts = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      title: "Замок принцессы",
      price: 12990,
      oldPrice: 15990,
      imageUrl: "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isNew: true
    },
    {
      id: 2,
      title: "Спорткар Техник",
      price: 8990,
      imageUrl: "https://images.unsplash.com/photo-1516641051054-9df6a1aad654?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Космическая станция",
      price: 19990,
      oldPrice: 22990,
      imageUrl: "https://images.unsplash.com/photo-1518331483807-f6adb0e1ad23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isLimited: true
    }
  ]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Популярные наборы</h2>
          <Button variant="outline">Смотреть все</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;