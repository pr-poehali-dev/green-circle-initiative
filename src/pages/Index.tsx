// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 relative overflow-hidden">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="color-black text-8xl font-black text-yellow-400 mb-8">
            Валле.
          </h1>
          <img
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="WALL-E робот"
            className="mx-auto rounded-lg shadow-2xl w-96 h-64 object-cover"
          />
        </div>
        <p className="text-xl text-gray-600">
          тут будет отображаться ваш проектикус
        </p>
      </div>

      {/* Анимированный ВАЛЛИ внизу */}
      <div className="fixed bottom-4 left-0 animate-slide-robot">
        <div className="walle-robot">
          {/* Тело робота */}
          <div className="walle-body">
            {/* Глаза */}
            <div className="walle-eyes">
              <div className="walle-eye left animate-blink">
                <div className="eye-lens"></div>
              </div>
              <div className="walle-eye right animate-blink">
                <div className="eye-lens"></div>
              </div>
            </div>
            {/* Шея */}
            <div className="walle-neck"></div>
          </div>

          {/* Гусеницы */}
          <div className="walle-tracks">
            <div className="track left-track">
              <div className="track-segment animate-track-roll"></div>
              <div
                className="track-segment animate-track-roll"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="track-segment animate-track-roll"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
            <div className="track right-track">
              <div className="track-segment animate-track-roll"></div>
              <div
                className="track-segment animate-track-roll"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="track-segment animate-track-roll"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .walle-robot {
          width: 80px;
          height: 100px;
          position: relative;
        }

        .walle-body {
          width: 60px;
          height: 50px;
          background: linear-gradient(145deg, #8b7355, #6b5b47);
          border-radius: 8px;
          position: relative;
          border: 2px solid #4a4035;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        .walle-eyes {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px;
          height: 100%;
        }

        .walle-eye {
          width: 16px;
          height: 16px;
          background: radial-gradient(circle, #2563eb 30%, #1e40af 70%);
          border-radius: 50%;
          border: 2px solid #334155;
          position: relative;
        }

        .eye-lens {
          width: 8px;
          height: 8px;
          background: #ffffff;
          border-radius: 50%;
          position: absolute;
          top: 2px;
          left: 2px;
          opacity: 0.8;
        }

        .walle-neck {
          width: 8px;
          height: 12px;
          background: #6b5b47;
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 0 0 4px 4px;
        }

        .walle-tracks {
          position: absolute;
          bottom: -25px;
          left: 0;
          width: 100%;
          height: 20px;
          display: flex;
          justify-content: space-between;
        }

        .track {
          width: 35px;
          height: 20px;
          background: #374151;
          border-radius: 10px;
          position: relative;
          overflow: hidden;
          border: 2px solid #1f2937;
        }

        .track-segment {
          width: 8px;
          height: 4px;
          background: #4b5563;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 2px;
        }

        @keyframes slideRobot {
          0% {
            transform: translateX(-100px);
          }
          50% {
            transform: translateX(calc(100vw - 100px));
          }
          100% {
            transform: translateX(-100px);
          }
        }

        @keyframes trackRoll {
          0% {
            transform: translateX(-10px) translateY(-50%);
          }
          100% {
            transform: translateX(40px) translateY(-50%);
          }
        }

        @keyframes blink {
          0%,
          90%,
          100% {
            transform: scaleY(1);
          }
          95% {
            transform: scaleY(0.1);
          }
        }

        .animate-slide-robot {
          animation: slideRobot 10s linear infinite;
        }

        .animate-track-roll {
          animation: trackRoll 0.5s linear infinite;
        }

        .animate-blink {
          animation: blink 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
