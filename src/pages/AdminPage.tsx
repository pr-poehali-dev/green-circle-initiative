import Icon from "@/components/ui/icon";

export default function AdminPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-[#D6BCFA] mb-8">
        Административная панель
      </h1>

      <div className="flex justify-center items-center min-h-[400px] text-center">
        <div>
          <Icon
            name="Settings"
            size={64}
            className="text-red-500 mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-[#D6BCFA] mb-2">
            Доступ ограничен
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Функционал административной панели находится в разработке. Скоро
            здесь появятся инструменты управления контентом.
          </p>
        </div>
      </div>
    </div>
  );
}
