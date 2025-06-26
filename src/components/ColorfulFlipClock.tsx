import { useState, useEffect } from "react";

interface ColorfulFlipCardProps {
  value: string;
  nextValue: string;
  isFlipping: boolean;
  color: string;
}

const ColorfulFlipCard = ({
  value,
  nextValue,
  isFlipping,
  color,
}: ColorfulFlipCardProps) => {
  const colorVariants = {
    red: {
      card: "bg-gradient-to-b from-red-400 to-red-600 border-red-500",
      top: "bg-gradient-to-b from-red-300 to-red-400 border-red-400",
      bottom: "bg-gradient-to-b from-red-500 to-red-600",
      text: "text-white",
    },
    blue: {
      card: "bg-gradient-to-b from-blue-400 to-blue-600 border-blue-500",
      top: "bg-gradient-to-b from-blue-300 to-blue-400 border-blue-400",
      bottom: "bg-gradient-to-b from-blue-500 to-blue-600",
      text: "text-white",
    },
    green: {
      card: "bg-gradient-to-b from-green-400 to-green-600 border-green-500",
      top: "bg-gradient-to-b from-green-300 to-green-400 border-green-400",
      bottom: "bg-gradient-to-b from-green-500 to-green-600",
      text: "text-white",
    },
    purple: {
      card: "bg-gradient-to-b from-purple-400 to-purple-600 border-purple-500",
      top: "bg-gradient-to-b from-purple-300 to-purple-400 border-purple-400",
      bottom: "bg-gradient-to-b from-purple-500 to-purple-600",
      text: "text-white",
    },
    orange: {
      card: "bg-gradient-to-b from-orange-400 to-orange-600 border-orange-500",
      top: "bg-gradient-to-b from-orange-300 to-orange-400 border-orange-400",
      bottom: "bg-gradient-to-b from-orange-500 to-orange-600",
      text: "text-white",
    },
    pink: {
      card: "bg-gradient-to-b from-pink-400 to-pink-600 border-pink-500",
      top: "bg-gradient-to-b from-pink-300 to-pink-400 border-pink-400",
      bottom: "bg-gradient-to-b from-pink-500 to-pink-600",
      text: "text-white",
    },
  };

  const currentColor =
    colorVariants[color as keyof typeof colorVariants] || colorVariants.blue;

  return (
    <div className="relative w-16 h-24 mx-1">
      <div className="absolute inset-0 perspective-1000">
        <div
          className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-600 ease-in-out ${
            isFlipping ? "animate-flip-bounce" : ""
          }`}
        >
          {/* Front card */}
          <div className="absolute inset-0 backface-hidden">
            <div
              className={`w-full h-full ${currentColor.card} border-2 rounded-xl shadow-xl`}
            >
              <div
                className={`h-1/2 ${currentColor.top} rounded-t-xl border-b-2`}
              >
                <div
                  className={`flex items-center justify-center h-full text-3xl font-bold ${currentColor.text} drop-shadow-lg`}
                >
                  {value}
                </div>
              </div>
              <div className={`h-1/2 ${currentColor.bottom} rounded-b-xl`}>
                <div
                  className={`flex items-center justify-center h-full text-3xl font-bold ${currentColor.text} drop-shadow-lg`}
                >
                  {value}
                </div>
              </div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-xl pointer-events-none"></div>
            </div>
          </div>

          {/* Back card */}
          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <div
              className={`w-full h-full ${currentColor.card} border-2 rounded-xl shadow-xl`}
            >
              <div
                className={`h-1/2 ${currentColor.top} rounded-t-xl border-b-2`}
              >
                <div
                  className={`flex items-center justify-center h-full text-3xl font-bold ${currentColor.text} drop-shadow-lg`}
                >
                  {nextValue}
                </div>
              </div>
              <div className={`h-1/2 ${currentColor.bottom} rounded-b-xl`}>
                <div
                  className={`flex items-center justify-center h-full text-3xl font-bold ${currentColor.text} drop-shadow-lg`}
                >
                  {nextValue}
                </div>
              </div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ColorfulFlipClock = () => {
  const [time, setTime] = useState(new Date());
  const [flipping, setFlipping] = useState({
    hours: false,
    minutes: false,
    seconds: false,
  });

  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["red", "blue", "green", "purple", "orange", "pink"];

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = new Date();
      const oldTime = time;

      const needsFlip = {
        hours: newTime.getHours() !== oldTime.getHours(),
        minutes: newTime.getMinutes() !== oldTime.getMinutes(),
        seconds: newTime.getSeconds() !== oldTime.getSeconds(),
      };

      if (needsFlip.hours || needsFlip.minutes || needsFlip.seconds) {
        setFlipping(needsFlip);
        setTimeout(() => {
          setFlipping({ hours: false, minutes: false, seconds: false });
        }, 600);
      }

      setTime(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  useEffect(() => {
    const colorTimer = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 5000);

    return () => clearInterval(colorTimer);
  }, []);

  const formatTime = (time: Date) => {
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    return { hours, minutes, seconds };
  };

  const getNextTime = (time: Date) => {
    const nextTime = new Date(time.getTime() + 1000);
    return formatTime(nextTime);
  };

  const currentTime = formatTime(time);
  const nextTime = getNextTime(time);
  const currentColor = colors[colorIndex];

  return (
    <div className="flex flex-col items-center space-y-6 p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Colorful Flip Clock
      </h2>

      <div className="flex items-center space-x-3">
        {/* Hours */}
        <div className="flex space-x-1">
          <ColorfulFlipCard
            value={currentTime.hours[0]}
            nextValue={nextTime.hours[0]}
            isFlipping={flipping.hours}
            color={currentColor}
          />
          <ColorfulFlipCard
            value={currentTime.hours[1]}
            nextValue={nextTime.hours[1]}
            isFlipping={flipping.hours}
            color={currentColor}
          />
        </div>

        <div className="text-4xl font-bold text-white mx-2 animate-pulse">
          :
        </div>

        {/* Minutes */}
        <div className="flex space-x-1">
          <ColorfulFlipCard
            value={currentTime.minutes[0]}
            nextValue={nextTime.minutes[0]}
            isFlipping={flipping.minutes}
            color={colors[(colorIndex + 1) % colors.length]}
          />
          <ColorfulFlipCard
            value={currentTime.minutes[1]}
            nextValue={nextTime.minutes[1]}
            isFlipping={flipping.minutes}
            color={colors[(colorIndex + 1) % colors.length]}
          />
        </div>

        <div className="text-4xl font-bold text-white mx-2 animate-pulse">
          :
        </div>

        {/* Seconds */}
        <div className="flex space-x-1">
          <ColorfulFlipCard
            value={currentTime.seconds[0]}
            nextValue={nextTime.seconds[0]}
            isFlipping={flipping.seconds}
            color={colors[(colorIndex + 2) % colors.length]}
          />
          <ColorfulFlipCard
            value={currentTime.seconds[1]}
            nextValue={nextTime.seconds[1]}
            isFlipping={flipping.seconds}
            color={colors[(colorIndex + 2) % colors.length]}
          />
        </div>
      </div>

      <div className="text-lg font-medium text-gray-300">
        {time.toLocaleDateString("ru-RU", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>

      <div className="flex space-x-2 mt-4">
        {colors.map((color, index) => (
          <div
            key={color}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === colorIndex ? "scale-125" : "scale-100 opacity-50"
            }`}
            style={{
              backgroundColor: {
                red: "#ef4444",
                blue: "#3b82f6",
                green: "#10b981",
                purple: "#8b5cf6",
                orange: "#f97316",
                pink: "#ec4899",
              }[color],
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorfulFlipClock;
