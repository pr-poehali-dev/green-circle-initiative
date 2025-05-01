
import { useState } from 'react';
import DraggableCircle from '@/components/DraggableCircle';

const Index = () => {
  const [messageVisible, setMessageVisible] = useState(true);


  return (
    <div className="min-h-screen flex flex-col bg-[#121212] animated-background">

      {/* Заголовок */}
      <header className="w-full p-4 text-center">
        <h1 className="text-4xl font-bold text-white">Интерактивный круг</h1>
        <p className="text-xl text-white mt-2">Перетаскивайте круг и нажимайте на него</p>
      </header>

      {/* Основная область с интерактивным кругом */}
      <div className="flex-1 w-full relative overflow-hidden">
        <DraggableCircle />
        

        {/* Всплывающая подсказка */}
        {messageVisible && (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-sm text-center">
            <p className="text-white text-lg">Попробуйте перетащить красный круг и нажать на него!</p>
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
      <footer className="w-full p-4 text-center bg-white/10 backdrop-blur-sm">
        <p className="text-white text-sm">При нажатии круг меняет цвет на зеленый</p>
      </footer>
    </div>
  );
};

export default Index;
