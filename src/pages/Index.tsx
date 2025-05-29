import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-6xl lg:text-7xl font-thin text-gray-900 tracking-tight">
              Apple Gift Card
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
              Подарите возможность выбора. Используйте для покупок в App Store,
              iTunes Store и Apple Store.
            </p>

            <div className="pt-8">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full text-lg font-medium"
                asChild
              >
                <Link to="/products">Купить Gift Card</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Smartphone" size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">App Store</h3>
              <p className="text-gray-600 font-light">
                Покупайте приложения, игры и подписки
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Music" size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">
                iTunes Store
              </h3>
              <p className="text-gray-600 font-light">
                Музыка, фильмы и телешоу
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Store" size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">Apple Store</h3>
              <p className="text-gray-600 font-light">
                Устройства и аксессуары Apple
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-thin text-gray-900">
              Идеальный подарок
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Доступны номиналы 1000, 2500 и 5000 рублей. Мгновенная доставка на
              email.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-medium"
                asChild
              >
                <Link to="/products">Выбрать номинал</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-4 rounded-full font-medium"
                asChild
              >
                <Link to="/instructions">Как использовать</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
