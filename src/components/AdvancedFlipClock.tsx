import { useState, useEffect } from "react";

interface AdvancedFlipCardProps {
  value: string;
  nextValue: string;
  isFlipping: boolean;
  size?: "small" | "medium" | "large";
  theme?: "light" | "dark" | "apple";
}

const AdvancedFlipCard = ({
  value,
  nextValue,
  isFlipping,
  size = "medium",
  theme = "apple",
}: AdvancedFlipCardProps) => {
  const sizeClasses = {
    small: "w-12 h-16 text-2xl",
    medium: "w-16 h-24 text-3xl",
    large: "w-20 h-28 text-4xl",
  };

  const themeClasses = {
    light: {
      card: "bg-gradient-to-b from-white to-gray-100 border-gray-200",
      top: "bg-gradient-to-b from-white to-gray-50 border-gray-200",
      bottom: "bg-gradient-to-b from-gray-50 to-gray-100",
      text: "text-gray-800",
      shadow: "shadow-lg",
    },
    dark: {
      card: "bg-gradient-to-b from-gray-800 to-gray-900 border-gray-600",
      top: "bg-gradient-to-b from-gray-700 to-gray-800 border-gray-600",
      bottom: "bg-gradient-to-b from-gray-800 to-gray-900",
      text: "text-white",
      shadow: "shadow-2xl",
    },
    apple: {
      card: "bg-gradient-to-b from-gray-100 to-gray-200 border-gray-300",
      top: "bg-gradient-to-b from-white to-gray-100 border-gray-300",
      bottom: "bg-gradient-to-b from-gray-100 to-gray-200",
      text: "text-gray-800",
      shadow: "shadow-xl",
    },
  };

  const currentTheme = themeClasses[theme];

  return (
    <div className={`relative ${sizeClasses[size]} mx-1`}>
      <div className="absolute inset-0 perspective-1000">
        <div
          className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ease-in-out ${
            isFlipping ? "animate-flip-smooth" : ""
          }`}
        >
          {/* Front card */}
          <div className="absolute inset-0 backface-hidden">
            <div
              className={`w-full h-full ${currentTheme.card} border rounded-xl ${currentTheme.shadow}`}
            >
              <div
                className={`h-1/2 ${currentTheme.top} rounded-t-xl border-b`}
              >
                <div
                  className={`flex items-center justify-center h-full ${sizeClasses[size].split(" ")[2]} font-bold ${currentTheme.text}`}
                >
                  {value}
                </div>
              </div>
              <div className={`h-1/2 ${currentTheme.bottom} rounded-b-xl`}>
                <div
                  className={`flex items-center justify-center h-full ${sizeClasses[size].split(" ")[2]} font-bold ${currentTheme.text}`}
                >
                  {value}
                </div>
              </div>
              {/* Highlight effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent rounded-xl pointer-events-none"></div>
            </div>
          </div>

          {/* Back card */}
          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <div
              className={`w-full h-full ${currentTheme.card} border rounded-xl ${currentTheme.shadow}`}
            >
              <div
                className={`h-1/2 ${currentTheme.top} rounded-t-xl border-b`}
              >
                <div
                  className={`flex items-center justify-center h-full ${sizeClasses[size].split(" ")[2]} font-bold ${currentTheme.text}`}
                >
                  {nextValue}
                </div>
              </div>
              <div className={`h-1/2 ${currentTheme.bottom} rounded-b-xl`}>
                <div
                  className={`flex items-center justify-center h-full ${sizeClasses[size].split(" ")[2]} font-bold ${currentTheme.text}`}
                >
                  {nextValue}
                </div>
              </div>
              {/* Highlight effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent rounded-xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface AdvancedFlipClockProps {
  theme?: "light" | "dark" | "apple";
  size?: "small" | "medium" | "large";
  showDate?: boolean;
  showSeconds?: boolean;
  format24h?: boolean;
}

const AdvancedFlipClock = ({
  theme = "apple",
  size = "medium",
  showDate = true,
  showSeconds = true,
  format24h = true,
}: AdvancedFlipClockProps) => {
  const [time, setTime] = useState(new Date());
  const [flipping, setFlipping] = useState({
    hours: false,
    minutes: false,
    seconds: false,
  });

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
        }, 700);
      }

      setTime(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const formatTime = (time: Date) => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    if (!format24h) {
      hours = hours % 12 || 12;
    }

    return {
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
      period: format24h ? "" : time.getHours() >= 12 ? "PM" : "AM",
    };
  };

  const getNextTime = (time: Date) => {
    const nextTime = new Date(time.getTime() + 1000);
    return formatTime(nextTime);
  };

  const currentTime = formatTime(time);
  const nextTime = getNextTime(time);

  const containerTheme = {
    light:
      "bg-gradient-to-br from-white to-gray-50 border-gray-200 text-gray-800",
    dark: "bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 text-white",
    apple:
      "bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 text-gray-800",
  };

  const separatorTheme = {
    light: "text-gray-600",
    dark: "text-gray-400",
    apple: "text-gray-600",
  };

  return (
    <div
      className={`flex flex-col items-center space-y-6 p-8 ${containerTheme[theme]} rounded-3xl shadow-2xl border backdrop-blur-sm`}
    >
      <h2
        className={`text-2xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}
      >
        Advanced Apple Clock
      </h2>

      <div className="flex items-center space-x-3">
        {/* Hours */}
        <div className="flex">
          <AdvancedFlipCard
            value={currentTime.hours[0]}
            nextValue={nextTime.hours[0]}
            isFlipping={flipping.hours}
            size={size}
            theme={theme}
          />
          <AdvancedFlipCard
            value={currentTime.hours[1]}
            nextValue={nextTime.hours[1]}
            isFlipping={flipping.hours}
            size={size}
            theme={theme}
          />
        </div>

        <div
          className={`text-4xl font-bold ${separatorTheme[theme]} mx-2 animate-pulse`}
        >
          :
        </div>

        {/* Minutes */}
        <div className="flex">
          <AdvancedFlipCard
            value={currentTime.minutes[0]}
            nextValue={nextTime.minutes[0]}
            isFlipping={flipping.minutes}
            size={size}
            theme={theme}
          />
          <AdvancedFlipCard
            value={currentTime.minutes[1]}
            nextValue={nextTime.minutes[1]}
            isFlipping={flipping.minutes}
            size={size}
            theme={theme}
          />
        </div>

        {showSeconds && (
          <>
            <div
              className={`text-4xl font-bold ${separatorTheme[theme]} mx-2 animate-pulse`}
            >
              :
            </div>

            {/* Seconds */}
            <div className="flex">
              <AdvancedFlipCard
                value={currentTime.seconds[0]}
                nextValue={nextTime.seconds[0]}
                isFlipping={flipping.seconds}
                size={size}
                theme={theme}
              />
              <AdvancedFlipCard
                value={currentTime.seconds[1]}
                nextValue={nextTime.seconds[1]}
                isFlipping={flipping.seconds}
                size={size}
                theme={theme}
              />
            </div>
          </>
        )}

        {!format24h && (
          <div
            className={`ml-4 text-xl font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
          >
            {currentTime.period}
          </div>
        )}
      </div>

      {showDate && (
        <div
          className={`text-lg font-medium ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
        >
          {time.toLocaleDateString("ru-RU", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      )}

      <div
        className={`text-sm ${theme === "dark" ? "text-gray-500" : "text-gray-400"} font-medium`}
      >
        Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
      </div>
    </div>
  );
};

export default AdvancedFlipClock;
