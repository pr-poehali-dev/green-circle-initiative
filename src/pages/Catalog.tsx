import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  colors: string[];
  sizes: string[];
  category: string;
}

export default function Catalog() {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const products: Product[] = [
    {
      id: 1,
      name: 'Стильная куртка Neon',
      price: 4990,
      image: 'https://cdn.poehali.dev/projects/489d77e8-4b0d-49f7-bd2e-a9c1ad00ee9a/files/c5ae5c07-0377-4896-8cc7-1ec1234feecf.jpg',
      colors: ['#8B5CF6', '#EC4899', '#F59E0B'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      category: 'jackets'
    },
    {
      id: 2,
      name: 'Элегантное платье Aurora',
      price: 5990,
      image: 'https://cdn.poehali.dev/projects/489d77e8-4b0d-49f7-bd2e-a9c1ad00ee9a/files/fac472a3-752e-4ea4-85f6-9d3e9f3af8b7.jpg',
      colors: ['#EC4899', '#8B5CF6', '#F59E0B'],
      sizes: ['XS', 'S', 'M', 'L'],
      category: 'dresses'
    },
    {
      id: 3,
      name: 'Уличный стиль Vibe',
      price: 3990,
      image: 'https://cdn.poehali.dev/projects/489d77e8-4b0d-49f7-bd2e-a9c1ad00ee9a/files/776e2225-a116-41b4-acac-0f9cda8446a6.jpg',
      colors: ['#F59E0B', '#8B5CF6', '#EC4899'],
      sizes: ['S', 'M', 'L', 'XL'],
      category: 'streetwear'
    },
    {
      id: 4,
      name: 'Классическая рубашка',
      price: 2990,
      image: 'https://cdn.poehali.dev/projects/489d77e8-4b0d-49f7-bd2e-a9c1ad00ee9a/files/c5ae5c07-0377-4896-8cc7-1ec1234feecf.jpg',
      colors: ['#8B5CF6', '#EC4899'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'shirts'
    },
    {
      id: 5,
      name: 'Летнее платье Summer',
      price: 4490,
      image: 'https://cdn.poehali.dev/projects/489d77e8-4b0d-49f7-bd2e-a9c1ad00ee9a/files/fac472a3-752e-4ea4-85f6-9d3e9f3af8b7.jpg',
      colors: ['#F59E0B', '#EC4899', '#8B5CF6'],
      sizes: ['XS', 'S', 'M', 'L'],
      category: 'dresses'
    },
    {
      id: 6,
      name: 'Спортивная куртка Pro',
      price: 6990,
      image: 'https://cdn.poehali.dev/projects/489d77e8-4b0d-49f7-bd2e-a9c1ad00ee9a/files/776e2225-a116-41b4-acac-0f9cda8446a6.jpg',
      colors: ['#8B5CF6', '#F59E0B'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      category: 'jackets'
    }
  ];

  const availableColors = [
    { name: 'Фиолетовый', value: '#8B5CF6' },
    { name: 'Розовый', value: '#EC4899' },
    { name: 'Оранжевый', value: '#F59E0B' }
  ];

  const availableSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const categories = [
    { id: 'all', name: 'Все' },
    { id: 'dresses', name: 'Платья' },
    { id: 'jackets', name: 'Куртки' },
    { id: 'shirts', name: 'Рубашки' },
    { id: 'streetwear', name: 'Уличный стиль' }
  ];

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (selectedColors.length > 0 && !selectedColors.some(c => product.colors.includes(c))) return false;
    if (selectedSizes.length > 0 && !selectedSizes.some(s => product.sizes.includes(s))) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });

  const resetFilters = () => {
    setSelectedColors([]);
    setSelectedSizes([]);
    setPriceRange([0, 10000]);
    setSelectedCategory('all');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <motion.h1 
          className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Каталог одежды
        </motion.h1>

        <div className="grid lg:grid-cols-4 gap-8">
          <motion.aside 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-white rounded-3xl p-6 shadow-xl sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Фильтры</h2>
                <Button variant="ghost" size="sm" onClick={resetFilters}>
                  <Icon name="RotateCcw" size={16} />
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Grid3x3" size={18} className="text-primary" />
                    Категория
                  </h3>
                  <div className="space-y-2">
                    {categories.map(cat => (
                      <motion.button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full text-left px-4 py-2 rounded-xl transition-all ${
                          selectedCategory === cat.id 
                            ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                            : 'bg-muted hover:bg-muted/80'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {cat.name}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Palette" size={18} className="text-primary" />
                    Цвет
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {availableColors.map(color => (
                      <motion.button
                        key={color.value}
                        onClick={() => toggleColor(color.value)}
                        className={`w-12 h-12 rounded-full border-4 transition-all ${
                          selectedColors.includes(color.value) 
                            ? 'border-foreground scale-110' 
                            : 'border-white'
                        } shadow-lg`}
                        style={{ backgroundColor: color.value }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Ruler" size={18} className="text-primary" />
                    Размер
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {availableSizes.map(size => (
                      <motion.button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`px-4 py-2 rounded-xl font-medium transition-all ${
                          selectedSizes.includes(size)
                            ? 'bg-gradient-to-r from-primary to-secondary text-white'
                            : 'bg-muted hover:bg-muted/80'
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {size}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Icon name="DollarSign" size={18} className="text-primary" />
                    Цена
                  </h3>
                  <Slider
                    min={0}
                    max={10000}
                    step={100}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-3"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{priceRange[0]} ₽</span>
                    <span>{priceRange[1]} ₽</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Найдено товаров: <span className="font-bold text-foreground">{filteredProducts.length}</span>
              </p>
            </div>

            <AnimatePresence mode="popLayout">
              <motion.div 
                className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
                layout
              >
                {filteredProducts.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
                  >
                    <div className="relative overflow-hidden group">
                      <motion.img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-80 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <motion.div 
                        className="absolute top-4 right-4"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <button className="bg-white rounded-full p-3 shadow-lg">
                          <Icon name="Heart" size={20} className="text-secondary" />
                        </button>
                      </motion.div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button className="w-full rounded-full shadow-xl">
                          Быстрый просмотр
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        {product.colors.map((color, i) => (
                          <motion.div
                            key={i}
                            className="w-6 h-6 rounded-full border-2 border-white shadow-md"
                            style={{ backgroundColor: color }}
                            whileHover={{ scale: 1.3 }}
                          />
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.sizes.map(size => (
                          <span key={size} className="text-xs px-2 py-1 bg-muted rounded-lg">
                            {size}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                        <Button className="rounded-full">
                          <Icon name="ShoppingCart" size={18} />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <Icon name="SearchX" size={64} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-2xl font-bold mb-2">Товары не найдены</h3>
                <p className="text-muted-foreground mb-6">Попробуйте изменить фильтры</p>
                <Button onClick={resetFilters}>Сбросить фильтры</Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
