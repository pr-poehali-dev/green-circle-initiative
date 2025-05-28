import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative">
        <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-100">
          {/* Left Content */}
          <div className="space-y-8 max-w-xl">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl tracking-tight leading-none text-slate-800 font-500 text-left">
                iPhone 16 Pro
              </h1>
              <p className="text-2xl lg:text-3xl leading-tight text-slate-700 text-left font-400">
                Титановый. Мощный. Pro.
              </p>
              <p className="text-lg font-light leading-relaxed max-w-md text-slate-700 text-left">
                Создан из титана авиакосмического класса с чипом A17 Pro для
                невероятной производительности.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xl font-light text-slate-700 text-left">
                От <span className="text-slate-700">99 990 ₽</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-200 min-w-[160px]">
                  Купить
                </button>
                <button className="border border-blue-600 text-blue-400 hover:text-white hover:bg-blue-600 px-8 py-3 rounded-full text-lg font-medium transition-all duration-200 min-w-[160px]">
                  Подробнее
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=800&fit=crop&auto=format"
                alt="iPhone 15 Pro"
                className="w-80 lg:w-96 h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/20 rounded-3xl"></div>
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
