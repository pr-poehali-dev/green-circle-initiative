import { Smartphone, ShoppingBag, CreditCard } from "lucide-react";

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="apple-container">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Встречайте универсальную подарочную карту Apple
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-apple-gray rounded-full flex items-center justify-center mb-6">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Покупайте продукты Apple</h3>
            <p className="text-apple-darkgray">
              Используйте для приобретения iPhone, Mac, Apple Watch и других устройств в Apple Store.
            </p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-apple-gray rounded-full flex items-center justify-center mb-6">
              <Smartphone className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Получайте контент и сервисы</h3>
            <p className="text-apple-darkgray">
              Приобретайте приложения, игры, музыку, фильмы и подписки на Apple сервисы.
            </p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-apple-gray rounded-full flex items-center justify-center mb-6">
              <CreditCard className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Мгновенная активация</h3>
            <p className="text-apple-darkgray">
              Получите код активации сразу после оплаты на email и начните использовать немедленно.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;