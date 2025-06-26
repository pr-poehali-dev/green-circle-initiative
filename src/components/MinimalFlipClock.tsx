import { useState, useEffect } from "react";

interface MinimalFlipCardProps {
  value: string;
  nextValue: string;
  isFlipping: boolean;
}

const MinimalFlipCard = ({
  value,
  nextValue,
  isFlipping,
}: MinimalFlipCardProps) => {
  return (
    <div className="relative w-14 h-20 mx-0.5">
      <div className="absolute inset-0 perspective-1000">
        <div
          className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ease-out ${
            isFlipping ? "animate-flip-fast" : ""
          }`}
        >
          {/* Front card */}
          <div className="absolute inset-0 backface-hidden">
            <div className="w-full h-full bg-black border border-gray-800 rounded-lg shadow-lg">
              <div className="h-1/2 bg-gradient-to-b from-gray-900 to-black rounded-t-lg border-b border-gray-700">
                <div className="flex items-center justify-center h-full text-3xl font-light text-white">
                  {value}
                </div>
              </div>
              <div className="h-1/2 bg-gradient-to-b from-black to-gray-900 rounded-b-lg">
                <div className="flex items-center justify-center h-full text-3xl font-light text-white">
                  {value}
                </div>
              </div>
            </div>
          </div>

          {/* Back card */}
          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <div className="w-full h-full bg-black border border-gray-800 rounded-lg shadow-lg">
              <div className="h-1/2 bg-gradient-to-b from-gray-900 to-black rounded-t-lg border-b border-gray-700">
                <div className="flex items-center justify-center h-full text-3xl font-light text-white">
                  {nextValue}
                </div>
              </div>
              <div className="h-1/2 bg-gradient-to-b from-black to-gray-900 rounded-b-lg">
                <div className="flex items-center justify-center h-full text-3xl font-light text-white">
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

const MinimalFlipClock = () => {
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
        }, 500);
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
    <div className="flex flex-col items-center space-y-4 p-6 bg-gray-950 rounded-2xl shadow-2xl border border-gray-800">
      <div className="flex items-center space-x-1">
        {/* Hours */}
        <div className="flex space-x-0.5">
          <MinimalFlipCard
            value={currentTime.hours[0]}
            nextValue={nextTime.hours[0]}
            isFlipping={flipping.hours}
          />
          <MinimalFlipCard
            value={currentTime.hours[1]}
            nextValue={nextTime.hours[1]}
            isFlipping={flipping.hours}
          />
        </div>

        <div className="text-2xl font-light text-gray-400 mx-2">:</div>

        {/* Minutes */}
        <div className="flex space-x-0.5">
          <MinimalFlipCard
            value={currentTime.minutes[0]}
            nextValue={nextTime.minutes[0]}
            isFlipping={flipping.minutes}
          />
          <MinimalFlipCard
            value={currentTime.minutes[1]}
            nextValue={nextTime.minutes[1]}
            isFlipping={flipping.minutes}
          />
        </div>

        <div className="text-2xl font-light text-gray-400 mx-2">:</div>

        {/* Seconds */}
        <div className="flex space-x-0.5">
          <MinimalFlipCard
            value={currentTime.seconds[0]}
            nextValue={nextTime.seconds[0]}
            isFlipping={flipping.seconds}
          />
          <MinimalFlipCard
            value={currentTime.seconds[1]}
            nextValue={nextTime.seconds[1]}
            isFlipping={flipping.seconds}
          />
        </div>
      </div>

      <div className="text-xs text-gray-600 font-medium tracking-wider">
        MINIMAL CLOCK
      </div>
    </div>
  );
};

export default MinimalFlipClock;
