import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/layout/Header';
import { useCart } from '@/contexts/CartContext';
import { useCompare, Product } from '@/contexts/CompareContext';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const { addToCart } = useCart();
  const { addToCompare, isInCompare, removeFromCompare } = useCompare();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products: Product[] = [
    {
      id: '1',
      name: 'Беспроводные наушники Pro',
      price: 12990,
      image: 'https://cdn.poehali.dev/projects/489d77e8-4b0d-49f7-bd2e-a9c1ad00ee9a/files/5f718f67-1ca6-4a5c-94e8-5363b1739518.jpg',
      specs: { 'Тип': 'Накладные', 'Время работы': '30 часов', 'Bluetooth': '5.2', 'Шумоподавление': 'ANC' }
    },
    {
      id: '2',
      name: 'Смарт-часы Elite',
      price: 24990,
      image: 'https://cdn.poehali.dev/projects/489d77e8-4b0d-49f7-bd2e-a9c1ad00ee9a/files/28155c69-1733-4d1b-a9c5-7541060491a5.jpg',
      specs: { 'Экран': 'AMOLED 1.4"', 'Время работы': '7 дней', 'Защита': 'IP68', 'GPS': 'Да' }
    },
    {
      id: '3',
      name: 'Ноутбук Ultra',
      price: 89990,
      image: 'https://cdn.poehali.dev/projects/489d77e8-4b0d-49f7-bd2e-a9c1ad00ee9a/files/86723812-896b-4925-a541-0209836a3da7.jpg',
      specs: { 'Процессор': 'Intel i7', 'RAM': '16 ГБ', 'SSD': '512 ГБ', 'Экран': '14" Full HD' }
    },
  ];

  const categories = ['all', 'electronics', 'accessories'];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products;

  const handleToggleCompare = (product: Product) => {
    if (isInCompare(product.id)) {
      removeFromCompare(product.id);
    } else {
      addToCompare(product);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-light tracking-wider">Каталог</h1>
          <Link to="/compare">
            <Button variant="outline" size="sm">
              <Icon name="Scale" size={16} className="mr-2" />
              Сравнить
            </Button>
          </Link>
        </div>

        <div className="flex gap-4 mb-8">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(cat)}
              className="rounded-full"
            >
              {cat === 'all' ? 'Все' : cat === 'electronics' ? 'Электроника' : 'Аксессуары'}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden group">
              <div className="aspect-square overflow-hidden bg-muted">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-light mb-2">{product.name}</h3>
                <p className="text-2xl font-light mb-4">{product.price.toLocaleString('ru-RU')} ₽</p>
                <div className="flex gap-2">
                  <Button 
                    className="flex-1"
                    onClick={() => addToCart({ 
                      id: product.id, 
                      name: product.name, 
                      price: product.price, 
                      image: product.image 
                    })}
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                  <Button
                    variant={isInCompare(product.id) ? 'default' : 'outline'}
                    size="icon"
                    onClick={() => handleToggleCompare(product)}
                  >
                    <Icon name="Scale" size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
