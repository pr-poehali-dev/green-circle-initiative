import { useState } from "react";
import MoscowPresentation from "@/components/MoscowPresentation";

const Index = () => {
  const [isBlue, setIsBlue] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1
        className={`text-4xl font-bold mb-4 cursor-pointer transition-colors duration-200 ${
          isBlue ? "text-blue-600" : "text-green-600"
        }`}
        onClick={() => setIsBlue(!isBlue)}
      >
        Главный заголовок H1
      </h1>
      <h2 className="text-2xl font-semibold text-gray-800 my-[33px]">
        Подзаголовок H2
      </h2>
      <h3 className="text-xl font-medium text-gray-700 mb-2">
        Заголовок третьего уровня H3
      </h3>

      <p className="text-gray-600 mb-4 leading-relaxed">
        Это обычный параграф с текстом. Здесь можно тестировать редактирование
        содержимого параграфа.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <span className="font-bold text-lime-600">Цветной span</span> внутри div
        блока
      </div>

      <button className="hover:bg-red-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 mr-4 bg-gray-700 text-2xl py-[11px] px-[17px]">
        Кнопка для тестов
      </button>

      <a href="#" className="underline mr-4 py-2.5 text-red-700">
        Ссылка для проверки
      </a>

      <img
        src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=300&h=200&fit=crop"
        alt="Тестовое изображение"
        className="w-64 h-40 object-cover rounded mb-4"
      />

      <ul className="list-disc list-inside mb-4">
        <li>Первый элемент списка</li>
        <li>Второй элемент</li>
        <li>Третий элемент</li>
      </ul>

      <section className="p-4 rounded mb-4 bg-red-800 rounded-full">
        <strong>Секция с жирным текстом</strong> и <em>курсивом</em>
      </section>

      <article className="border-l-4 border-red-500 pl-4 mb-4">
        <small className="text-gray-500">Маленький текст в article</small>
      </article>

      <blockquote className="italic text-gray-600 border-l-2 border-gray-300 pl-4 mb-6">
        Цитата для тестирования blockquote элемента
      </blockquote>

      <MoscowPresentation />
    </div>
  );
};

export default Index;
