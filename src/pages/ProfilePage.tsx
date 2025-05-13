
import { Card, CardContent } from "@/components/ui/card";
import { AuthTabs } from "@/components/auth/AuthTabs";

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-[#D6BCFA] mb-8">Личный кабинет</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 lg:w-2/5">
          <Card className="bg-[#2B3144] border-[#9b87f5]/20 shadow-xl overflow-hidden">
            <CardContent className="p-6">
              <AuthTabs />
            </CardContent>
          </Card>
        </div>
        
        <div className="w-full md:w-1/2 lg:w-3/5">
          <div className="bg-[#2B3144] border border-[#9b87f5]/20 rounded-lg p-6 h-full">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="bg-[#9b87f5]/10 p-6 rounded-full mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#9b87f5]"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-[#D6BCFA] mb-3">
                Добро пожаловать!
              </h2>
              <p className="text-gray-400 max-w-md">
                Войдите в свой аккаунт, чтобы получить доступ к персональным функциям:
                сохранению рецептов, созданию коллекций и многому другому.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full max-w-md">
                <div className="bg-white/5 p-4 rounded-lg border border-[#9b87f5]/20">
                  <h3 className="text-[#D6BCFA] text-sm font-medium mb-1">
                    Сохранение рецептов
                  </h3>
                  <p className="text-xs text-gray-400">
                    Создавайте коллекцию любимых коктейлей
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-[#9b87f5]/20">
                  <h3 className="text-[#D6BCFA] text-sm font-medium mb-1">
                    Личная история
                  </h3>
                  <p className="text-xs text-gray-400">
                    Отслеживайте все созданные напитки
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-[#9b87f5]/20">
                  <h3 className="text-[#D6BCFA] text-sm font-medium mb-1">
                    Настройка вкусов
                  </h3>
                  <p className="text-xs text-gray-400">
                    Персонализируйте генератор под себя
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-[#9b87f5]/20">
                  <h3 className="text-[#D6BCFA] text-sm font-medium mb-1">
                    Продвинутые функции
                  </h3>
                  <p className="text-xs text-gray-400">
                    Доступ к премиум рецептам и опциям
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
