import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Index = () => {
  const [currentGift, setCurrentGift] = useState<string>(
    'https://cdn.poehali.dev/files/86443b1f-ce58-4a9d-8c7b-5589911afa63.png',
  );

  const gifts = {
    red: 'https://cdn.poehali.dev/files/86443b1f-ce58-4a9d-8c7b-5589911afa63.png',
    blue: 'https://cdn.poehali.dev/files/d9575e84-fd0f-4ae1-bb42-7c143d5ccf24.png',
    green: 'https://cdn.poehali.dev/files/ab49c7da-f851-4457-a458-7163513008c9.png',
  };

  const changeGift = (color: 'red' | 'blue' | 'green') => {
    setCurrentGift(gifts[color]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center animated-gradient">
      <div className="text-center bg-zinc-800/60 p-8 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-green-500/50 backdrop-blur-md text-white">
        <h1 className="text-3xl font-bold mb-4">🚀 Добро пожаловать!</h1>
        <p className="text-xl text-white mb-6">тут будет отображаться ваш проект</p>

        <div className="mb-6 flex justify-center">
          <img
            src={currentGift}
            alt="Подарочная коробка"
            className="w-48 h-48 object-contain transition-all duration-300 transform hover:scale-105 animate-fade-in"
            style={{ animation: 'fadeIn 0.5s ease-in-out' }}
          />
        </div>

        <div className="flex gap-4 justify-center">
          <Button
            className="bg-red-500 hover:bg-red-600 text-white w-16 h-16 rounded-full p-0"
            onClick={() => changeGift('red')}
          >
            К
          </Button>
          <Button
            className="bg-blue-500 hover:bg-blue-600 text-white w-16 h-16 rounded-full p-0"
            onClick={() => changeGift('blue')}
          >
            С
          </Button>
          <Button
            className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full p-0"
            onClick={() => changeGift('green')}
          >
            З
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
