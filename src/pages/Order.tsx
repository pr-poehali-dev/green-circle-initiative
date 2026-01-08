import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/layout/Header';

interface OrderData {
  order_number: string;
  amount: number;
  status: string;
  user_name: string;
  user_email: string;
  created_at: string;
  paid_at?: string;
  payment_url?: string;
}

const Order = () => {
  const { orderNumber } = useParams<{ orderNumber: string }>();
  const [order, setOrder] = useState<OrderData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!orderNumber) return;

    const fetchOrder = async () => {
      try {
        const response = await fetch(
          `https://devfunctions.poehali.dev/b33447f0-0000-403d-9a95-67b9ad70df6a?order_number=${orderNumber}`
        );

        if (!response.ok) {
          throw new Error('Заказ не найден');
        }

        const data = await response.json();
        setOrder(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ошибка загрузки');
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();

    // Проверяем статус каждые 3 секунды, если заказ в ожидании оплаты
    const interval = setInterval(() => {
      if (order?.status === 'pending') {
        fetchOrder();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [orderNumber, order?.status]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-24 text-center">
          <Icon name="Loader2" size={48} className="animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Загрузка информации о заказе...</p>
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-24 max-w-2xl">
          <Card className="p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
              <Icon name="XCircle" size={32} className="text-destructive" />
            </div>
            <h1 className="text-2xl font-light mb-4">Заказ не найден</h1>
            <p className="text-muted-foreground mb-8">
              {error || 'Проверьте правильность номера заказа'}
            </p>
            <Link to="/">
              <Button>
                <Icon name="Home" size={18} className="mr-2" />
                На главную
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  const statusConfig = {
    pending: {
      icon: 'Clock',
      color: 'text-yellow-600',
      bg: 'bg-yellow-600/10',
      title: 'Ожидает оплаты',
      description: 'Заказ создан, ожидается оплата',
    },
    paid: {
      icon: 'CheckCircle',
      color: 'text-green-600',
      bg: 'bg-green-600/10',
      title: 'Оплачен',
      description: 'Платеж успешно выполнен',
    },
    canceled: {
      icon: 'XCircle',
      color: 'text-red-600',
      bg: 'bg-red-600/10',
      title: 'Отменен',
      description: 'Заказ был отменен',
    },
  };

  const status = statusConfig[order.status as keyof typeof statusConfig] || statusConfig.pending;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Назад
            </Button>
          </Link>
        </div>

        <div className="grid gap-6">
          <Card className="p-8">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h1 className="text-3xl font-light mb-2">Заказ {order.order_number}</h1>
                <p className="text-sm text-muted-foreground">
                  Создан {new Date(order.created_at).toLocaleString('ru-RU')}
                </p>
              </div>
              <div className={`${status.bg} px-4 py-2 rounded-full flex items-center gap-2`}>
                <Icon name={status.icon} size={20} className={status.color} />
                <span className={`text-sm font-medium ${status.color}`}>
                  {status.title}
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Покупатель</p>
                  <p className="font-medium">{order.user_name}</p>
                  <p className="text-sm text-muted-foreground">{order.user_email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Сумма заказа</p>
                  <p className="text-2xl font-light">{order.amount.toFixed(2)} ₽</p>
                </div>
              </div>

              {order.paid_at && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Дата оплаты</p>
                  <p className="font-medium">
                    {new Date(order.paid_at).toLocaleString('ru-RU')}
                  </p>
                </div>
              )}

              <div className={`p-6 rounded-lg ${status.bg}`}>
                <div className="flex items-start gap-4">
                  <Icon name={status.icon} size={24} className={status.color} />
                  <div>
                    <p className={`font-medium mb-1 ${status.color}`}>{status.title}</p>
                    <p className="text-sm text-muted-foreground">{status.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {order.status === 'pending' && order.payment_url && (
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium mb-1">Завершите оплату</p>
                  <p className="text-sm text-muted-foreground">
                    Вернитесь на страницу оплаты для завершения транзакции
                  </p>
                </div>
                <a href={order.payment_url} target="_blank" rel="noopener noreferrer">
                  <Button>
                    Оплатить
                    <Icon name="ExternalLink" size={16} className="ml-2" />
                  </Button>
                </a>
              </div>
            </Card>
          )}

          {order.status === 'paid' && (
            <Card className="p-6 bg-green-600/5 border-green-600/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center">
                    <Icon name="CheckCircle" size={24} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Спасибо за покупку!</p>
                    <p className="text-sm text-muted-foreground">
                      Ваш заказ успешно оплачен
                    </p>
                  </div>
                </div>
                <Link to="/catalog">
                  <Button>
                    Продолжить покупки
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;