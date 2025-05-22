import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import AlcoholMetabolismChart from "@/components/AlcoholMetabolismChart";
import TransitionDialog from "@/components/TransitionDialog";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-48 md:pb-36 px-4">
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
              <div className="flex flex-col gap-4">
                <TransitionDialog
                  targetPath="/drinks"
                  buttonText="Попробовать генератор"
                  iconName="Wine"
                  buttonClassName="bg-white/10 backdrop-blur-md border border-[#9b87f5] hover:bg-white/20 text-white px-6 py-2 rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-80 h-80">
                {/* Создаем круглый контейнер в виде кружки */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/40 via-[#D6BCFA]/30 to-[#9b87f5]/40 rounded-full blur-xl opacity-40"></div>
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  {/* Создаем круглый контейнер в виде кружки с эффектом пластинки */}
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#9b87f5]/60 record-spin-animation">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#2B3144] to-[#3A3D60] p-6 rounded-xl border-2 border-[#9b87f5]/50 shadow-lg shadow-[#9b87f5]/20 hover:shadow-[#9b87f5]/30 hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] rounded-full flex items-center justify-center mb-5 shadow-md">
                <Icon name="Wine" size={26} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Генератор напитков
              </h3>
              <p className="text-gray-200">
                Создавайте уникальные коктейли и безалкогольные напитки с
                помощью нашего умного генератора.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2B3144] to-[#404C78] p-6 rounded-xl border-2 border-[#9b87f5]/50 shadow-lg shadow-[#9b87f5]/20 hover:shadow-[#9b87f5]/30 hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] rounded-full flex items-center justify-center mb-5 shadow-md">
                <Icon name="BookOpen" size={26} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Рецепты</h3>
              <p className="text-gray-200">
                Изучайте подробные рецепты с пошаговыми инструкциями для
                создания идеальных напитков.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2B3144] to-[#3D355A] p-6 rounded-xl border-2 border-[#9b87f5]/50 shadow-lg shadow-[#9b87f5]/20 hover:shadow-[#9b87f5]/30 hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] rounded-full flex items-center justify-center mb-5 shadow-md">
                <Icon name="ShoppingCart" size={26} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Магазин</h3>
              <p className="text-gray-200">
                Приобретайте необходимые ингредиенты и аксессуары для создания
                профессиональных коктейлей.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alcohol Metabolism Chart Section */}
      <section className="py-16 bg-[#1A1F2C] px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#D6BCFA] mb-8">
            Полезная информация
          </h2>
          <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Узнайте, как долго алкоголь остается в организме в зависимости от
            количества выпитого
          </p>
          <AlcoholMetabolismChart />
          <p className="text-sm text-gray-400 mt-4 text-center">
            * График показывает примерные значения. Метаболизм алкоголя зависит
            от индивидуальных особенностей организма.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pt-32 pb-24 md:pt-48 md:pb-36 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center gap-8">
            <h2 className="text-3xl font-bold text-[#D6BCFA]">Начнём!</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
