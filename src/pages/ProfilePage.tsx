import { AuthTabs } from "@/components/auth/AuthTabs";
import Icon from "@/components/ui/icon";

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-red-400 mb-8">Личный кабинет</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Левая колонка: приветствие и преимущества - скрыта на мобильных */}
        <div className="order-1 hidden md:block">
          <div className="bg-red-900 border border-red-500/30 rounded-xl p-6 shadow-lg h-full">
            <h2 className="text-2xl font-bold text-red-300 mb-4">Привет!</h2>
            <p className="text-red-100 mb-6">
              Создайте аккаунт или войдите, чтобы получить доступ к расширенным
              возможностям нашего сервиса.
            </p>

            <h3 className="text-lg font-semibold text-red-300 mb-3">
              Преимущества аккаунта:
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mt-1 flex-shrink-0 bg-red-500/20 p-1 rounded-full mr-3">
                  <Icon name="Save" size={18} className="text-red-400" />
                </div>
                <div>
                  <h4 className="font-medium text-red-300">
                    Сохранение рецептов
                  </h4>
                  <p className="text-red-200/70 text-sm">
                    Создавайте собственную коллекцию любимых напитков
                  </p>
                </div>
              </li>

              {/* ... остальные пункты списка ... */}
            </ul>
          </div>
        </div>

        {/* Правая колонка: форма входа/регистрации теперь тоже красная */}
        <div className="order-2 col-span-1 md:col-span-1 mx-auto w-full max-w-md">
          <div className="bg-red-900 border border-red-500/30 rounded-xl p-6 shadow-lg">
            <AuthTabs />
          </div>
        </div>
      </div>
    </div>
  );
}
