import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import funcUrls from "../../backend/func2url.json";

interface TankCombo {
  turret: string;
  hull: string;
  paint: string;
}

const Index = () => {
  const [combo, setCombo] = useState<TankCombo | null>(null);
  const [loading, setLoading] = useState(false);

  const getRandomCombo = async () => {
    setLoading(true);
    try {
      const res = await fetch(funcUrls["random-tank"]);
      const data = await res.json();
      setCombo(data);
    } catch {
      console.error("Ошибка загрузки");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900">
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/30 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-600/30 blur-[120px]" />
      <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] rounded-full bg-pink-500/20 blur-[100px]" />

      <div className="relative z-10 text-center space-y-8 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          🎮 Рандом комба в Танках Онлайн
        </h1>
        <p className="text-white/60 text-lg">
          Нажми кнопку — получи случайную комбинацию
        </p>

        <Button
          size="lg"
          onClick={getRandomCombo}
          disabled={loading}
          className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white text-lg px-8 py-6 shadow-lg transition-all duration-300"
        >
          <Icon name="Dices" size={24} />
          {loading ? "Крутим..." : "Рандомная комба"}
        </Button>

        {combo && (
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 space-y-5 max-w-md mx-auto shadow-2xl">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl border border-white/10">
                💣
              </div>
              <div>
                <p className="text-white/50 text-sm">Пушка</p>
                <p className="text-white text-xl font-semibold">{combo.turret}</p>
              </div>
            </div>
            <div className="h-px bg-white/10" />
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl border border-white/10">
                🛡️
              </div>
              <div>
                <p className="text-white/50 text-sm">Корпус</p>
                <p className="text-white text-xl font-semibold">{combo.hull}</p>
              </div>
            </div>
            <div className="h-px bg-white/10" />
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl border border-white/10">
                🎨
              </div>
              <div>
                <p className="text-white/50 text-sm">Краска</p>
                <p className="text-white text-xl font-semibold">{combo.paint}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
