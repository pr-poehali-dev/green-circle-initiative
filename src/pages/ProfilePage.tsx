
import Icon from "@/components/ui/icon";

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-[#D6BCFA] mb-8">Личный кабинет</h1>
      
      <div className="flex justify-center items-center min-h-[400px] text-center">
        <div>
          <Icon name="User" size={64} className="text-[#9b87f5]/30 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-[#D6BCFA] mb-2">Авторизация недоступна</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Функционал личного кабинета находится в разработке. Скоро здесь появится возможность входа и регистрации.
          </p>
        </div>
      </div>
    </div>
  );
}
