import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function HomePage() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="py-24 md:py-36 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-[#D6BCFA] mb-6 leading-tight">
                Откройте для себя мир
                <span className="text-[#9b87f5]"> удивительных напитков</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Исследуйте наши рецепты, создавайте коллекции любимых напитков и
                делитесь своими открытиями с друзьями.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/drinks">
                  <Button className="bg-white/10 backdrop-blur-md border border-[#9b87f5] hover:bg-white/20 text-white px-6 py-2 rounded-lg shadow-lg">
                    <Icon name="Wine" className="mr-2" />
                    Попробовать генератор
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-80 h-80">
                {/* Создаем круглый контейнер в виде кружки */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/40 via-[#D6BCFA]/30 to-[#9b87f5]/40 rounded-full blur-xl opacity-40"></div>
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  {/* Удаляем "ручку" кружки */}
                  <div
                    className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#9b87f5]/60 bounce-animation heartbeat-animation cursor-pointer"
                    onClick={(e) => {
                      const target = e.currentTarget;
                      target.classList.add("rotate-animation");
                      // Временно отключаем пульсацию при вращении
                      target.classList.remove("heartbeat-animation");
                      setTimeout(() => {
                        target.classList.remove("rotate-animation");
                        target.classList.add("heartbeat-animation");
                      }, 1000);
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1064&auto=format&fit=crop"
                      alt="Коллекция напитков"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#1E2434] px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#D6BCFA] mb-12">
            О нас
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#2B3144] p-4 rounded-xl border border-[#9b87f5]/20">
              <div className="w-12 h-12 bg-[#9b87f5]/20 rounded-full flex items-center justify-center mb-4">
                <Icon name="Wine" size={24} className="text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-semibold text-[#D6BCFA] mb-3">
                Генератор напитков
              </h3>
              <p className="text-[#D6BCFA]">
                Создавайте уникальные коктейли и безалкогольные напитки с
                помощью нашего умного генератора.
              </p>
            </div>

            <div className="bg-[#2B3144] p-6 rounded-xl border border-[#9b87f5]/20">
              <div className="w-12 h-12 bg-[#9b87f5]/20 rounded-full flex items-center justify-center mb-4">
                <Icon name="BookOpen" size={24} className="text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-semibold text-[#D6BCFA] mb-3">
                Рецепты
              </h3>
              <p className="text-[#D6BCFA]">
                Изучайте подробные рецепты с пошаговыми инструкциями для
                создания идеальных напитков.
              </p>
            </div>

            <div className="bg-[#2B3144] p-6 rounded-xl border border-[#9b87f5]/20">
              <div className="w-12 h-12 bg-[#9b87f5]/20 rounded-full flex items-center justify-center mb-4">
                <Icon
                  name="ShoppingCart"
                  size={24}
                  className="text-[#9b87f5]"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#D6BCFA] mb-3">
                Магазин
              </h3>
              <p className="text-[#D6BCFA]">
                Приобретайте необходимые ингредиенты и аксессуары для создания
                профессиональных коктейлей.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 md:py-36 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <h2 className="text-3xl font-bold text-[#D6BCFA] mb-6">Начнём!</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к нашему сообществу любителей вкусных напитков и
              откройте для себя новые вкусовые ощущения.
            </p>
            <Link to="/drinks">
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-3 text-lg rounded-lg">
                Начать с генератора напитков
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
