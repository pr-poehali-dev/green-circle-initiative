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
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="neon-pink px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105">
            Начать
          </button>
          <button className="neon-green px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105">
            Узнать больше
          </button>
          <button className="neon-blue px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105">
            Связаться с нами
          </button>
        </div>

        <style jsx>{`
          .neon-pink {
            background: linear-gradient(45deg, #ff0080, #ff8c00);
            box-shadow:
              0 0 20px rgba(255, 0, 128, 0.5),
              0 0 40px rgba(255, 0, 128, 0.3),
              0 0 60px rgba(255, 0, 128, 0.1);
            border: none;
          }

          .neon-pink:hover {
            box-shadow:
              0 0 30px rgba(255, 0, 128, 0.8),
              0 0 50px rgba(255, 0, 128, 0.5),
              0 0 80px rgba(255, 0, 128, 0.3);
            transform: translateY(-2px);
          }

          .neon-green {
            background: linear-gradient(45deg, #00ff88, #00cc66);
            box-shadow:
              0 0 20px rgba(0, 255, 136, 0.5),
              0 0 40px rgba(0, 255, 136, 0.3),
              0 0 60px rgba(0, 255, 136, 0.1);
            border: none;
          }

          .neon-green:hover {
            box-shadow:
              0 0 30px rgba(0, 255, 136, 0.8),
              0 0 50px rgba(0, 255, 136, 0.5),
              0 0 80px rgba(0, 255, 136, 0.3);
            transform: translateY(-2px);
          }

          .neon-blue {
            background: linear-gradient(45deg, #0088ff, #0066cc);
            box-shadow:
              0 0 20px rgba(0, 136, 255, 0.5),
              0 0 40px rgba(0, 136, 255, 0.3),
              0 0 60px rgba(0, 136, 255, 0.1);
            border: none;
          }

          .neon-blue:hover {
            box-shadow:
              0 0 30px rgba(0, 136, 255, 0.8),
              0 0 50px rgba(0, 136, 255, 0.5),
              0 0 80px rgba(0, 136, 255, 0.3);
            transform: translateY(-2px);
          }
        `}</style>
      </div>
    </div>
  );
};

export default Index;
