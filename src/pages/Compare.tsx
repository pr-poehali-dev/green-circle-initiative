import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/layout/Header';
import { useCompare } from '@/contexts/CompareContext';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';

const Compare = () => {
  const { products, removeFromCompare, clearCompare } = useCompare();
  const { addToCart } = useCart();

  if (products.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-24 text-center">
          <Icon name="Scale" size={64} className="mx-auto mb-6 text-muted-foreground" />
          <h2 className="text-2xl font-light mb-4">Нет товаров для сравнения</h2>
          <p className="text-muted-foreground mb-8">Добавьте товары из каталога</p>
          <Link to="/catalog">
            <Button size="lg" className="rounded-full">
              Перейти в каталог
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const allSpecs = Array.from(
    new Set(products.flatMap((p) => Object.keys(p.specs)))
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-light tracking-wider">Сравнение товаров</h1>
          <Button variant="ghost" onClick={clearCompare}>
            <Icon name="Trash2" size={16} className="mr-2" />
            Очистить все
          </Button>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-max">
            <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${products.length}, 280px)` }}>
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <div className="relative">
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm"
                      onClick={() => removeFromCompare(product.id)}
                    >
                      <Icon name="X" size={18} />
                    </Button>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-light mb-2">{product.name}</h3>
                    <p className="text-2xl font-light mb-4">
                      {product.price.toLocaleString('ru-RU')} ₽
                    </p>

                    <div className="space-y-3 mb-4">
                      {allSpecs.map((spec) => (
                        <div key={spec} className="border-b pb-2">
                          <p className="text-xs text-muted-foreground mb-1">{spec}</p>
                          <p className="text-sm">{product.specs[spec] || '—'}</p>
                        </div>
                      ))}
                    </div>

                    <Button
                      className="w-full"
                      onClick={() =>
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                        })
                      }
                    >
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {products.length < 4 && (
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Можно добавить до {4 - products.length} товаров
            </p>
            <Link to="/catalog">
              <Button variant="outline" className="rounded-full">
                Добавить ещё
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Compare;
