import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import funcUrls from "../../backend/func2url.json";

interface TankCombo {
  turret: string;
  hull: string;
  paint: string;
}

const ComboItem = ({
  emoji,
  label,
  value,
  delay,
}: {
  emoji: string;
  label: string;
  value: string;
  delay: number;
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <div
      className={`flex items-center gap-4 text-left transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
      }`}
    >
      <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl border border-white/10">
        {emoji}
      </div>
      <div>
        <p className="text-white/50 text-sm">{label}</p>
        <p className="text-white text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
};

const Index = () => {
  const [combo, setCombo] = useState<TankCombo | null>(null);
  const [loading, setLoading] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [comboKey, setComboKey] = useState(0);

  const getRandomCombo = async () => {
    setLoading(true);
    setShowCard(false);
    try {
      const res = await fetch(funcUrls["random-tank"]);
      const data = await res.json();
      setTimeout(() => {
        setCombo(data);
        setComboKey((k) => k + 1);
        setShowCard(true);
      }, 150);
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
          <div
            key={comboKey}
            className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 space-y-5 max-w-md mx-auto shadow-2xl transition-all duration-500 ${
              showCard
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <ComboItem emoji="💣" label="Пушка" value={combo.turret} delay={200} />
            <div className="h-px bg-white/10" />
            <ComboItem emoji="🛡️" label="Корпус" value={combo.hull} delay={400} />
            <div className="h-px bg-white/10" />
            <ComboItem emoji="🎨" label="Краска" value={combo.paint} delay={600} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;