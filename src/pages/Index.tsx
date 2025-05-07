import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center animated-gradient">
      <div className="text-center bg-zinc-900/80 p-8 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-md text-white">
        <h1 className="text-3xl font-bold mb-4">🚀 Добро пожаловать!</h1>
        <p className="text-xl text-white mb-6">тут будет отображаться ваш проект</p>

        <div className="mb-6 flex justify-center">
          <img
            src="https://cdn.poehali.dev/files/86443b1f-ce58-4a9d-8c7b-5589911afa63.png"
            alt="Подарочная коробка"
            className="w-48 h-auto"
          />
        </div>

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
