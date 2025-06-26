import AuroraBackground from "@/components/AuroraBackground";
import FlipClock from "@/components/FlipClock";
import AdvancedFlipClock from "@/components/AdvancedFlipClock";
import MinimalFlipClock from "@/components/MinimalFlipClock";
import ColorfulFlipClock from "@/components/ColorfulFlipClock";

const Index = () => {
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl">
            <div className="flex justify-center">
              <FlipClock />
            </div>

            <div className="flex justify-center">
              <AdvancedFlipClock
                theme="apple"
                size="medium"
                showDate={true}
                showSeconds={true}
                format24h={true}
              />
            </div>

            <div className="flex justify-center">
              <MinimalFlipClock />
            </div>

            <div className="flex justify-center">
              <ColorfulFlipClock />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            <div className="flex justify-center">
              <AdvancedFlipClock
                theme="dark"
                size="small"
                showDate={false}
                showSeconds={false}
                format24h={false}
              />
            </div>

            <div className="flex justify-center">
              <AdvancedFlipClock
                theme="light"
                size="large"
                showDate={true}
                showSeconds={true}
                format24h={true}
              />
            </div>
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
};

export default Index;
