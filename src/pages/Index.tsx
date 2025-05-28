import Icon from "@/components/ui/icon";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative pt-16 bg-slate-100">
        <div className="container mx-auto px-8 flex items-center justify-center bg-slate-100">
          {/* Content */}
          <div className="space-y-8 max-w-xl text-center">
            <div className="space-y-6">
              <h1 className="lg:text-7xl tracking-tight leading-none text-slate-800 text-center text-5xl font-500">
                iPhone 16 Pro
              </h1>
              <p className="text-2xl lg:text-3xl leading-tight text-slate-700 font-400 my-1.5">
                Титановый. Мощный. Pro.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-200 min-w-[160px]">
                Купить
              </button>
              <button className="border border-slate-800 hover:text-white hover:bg-blue-600 px-8 py-3 rounded-full text-lg font-medium transition-all duration-200 min-w-[160px] text-slate-800">
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Почему iPhone 15 Pro
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Cpu" size={28} className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-light">A17 Pro чип</h3>
              <p className="text-gray-400 font-light">
                Самый мощный чип в истории iPhone для игр консольного уровня
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Camera" size={28} className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-light">Pro камеры</h3>
              <p className="text-gray-400 font-light">
                Система камер с 5-кратным зумом для невероятных снимков
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Smartphone" size={28} className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-light">Титановый корпус</h3>
              <p className="text-gray-400 font-light">
                Самый прочный и лёгкий дизайн в истории iPhone
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light leading-tight">
              Переходи на iPhone 15 Pro
            </h2>
            <p className="text-xl text-gray-300 font-light">
              Обмени свой старый iPhone и получи скидку до 50 000 ₽
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-200">
                Купить iPhone 15 Pro
              </button>
              <button className="border border-gray-600 text-gray-300 hover:text-white hover:border-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-200">
                Сравнить модели
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-8 text-center">
          <p className="text-gray-500 text-sm font-light">
            Copyright © 2025 Apple Inc. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
