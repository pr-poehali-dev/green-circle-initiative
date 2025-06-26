import AuroraBackground from "@/components/AuroraBackground";
import Countdown from "react-countdown";

const Index = () => {
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 1);

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <span className="text-4xl font-bold text-white">🎉 Запуск!</span>;
    } else {
      return (
        <div className="text-center">
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-4">
              <div className="text-4xl font-bold text-white">{days}</div>
              <div className="text-sm text-white/70">дней</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-4">
              <div className="text-4xl font-bold text-white">{hours}</div>
              <div className="text-sm text-white/70">часов</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-4">
              <div className="text-4xl font-bold text-white">{minutes}</div>
              <div className="text-sm text-white/70">минут</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-4">
              <div className="text-4xl font-bold text-white">{seconds}</div>
              <div className="text-sm text-white/70">секунд</div>
            </div>
          </div>
          <p className="text-xl text-white/80">до запуска космической миссии</p>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <AuroraBackground>
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
          <div className="text-center text-white mb-12">
            <h1 className="text-6xl font-bold mb-4 opacity-90 drop-shadow-lg">
              🚀 ПОЕХАЛИ!
            </h1>
            <p className="text-2xl opacity-70 drop-shadow-md mb-8">
              Создаём будущее вместе
            </p>
          </div>

          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <Countdown date={targetDate} renderer={renderer} />
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
};

export default Index;
