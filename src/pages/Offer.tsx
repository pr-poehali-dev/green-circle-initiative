const Offer = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
            <h1 className="text-4xl font-bold mb-8 text-center">
              📋 Публичная оферта
            </h1>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">
                1. Общие положения
              </h2>
              <p className="mb-4 text-gray-300">
                Настоящая публичная оферта является официальным предложением ООО
                "Token Calculator" (далее - "Исполнитель") о заключении договора
                на оказание услуг по подсчету токенов для нейросетей и языковых
                моделей.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-blue-300">
                2. Предмет договора
              </h2>
              <p className="mb-4 text-gray-300">
                Исполнитель оказывает следующие услуги:
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
                <li>🔢 Точный подсчет токенов в текстах различных форматов</li>
                <li>📊 Анализ токенизации для разных языковых моделей</li>
                <li>
                  💰 Расчет стоимости использования API различных провайдеров
                </li>
                <li>📈 Оптимизация промптов для экономии токенов</li>
                <li>
                  🛠️ Консультации по эффективному использованию AI-сервисов
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-blue-300">
                3. Стоимость услуг
              </h2>
              <div className="bg-white/5 rounded-lg p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-blue-200">
                      💎 Базовый тариф
                    </h3>
                    <p className="text-gray-300 mb-2">
                      До 10,000 токенов в месяц
                    </p>
                    <p className="text-2xl font-bold text-green-400">
                      Бесплатно
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-blue-200">
                      🚀 Профессиональный
                    </h3>
                    <p className="text-gray-300 mb-2">
                      До 1,000,000 токенов в месяц
                    </p>
                    <p className="text-2xl font-bold text-blue-400">₽500/мес</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-blue-300">
                4. Порядок оказания услуг
              </h2>
              <p className="mb-4 text-gray-300">
                Услуги оказываются через веб-интерфейс нашего сервиса. Заказчик
                получает доступ к калькулятору токенов после регистрации на
                сайте.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-blue-300">
                5. Ответственность сторон
              </h2>
              <p className="mb-4 text-gray-300">
                Исполнитель гарантирует точность подсчета токенов с погрешностью
                не более 1%. Заказчик несет ответственность за предоставление
                корректных данных для анализа.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-blue-300">
                6. Контактная информация
              </h2>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-gray-300">ООО "Token Calculator"</p>
                <p className="text-gray-300">📍 г. Владикавказ, Россия</p>
                <p className="text-gray-300">📧 support@tokencalc.ru</p>
                <p className="text-gray-300">📞 +7 (8672) 55-12-34</p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-sm text-gray-400 text-center">
                  Оферта вступает в силу с момента публикации и действует до
                  отзыва
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
