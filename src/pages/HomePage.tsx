import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function HomePage() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
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
                  <Button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-6 py-2 rounded-lg shadow-lg">
                    <Icon name="Wine" className="mr-2" />
                    Попробовать генератор
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button
                    variant="outline"
                    className="border-[#9b87f5] text-[#D6BCFA] hover:bg-[#9b87f5]/10 bg-transparent"
                  >
                    <Icon name="User" className="mr-2" />
                    Войти в аккаунт
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/20 to-[#D6BCFA]/20 rounded-full blur-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1547595628-c61a29f496f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Креативные напитки"
                  className="relative z-10 w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#1E2434] px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#D6BCFA] mb-12">
            О нас
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#2B3144] p-6 rounded-xl border border-[#9b87f5]/20">
              <div className="w-12 h-12 bg-[#9b87f5]/20 rounded-full flex items-center justify-center mb-4">
                <Icon name="Wine" size={24} className="text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-semibold text-[#D6BCFA] mb-3">
                Генератор напитков
              </h3>
              <p className="text-gray-300">
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
              <p className="text-gray-300">
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
              <p className="text-gray-300">
                Приобретайте необходимые ингредиенты и аксессуары для создания
                профессиональных коктейлей.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
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
      </section>
    </div>
  );
}
