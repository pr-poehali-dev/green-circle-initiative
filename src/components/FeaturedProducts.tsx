
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
      color: "bg-gradient-to-br from-pink-400 to-pink-600",
      icon: "Castle",
      isNew: true
    },
    {
      id: 2,
      title: "Спорткар Техник",
      price: 8990,
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      icon: "Car"
    },
    {
      id: 3,
      title: "Космическая станция",
      price: 19990,
      oldPrice: 22990,
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
      icon: "Rocket",
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
