import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Icon name="ArrowLeft" size={20} />
            Вернуться на главную
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Публичная оферта
        </h1>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              1. Общие положения
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Настоящая публичная оферта определяет условия предоставления услуг
              через сайт. Принятием оферты считается начало использования
              сервиса.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              2. Предмет договора
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Исполнитель предоставляет Заказчику доступ к интернет-сервису для
              создания и публикации веб-сайтов.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              3. Права и обязанности сторон
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Заказчик обязуется использовать сервис в соответствии с его
              назначением и не нарушать права третьих лиц. Исполнитель
              обеспечивает работоспособность сервиса и сохранность данных.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              4. Ответственность
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Стороны несут ответственность за неисполнение обязательств в
              соответствии с действующим законодательством.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              5. Заключительные положения
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Договор действует с момента акцепта оферты. Все споры решаются
              путем переговоров.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
