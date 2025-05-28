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
        Привет, Костя Голик!!!
      </h1>
      <h2 className="text-gray-800 mb-3 text-5xl font-800 text-center">
        Подзаголовок H2
      </h2>
      <h3 className="text-xl font-medium text-gray-700 mb-2 text-center">
        Заголовок третьего уровня H3
      </h3>

      <p className="text-gray-600 mb-4 leading-relaxed">
        Это обычный параграф с текстом. Здесь можно тестировать редактирование
        содержимого параграфа.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <span className="font-bold text-gray-700">Цветной spanоо-vanopano</span>{" "}
        внутри div блока
      </div>

      <button className="hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 mr-4 bg-orange-700">
        Кнопка для тестовasdf
        <br />
        фыаыфва фывафыва
      </button>

      <a href="#" className="underline mr-4 text-[#0b0b09] text-5xl font-900">
        Ссылка для проверки
      </a>

      <img
        src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=300&h=200&fit=crop"
        alt="Тестовое изображение"
        className="w-64 h-40 object-cover rounded mx-[19px] my-[23px] py-[29px] px-[37px] rounded-full"
      />

      <ul className="list-disc list-inside mb-4">
        <li>Хаххаха первый элемент!!</li>
        <li>Второй элемент</li>
        <li>Третий элемент</li>
      </ul>

      <section className="bg-yellow-100 p-4 rounded mb-4 rounded-full">
        <strong>Секция с жирным текстом</strong> и <em>курсивом</em>
      </section>

      <article className="border-l-4 border-red-500 pl-4 mb-4">
        <small className="text-gray-500">Маленький текст в article</small>
      </article>

      <blockquote className="italic border-l-2 border-gray-300 pl-4 mb-6 text-slate-50 bg-slate-600">
        Цитата для тестирования blockquote элемента
      </blockquote>

      <MoscowPresentation />
    </div>
  );
};

export default Index;
