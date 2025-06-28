// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 relative overflow-hidden">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="color-black text-8xl font-black text-yellow-400 mb-8">
            Валле.
          </h1>
          <img
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="WALL-E робот"
            className="mx-auto rounded-lg shadow-2xl w-96 h-64 object-cover"
          />
        </div>
        <p className="text-xl text-gray-600">
          тут будет отображаться ваш проектикус
        </p>
      </div>

      {/* Анимированный робот внизу */}
      <div className="fixed bottom-4 left-0 animate-slide-robot">
        <img
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="WALL-E катается"
          className="w-20 h-20 object-cover rounded-lg transform hover:scale-110 transition-transform duration-300 cursor-pointer"
        />
      </div>

      <style jsx>{`
        @keyframes slideRobot {
          0% {
            transform: translateX(-100px);
          }
          50% {
            transform: translateX(calc(100vw - 100px));
          }
          100% {
            transform: translateX(-100px);
          }
        }
        .animate-slide-robot {
          animation: slideRobot 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
