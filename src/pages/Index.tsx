import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handleClick = () => {
    alert("🚀 Поехали! Кнопка работает!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 color-black text-black">
          Добро пожаловать!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          тут будет отображаться ваш проект
        </p>
        <Button
          onClick={handleClick}
          size="lg"
          className="bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Icon name="Rocket" size={20} />
          Поехали!
        </Button>
      </div>
    </div>
  );
};

export default Index;
