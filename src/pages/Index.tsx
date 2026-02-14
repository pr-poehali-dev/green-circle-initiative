import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import funcUrls from "../../backend/func2url.json";

const Stars = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
      })),
    []
  );

  const shootingStars = useMemo(
    () =>
      Array.from({ length: 4 }, (_, i) => ({
        id: i,
        top: Math.random() * 30 + 5,
        left: Math.random() * 50 + 5,
        delay: Math.random() * 4 + i * 5,
        duration: Math.random() * 2 + 6,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
      {shootingStars.map((s) => (
        <div
          key={`shoot-${s.id}`}
          className="absolute animate-shooting-star"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        >
          <div className="w-[80px] h-[1px] bg-gradient-to-l from-white/80 to-transparent" />
        </div>
      ))}
    </div>
  );
};

interface TankCombo {
  turret: string;
  hull: string;
  paint: string;
}

const TANK_IMAGES = [
  "https://cdn.poehali.dev/projects/489d77e8-4b0d-49f7-bd2e-a9c1ad00ee9a/files/94a16ad4-97d1-4419-9037-b62a002e62a5.jpg",
  "https://cdn.poehali.dev/projects/489d77e8-4b0d-49f7-bd2e-a9c1ad00ee9a/files/dee52d3f-f00d-4465-ba0f-248544be78b4.jpg",
  "https://cdn.poehali.dev/projects/489d77e8-4b0d-49f7-bd2e-a9c1ad00ee9a/files/4610d727-5c59-4d28-928c-703c414d6963.jpg",
];

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
      <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center text-2xl border border-white/10">
        {emoji}
      </div>
      <div>
        <p className="text-neutral-500 text-sm">{label}</p>
        <p className="text-neutral-100 text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
};

const Index = () => {
  const [combo, setCombo] = useState<TankCombo | null>(null);
  const [loading, setLoading] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [comboKey, setComboKey] = useState(0);
  const [tankImage, setTankImage] = useState("");

  const getRandomCombo = async () => {
    setLoading(true);
    setShowCard(false);
    try {
      const res = await fetch(funcUrls["random-tank"]);
      const data = await res.json();
      setTimeout(() => {
        setCombo(data);
        setComboKey((k) => k + 1);
        setTankImage(TANK_IMAGES[Math.floor(Math.random() * TANK_IMAGES.length)]);
        setShowCard(true);
      }, 150);
    } catch {
      console.error("Ошибка загрузки");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <Stars />
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px] animate-float-slow" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-white/5 blur-[120px] animate-float-slow-reverse" />

      <div className="relative z-10 text-center space-y-8 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 tracking-tight">
          Рандом комба
        </h1>
        <p className="text-neutral-500 text-lg">
          Танки Онлайн — случайная комбинация
        </p>

        <Button
          size="lg"
          onClick={getRandomCombo}
          disabled={loading}
          className="bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 text-neutral-200 text-lg px-8 py-6 shadow-lg transition-all duration-300"
        >
          <Icon name="Dices" size={24} />
          {loading ? "Крутим..." : "Рандомная комба"}
        </Button>

        {combo && (
          <div
            key={comboKey}
            className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5 max-w-md mx-auto shadow-2xl transition-all duration-500 ${
              showCard
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <div className="flex justify-center mb-2">
              <img
                src={tankImage}
                alt="Танк"
                className="w-48 h-48 object-cover rounded-xl border border-white/10"
              />
            </div>
            <div className="h-px bg-white/5" />
            <ComboItem emoji="💣" label="Пушка" value={combo.turret} delay={200} />
            <div className="h-px bg-white/5" />
            <ComboItem emoji="🛡️" label="Корпус" value={combo.hull} delay={400} />
            <div className="h-px bg-white/5" />
            <ComboItem emoji="🎨" label="Краска" value={combo.paint} delay={600} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;