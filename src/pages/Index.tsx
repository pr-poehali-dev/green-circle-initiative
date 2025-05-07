import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-black">Добро пожаловать!</h1>
        <p className="text-xl text-gray-600 mb-8">тут будет отображаться ваш проект</p>

        <div className="flex flex-col gap-4 w-40 mx-auto">
          <Button className="bg-red-500 hover:bg-red-600 text-white">
            Красная кнопка
          </Button>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
            Желтая кнопка
          </Button>
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            Зеленая кнопка
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
