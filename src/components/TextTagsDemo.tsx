const TextTagsDemo = () => {
  return (
    <section className="relative z-20 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
              Примеры текстовых тегов
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              Попробуйте отредактировать любой из этих текстовых элементов
            </p>
          </div>

          {/* Заголовки */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 border-b border-white/20 pb-2">
              Заголовки
            </h3>
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
              Заголовок H1
            </h1>
            <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white">
              Заголовок H2
            </h2>
            <h3 className="text-2xl font-medium text-neutral-800 dark:text-neutral-200">
              Заголовок H3
            </h3>
            <h4 className="text-xl font-medium text-neutral-700 dark:text-neutral-300">
              Заголовок H4
            </h4>
            <h5 className="text-lg font-medium text-neutral-600 dark:text-neutral-400">
              Заголовок H5
            </h5>
            <h6 className="text-base font-medium text-neutral-500 dark:text-neutral-500">
              Заголовок H6
            </h6>
          </div>

          {/* Параграфы и текст */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 border-b border-white/20 pb-2">
              Текстовые блоки
            </h3>
            <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Это обычный параграф текста. Вы можете редактировать его
              содержимое и видеть изменения в реальном времени.
            </p>
            <p className="text-lg text-neutral-800 dark:text-neutral-200 font-light">
              Параграф с увеличенным размером шрифта и облегченным начертанием.
            </p>
            <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
              Span элемент как бейдж
            </span>
          </div>

          {/* Форматирование */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 border-b border-white/20 pb-2">
              Форматирование текста
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              Текст с{" "}
              <strong className="font-bold text-neutral-900 dark:text-white">
                жирным выделением
              </strong>{" "}
              и{" "}
              <em className="italic text-blue-600 dark:text-blue-400">
                курсивом
              </em>
              .
            </p>
            <p className="text-neutral-700 dark:text-neutral-300">
              Код:{" "}
              <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-red-600 dark:text-red-400">
                console.log('Привет!')
              </code>
            </p>
            <small className="text-sm text-neutral-500 dark:text-neutral-400 block">
              Мелкий текст для дополнительной информации
            </small>
          </div>

          {/* Цитаты */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 border-b border-white/20 pb-2">
              Цитаты
            </h3>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-neutral-700 dark:text-neutral-300 bg-blue-50/50 dark:bg-blue-900/10 p-4 rounded-r-lg">
              "Создание сайтов должно быть простым и доступным каждому.
              Технологии должны служить людям, а не наоборот."
            </blockquote>
            <cite className="text-sm text-neutral-500 dark:text-neutral-400 block text-right">
              — Команда Поехали!
            </cite>
          </div>

          {/* Списки */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 border-b border-white/20 pb-2">
              Списки
            </h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Первый пункт маркированного списка</li>
              <li>Второй пункт списка</li>
              <li>
                Третий пункт с длинным текстом для демонстрации переноса строк
              </li>
            </ul>
            <ol className="list-decimal list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Первый пункт нумерованного списка</li>
              <li>Второй пункт</li>
              <li>Третий пункт</li>
            </ol>
          </div>

          {/* Специальные элементы */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 border-b border-white/20 pb-2">
              Специальные элементы
            </h3>
            <address className="not-italic text-neutral-700 dark:text-neutral-300 bg-gray-50 dark:bg-gray-800/50 p-3 rounded border-l-4 border-green-500">
              Адрес: г. Москва, ул. Примерная, д. 123
              <br />
              Email: info@poehali.dev
            </address>
            <time className="text-neutral-600 dark:text-neutral-400 font-mono bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded">
              2024-12-08
            </time>
            <div className="bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded p-3">
              <mark className="bg-yellow-300 dark:bg-yellow-600 px-1 rounded">
                Выделенный текст
              </mark>{" "}
              в информационном блоке
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextTagsDemo;
