
import { useState } from 'react';
import PhysicsContainer from '@/components/PhysicsContainer';

const Index = () => {
  const [messageVisible, setMessageVisible] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      {/* Заголовок */}
      <header className="w-full p-4 text-center">
        <h1 className="text-4xl font-bold text-white">Физика столкновений</h1>
        <p className="text-xl text-white/70 mt-2">Перетаскивайте объекты и наблюдайте за их взаимодействием</p>
      </header>

      {/* Основная область с физическими объектами */}
      <div className="flex-1 w-full relative overflow-hidden">
        <PhysicsContainer />
        
        {/* Всплывающая подсказка */}
        {messageVisible && (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-sm text-center">
            <p className="text-white text-lg">Попробуйте перетащить цветные круги и отпустить их!</p>
            <button 
              className="mt-2 text-sm text-white/70 hover:text-white"
              onClick={() => setMessageVisible(false)}
            >
              Понятно, скрыть
            </button>
          </div>
        )}
      </div>

      {/* Информация внизу */}
      <footer className="w-full p-4 text-center bg-white/5 backdrop-blur-sm">
        <p className="text-white/80 text-sm">Объекты реагируют на гравитацию, столкновения и взаимодействуют друг с другом</p>
      </footer>
    </div>
  );
};

export default Index;
