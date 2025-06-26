import { useState, useEffect } from "react";

interface FlipCardProps {
  value: string;
  nextValue: string;
  isFlipping: boolean;
}

const FlipCard = ({ value, nextValue, isFlipping }: FlipCardProps) => {
  return (
    <div className="relative w-20 h-28 mx-1">
      <div className="absolute inset-0 perspective-1000">
        <div
          className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-600 ${
            isFlipping ? "animate-flip" : ""
          }`}
        >
          {/* Front card */}
          <div className="absolute inset-0 backface-hidden">
            <div className="w-full h-full bg-gradient-to-b from-gray-200 to-gray-100 border border-gray-300 rounded-lg shadow-lg">
              <div className="h-1/2 bg-gradient-to-b from-white to-gray-100 rounded-t-lg border-b border-gray-300">
                <div className="flex items-center justify-center h-full text-4xl font-bold text-gray-800">
                  {value}
                </div>
              </div>
              <div className="h-1/2 bg-gradient-to-b from-gray-100 to-gray-200 rounded-b-lg">
                <div className="flex items-center justify-center h-full text-4xl font-bold text-gray-800">
                  {value}
                </div>
              </div>
            </div>
          </div>

          {/* Back card */}
          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <div className="w-full h-full bg-gradient-to-b from-gray-200 to-gray-100 border border-gray-300 rounded-lg shadow-lg">
              <div className="h-1/2 bg-gradient-to-b from-white to-gray-100 rounded-t-lg border-b border-gray-300">
                <div className="flex items-center justify-center h-full text-4xl font-bold text-gray-800">
                  {nextValue}
                </div>
              </div>
              <div className="h-1/2 bg-gradient-to-b from-gray-100 to-gray-200 rounded-b-lg">
                <div className="flex items-center justify-center h-full text-4xl font-bold text-gray-800">
                  {nextValue}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FlipClock = () => {
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

      // Check what needs to flip
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

  return (
    <div className="flex flex-col items-center space-y-6 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-2xl border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Apple Flip Clock
      </h2>

      <div className="flex items-center space-x-2">
        {/* Hours */}
        <div className="flex">
          <FlipCard
            value={currentTime.hours[0]}
            nextValue={nextTime.hours[0]}
            isFlipping={flipping.hours}
          />
          <FlipCard
            value={currentTime.hours[1]}
            nextValue={nextTime.hours[1]}
            isFlipping={flipping.hours}
          />
        </div>

        <div className="text-4xl font-bold text-gray-600 mx-2">:</div>

        {/* Minutes */}
        <div className="flex">
          <FlipCard
            value={currentTime.minutes[0]}
            nextValue={nextTime.minutes[0]}
            isFlipping={flipping.minutes}
          />
          <FlipCard
            value={currentTime.minutes[1]}
            nextValue={nextTime.minutes[1]}
            isFlipping={flipping.minutes}
          />
        </div>

        <div className="text-4xl font-bold text-gray-600 mx-2">:</div>

        {/* Seconds */}
        <div className="flex">
          <FlipCard
            value={currentTime.seconds[0]}
            nextValue={nextTime.seconds[0]}
            isFlipping={flipping.seconds}
          />
          <FlipCard
            value={currentTime.seconds[1]}
            nextValue={nextTime.seconds[1]}
            isFlipping={flipping.seconds}
          />
        </div>
      </div>

      <div className="text-sm text-gray-500 font-medium">
        {time.toLocaleDateString("ru-RU", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </div>
  );
};

export default FlipClock;
