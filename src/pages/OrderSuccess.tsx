import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/layout/Header';

const OrderSuccess = () => {
  const [searchParams] = useSearchParams();
  const orderNumber = searchParams.get('order') || 'Неизвестен';

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
            <Icon name="CheckCircle" size={48} className="text-green-600" />
          </div>

          <h1 className="text-4xl md:text-5xl font-light tracking-wider mb-4">
            Заказ оформлен! 🚀
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            Спасибо за покупку! Ваш заказ успешно оплачен.
          </p>

          <Card className="p-8 mb-8 bg-primary/5 border-primary/20">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Номер заказа:</span>
                <span className="font-medium text-lg">{orderNumber}</span>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Информация о заказе отправлена на вашу почту
                </p>
              </div>
            </div>
          </Card>

          <div className="flex gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="rounded-full px-8">
                <Icon name="ArrowLeft" size={18} className="mr-2" />
                Вернуться в каталог
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                На главную
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderSuccess;
