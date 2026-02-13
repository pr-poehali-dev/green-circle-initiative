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
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold text-white">
          🎮 Рандом комба в Танках Онлайн
        </h1>
        <p className="text-gray-400 text-lg">
          Нажми кнопку — получи случайную комбинацию
        </p>

        <Button
          size="lg"
          onClick={getRandomCombo}
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6"
        >
          <Icon name="Dices" size={24} />
          {loading ? "Крутим..." : "Рандомная комба"}
        </Button>

        {combo && (
          <div className="bg-gray-800 rounded-2xl p-8 space-y-4 max-w-md mx-auto border border-gray-700">
            <div className="flex items-center gap-3 text-left">
              <span className="text-2xl">💣</span>
              <div>
                <p className="text-gray-400 text-sm">Пушка</p>
                <p className="text-white text-xl font-semibold">{combo.turret}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-left">
              <span className="text-2xl">🛡️</span>
              <div>
                <p className="text-gray-400 text-sm">Корпус</p>
                <p className="text-white text-xl font-semibold">{combo.hull}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-left">
              <span className="text-2xl">🎨</span>
              <div>
                <p className="text-gray-400 text-sm">Краска</p>
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
