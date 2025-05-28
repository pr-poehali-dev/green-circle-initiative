import { useState } from "react";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop&auto=format"
            alt="Современные технологии"
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl object-cover h-64 md:h-80"
          />
        </div>
        <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-tight text-red-700">
          Поехали!
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
          Создавайте красивые веб-приложения с элегантностью и простотой
        </p>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
          Начать создавать
        </button>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center text-gray-900 mb-16">
            Просто. Элегантно. Мощно.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Zap" size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Быстрый старт
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Начните работу за секунды с нашими готовыми компонентами и
                шаблонами
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Palette" size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Красивый дизайн
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Современные компоненты с вниманием к деталям и пользовательскому
                опыту
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Code" size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Чистый код
              </h3>
              <p className="text-gray-600 leading-relaxed">
                TypeScript, React и современные технологии для надёжной
                разработки
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-light">
            Присоединяйтесь к тысячам разработчиков, которые уже создают с нами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-200">
              Попробовать бесплатно
            </button>
            <button className="border border-gray-300 text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-all duration-200">
              Узнать больше
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Поехали! Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
