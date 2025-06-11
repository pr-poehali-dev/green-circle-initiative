import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 color-black text-black">
          Добро поебаловать
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          тут будет отображаться ваш проект
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="default">Начать</Button>
          <Button variant="outline">Узнать больше</Button>
          <Button variant="secondary">Связаться с нами</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
