import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center animated-gradient">
      <div className="text-center bg-white/60 p-8 rounded-lg shadow-lg backdrop-blur-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Добро пожаловать! 🚀✨</h1>
        <p className="text-xl text-gray-600 mb-8">тут будет отображаться ваш проект</p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-red-500 hover:bg-red-600 text-white w-16 h-16 rounded-full p-0">
            К
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white w-16 h-16 rounded-full p-0">
            Г
          </Button>
          <Button className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full p-0">
            З
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
