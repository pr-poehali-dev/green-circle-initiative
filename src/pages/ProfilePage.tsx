import { AuthTabs } from "@/components/auth/AuthTabs";
import Icon from "@/components/ui/icon";

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-[#D6BCFA] mb-8">Личный кабинет</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Левая колонка: приветствие и преимущества */}
        <div className="order-1">
          <div className="bg-[#2B3144] border border-[#9b87f5]/20 rounded-xl p-6 shadow-lg h-full">
            <h2 className="text-2xl font-bold text-[#D6BCFA] mb-4">
              Добро пожаловать!
            </h2>
            <p className="text-gray-300 mb-6">
              Создайте аккаунт или войдите, чтобы получить доступ к расширенным
              возможностям нашего сервиса.
            </p>

            <h3 className="text-lg font-semibold text-[#D6BCFA] mb-3">
              Преимущества аккаунта:
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mt-1 flex-shrink-0 bg-[#9b87f5]/20 p-1 rounded-full mr-3">
                  <Icon name="Save" size={18} className="text-[#9b87f5]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#D6BCFA]">
                    Сохранение рецептов
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Создавайте собственную коллекцию любимых напитков
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mt-1 flex-shrink-0 bg-[#9b87f5]/20 p-1 rounded-full mr-3">
                  <Icon name="History" size={18} className="text-[#9b87f5]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#D6BCFA]">
                    История генераций
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Просматривайте историю всех сгенерированных напитков
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mt-1 flex-shrink-0 bg-[#9b87f5]/20 p-1 rounded-full mr-3">
                  <Icon name="Shuffle" size={18} className="text-[#9b87f5]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#D6BCFA]">Персонализация</h4>
                  <p className="text-gray-400 text-sm">
                    Получайте персонализированные рекомендации на основе ваших
                    предпочтений
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mt-1 flex-shrink-0 bg-[#9b87f5]/20 p-1 rounded-full mr-3">
                  <Icon name="Share2" size={18} className="text-[#9b87f5]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#D6BCFA]">
                    Обмен рецептами
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Делитесь своими рецептами с друзьями или сообществом
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Правая колонка: форма входа/регистрации */}
        <div className="order-2">
          <div className="bg-[#2B3144] border border-[#9b87f5]/20 rounded-xl p-6 shadow-lg">
            <AuthTabs />
          </div>
        </div>
      </div>
    </div>
  );
}
