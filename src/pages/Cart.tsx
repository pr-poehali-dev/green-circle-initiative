import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/layout/Header';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import { PaymentButton } from '@/components/extensions/robokassa/PaymentButton';
import func2url from '../../backend/func2url.json';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-24 text-center">
          <Icon name="ShoppingCart" size={64} className="mx-auto mb-6 text-muted-foreground" />
          <h2 className="text-2xl font-light mb-4">Корзина пуста</h2>
          <Link to="/catalog">
            <Button size="lg" className="rounded-full">
              Перейти в каталог
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-light tracking-wider">Корзина</h1>
          <Button variant="ghost" onClick={clearCart}>
            <Icon name="Trash2" size={16} className="mr-2" />
            Очистить
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="p-6">
                <div className="flex gap-6">
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-light text-lg">{item.name}</h3>
                        <p className="text-muted-foreground">{item.price.toLocaleString('ru-RU')} ₽</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Icon name="X" size={18} />
                      </Button>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Icon name="Minus" size={14} />
                      </Button>
                      <span className="w-12 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Icon name="Plus" size={14} />
                      </Button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-xl font-light">
                      {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="text-xl font-light mb-6">Итого</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Товары ({items.length})</span>
                  <span>{total.toLocaleString('ru-RU')} ₽</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Доставка</span>
                  <span>Бесплатно</span>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-xl font-light">
                  <span>Итого</span>
                  <span>{total.toLocaleString('ru-RU')} ₽</span>
                </div>
              </div>

              <PaymentButton
                apiUrl={func2url['robokassa-robokassa']}
                amount={total}
                userName="Покупатель"
                userEmail="customer@example.com"
                userPhone="+79991234567"
                cartItems={items.map(item => ({
                  id: item.id.toString(),
                  name: item.name,
                  price: item.price,
                  quantity: item.quantity
                }))}
                isTest={true}
                onSuccess={(orderNumber) => {
                  clearCart();
                  alert(`Заказ ${orderNumber} успешно оформлен!`);
                }}
                onError={(error) => {
                  alert(`Ошибка: ${error.message}`);
                }}
                buttonText="Оформить заказ"
                className="w-full rounded-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;