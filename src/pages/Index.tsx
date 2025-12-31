import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/layout/Header';
import PhotoUpload from '@/components/PhotoUpload';
import PhotoGallery from '@/components/PhotoGallery';
import { PaymentButton } from '@/components/extensions/yookassa/PaymentButton';
import { useState, useEffect } from 'react';

const Index = () => {
  const [spaceFact, setSpaceFact] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://devfunctions.poehali.dev/8e267dd8-c239-4593-b4e9-e50e3ff1ed72')
      .then((res) => res.json())
      .then((data) => {
        setSpaceFact(data.spaceFact);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const categories: { name: string; icon: string }[] = [
    { name: 'Электроника', icon: 'Laptop' },
    { name: 'Одежда', icon: 'Shirt' },
    { name: 'Дом', icon: 'Home' },
    { name: 'Спорт', icon: 'Dumbbell' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-light tracking-wider mb-6">
            КОСМО-МАГАЗИН 🚀
          </h1>
          <p className="text-xl text-muted-foreground mb-8 font-light tracking-wide">
            Твой путь к звездам начинается здесь
          </p>
          {!loading && spaceFact && (
            <div className="mb-8 max-w-2xl mx-auto">
              <Card className="p-6 bg-primary/5 border-primary/20">
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                  <Icon name="Sparkles" size={16} />
                  <span>{spaceFact}</span>
                </p>
              </Card>
            </div>
          )}
          <div className="flex gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="rounded-full px-8">
                Смотреть каталог
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </Link>
            <PaymentButton
              apiUrl="https://devfunctions.poehali.dev/1fdc1d04-c2f8-4b39-a420-1a988f64b089"
              amount={10}
              userEmail="test@example.com"
              userName="Тестовый пользователь"
              description="Тестовый платеж"
              returnUrl={window.location.origin}
              buttonText="Тест оплаты 10₽"
              className="rounded-full px-8"
              onError={(error) => {
                alert(`Ошибка: ${error.message}`);
              }}
            />
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <h2 className="text-3xl font-light tracking-wider mb-12 text-center">
          Категории
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} to="/catalog">
              <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon name={category.icon} size={28} />
                  </div>
                  <span className="text-sm font-light tracking-wide">
                    {category.name}
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-light mb-2">Быстрая доставка</h3>
              <p className="text-sm text-muted-foreground">По всей России</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-light mb-2">Гарантия качества</h3>
              <p className="text-sm text-muted-foreground">На все товары</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="RotateCcw" size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-light mb-2">Легкий возврат</h3>
              <p className="text-sm text-muted-foreground">14 дней на возврат</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <h2 className="text-3xl font-light tracking-wider mb-12 text-center">
          Галерея фотографий
        </h2>
        <div className="mb-12 max-w-md mx-auto">
          <PhotoUpload />
        </div>
        <PhotoGallery />
      </section>
    </div>
  );
};

export default Index;