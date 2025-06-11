import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 color-black text-black">
          Добро поебаловать
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          тут будет отображаться ваш проект
        </p>
        <div className="w-full max-w-4xl mx-auto px-4">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth whitespace-nowrap snap-x snap-mandatory rounded-lg shadow-sm relative">
            <button className="relative neon-pink px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 active:scale-95 flex-shrink-0 min-w-[150px] snap-center inline-block cursor-pointer group overflow-hidden">
              <span className="block group-hover:tracking-wider transition-all duration-300 relative z-10">
                Начать
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0"></span>
            </button>
            <button className="relative neon-green px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 active:scale-95 flex-shrink-0 min-w-[150px] snap-center inline-block cursor-pointer group overflow-hidden">
              <span className="block group-hover:tracking-wider transition-all duration-300 relative z-10">
                Узнать больше
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0"></span>
            </button>
            <button className="relative neon-blue px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 active:scale-95 flex-shrink-0 min-w-[150px] snap-center inline-block cursor-pointer group overflow-hidden">
              <span className="block group-hover:tracking-wider transition-all duration-300 relative z-10">
                Связаться с нами
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0"></span>
            </button>
            <button className="relative neon-purple px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 active:scale-95 flex-shrink-0 min-w-[150px] snap-center inline-block cursor-pointer group overflow-hidden">
              <span className="block group-hover:tracking-wider transition-all duration-300 relative z-10">
                Примеры
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0"></span>
            </button>
            <button className="relative neon-orange px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 active:scale-95 flex-shrink-0 min-w-[150px] snap-center inline-block cursor-pointer group overflow-hidden">
              <span className="block group-hover:tracking-wider transition-all duration-300 relative z-10">
                Портфолио
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0"></span>
            </button>
            <button className="relative neon-cyan px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 active:scale-95 flex-shrink-0 min-w-[150px] snap-center inline-block cursor-pointer group overflow-hidden">
              <span className="block group-hover:tracking-wider transition-all duration-300 relative z-10">
                Блог
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0"></span>
            </button>
          </div>
        </div>

        <style jsx>{`
          .neon-pink {
            background: linear-gradient(45deg, #ff0080, #ff8c00);
            box-shadow:
              0 0 20px rgba(255, 0, 128, 0.5),
              0 0 40px rgba(255, 0, 128, 0.3),
              0 0 60px rgba(255, 0, 128, 0.1);
            border: none;
          }

          .neon-purple {
            background: linear-gradient(45deg, #8000ff, #cc00aa);
            box-shadow:
              0 0 20px rgba(128, 0, 255, 0.5),
              0 0 40px rgba(128, 0, 255, 0.3),
              0 0 60px rgba(128, 0, 255, 0.1);
            border: none;
          }

          .neon-purple:hover {
            box-shadow:
              0 0 30px rgba(128, 0, 255, 0.8),
              0 0 50px rgba(128, 0, 255, 0.5),
              0 0 80px rgba(128, 0, 255, 0.3);
            transform: translateY(-2px);
          }

          .neon-orange {
            background: linear-gradient(45deg, #ff4500, #ff8c00);
            box-shadow:
              0 0 20px rgba(255, 69, 0, 0.5),
              0 0 40px rgba(255, 69, 0, 0.3),
              0 0 60px rgba(255, 69, 0, 0.1);
            border: none;
          }

          .neon-orange:hover {
            box-shadow:
              0 0 30px rgba(255, 69, 0, 0.8),
              0 0 50px rgba(255, 69, 0, 0.5),
              0 0 80px rgba(255, 69, 0, 0.3);
            transform: translateY(-2px);
          }

          .neon-cyan {
            background: linear-gradient(45deg, #00ffff, #0099cc);
            box-shadow:
              0 0 20px rgba(0, 255, 255, 0.5),
              0 0 40px rgba(0, 255, 255, 0.3),
              0 0 60px rgba(0, 255, 255, 0.1);
            border: none;
          }

          .neon-cyan:hover {
            box-shadow:
              0 0 30px rgba(0, 255, 255, 0.8),
              0 0 50px rgba(0, 255, 255, 0.5),
              0 0 80px rgba(0, 255, 255, 0.3);
            transform: translateY(-2px);
          }

          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          .scroll-smooth {
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .scroll-smooth::-webkit-scrollbar {
            display: none;
          }

          .snap-x {
            scroll-snap-type: x mandatory;
          }

          .snap-center {
            scroll-snap-align: center;
          }

          /* Neon button glow effect */
          .neon-pink::before,
          .neon-green::before,
          .neon-blue::before,
          .neon-purple::before,
          .neon-orange::before,
          .neon-cyan::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            right: -50%;
            bottom: -50%;
            background: inherit;
            filter: blur(40px);
            opacity: 0.5;
            z-index: -1;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transform: scale(0.8);
          }

          .neon-pink:hover::before,
          .neon-green:hover::before,
          .neon-blue:hover::before,
          .neon-purple:hover::before,
          .neon-orange:hover::before,
          .neon-cyan:hover::before {
            filter: blur(60px);
            opacity: 0.7;
            transform: scale(1);
          }

          /* Pulse animation for subtle hover effect */
          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }

          .neon-pink:hover,
          .neon-green:hover,
          .neon-blue:hover,
          .neon-purple:hover,
          .neon-orange:hover,
          .neon-cyan:hover {
            animation: pulse 1.5s infinite;
          }

          /* Hover state text shadow */
          .neon-pink:hover span,
          .neon-green:hover span,
          .neon-blue:hover span,
          .neon-purple:hover span,
          .neon-orange:hover span,
          .neon-cyan:hover span {
            text-shadow: 
              0 0 10px currentColor,
              0 0 20px currentColor,
              0 0 30px currentColor;
          }

          /* Scrollbar and interaction improvements */
          @media (hover: hover) {
            .scroll-smooth {
              scrollbar-color: rgba(128,128,128,0.3) transparent;
            }
          }

          /* Prevent text selection */
          .scroll-smooth > * {
            user-select: none;
            -webkit-user-select: none;
          }

          /* Responsive adjustments */
          @media (max-width: 640px) {
            .scroll-smooth {
              gap: 1rem;
              padding: 0.5rem;
            }
            
            .scroll-smooth > * {
              min-w-[120px];
              padding: 0.75rem;
            }
          }

          /* Advanced interaction effects */
          .scroll-smooth {
            perspective: 1000px;
          }

          .neon-pink,
          .neon-green,
          .neon-blue,
          .neon-purple,
          .neon-orange,
          .neon-cyan {
            transition: 
              transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              box-shadow 0.3s ease,
              filter 0.3s ease;
            will-change: transform, box-shadow, filter;
          }

          .neon-pink:hover,
          .neon-green:hover,
          .neon-blue:hover,
          .neon-purple:hover,
          .neon-orange:hover,
          .neon-cyan:hover {
            transform: 
              perspective(500px) 
              rotateX(5deg) 
              rotateY(-5deg) 
              translateZ(50px);
            box-shadow: 
              0 10px 20px rgba(0,0,0,0.12), 
              0 4px 8px rgba(0,0,0,0.06);
            filter: brightness(1.1);
          }

          /* Directional aware hover */
          .neon-pink::after,
          .neon-green::after,
          .neon-blue::after,
          .neon-purple::after,
          .neon-orange::after,
          .neon-cyan::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(
              circle at center, 
              rgba(255,255,255,0.2) 0%, 
              transparent 70%
            );
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
            z-index: 1;
          }

          .neon-pink:hover::after,
          .neon-green:hover::after,
          .neon-blue:hover::after,
          .neon-purple:hover::after,
          .neon-orange:hover::after,
          .neon-cyan:hover::after {
            opacity: 1;
          }

          /* Subtle border animation on hover */
          @keyframes borderPulse {
            0%, 100% { border-color: transparent; }
            50% { border-color: rgba(255,255,255,0.3); }
          }

          .neon-pink:hover,
          .neon-green:hover,
          .neon-blue:hover,
          .neon-purple:hover,
          .neon-orange:hover,
          .neon-cyan:hover {
            animation: borderPulse 1.5s infinite;
            border: 1px solid rgba(255,255,255,0.1);
          }

          /* Optimize for performance */
          @media (prefers-reduced-motion: reduce) {
            .neon-pink:hover,
            .neon-green:hover,
            .neon-blue:hover,
            .neon-purple:hover,
            .neon-orange:hover,
            .neon-cyan:hover {
              transform: none;
              animation: none;
            }
          }

          /* Ensure hardware acceleration */
          .scroll-smooth > * {
            transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000px;
          }

          /* Final touch: accessibility and focus states */
          .neon-pink:focus,
          .neon-green:focus,
          .neon-blue:focus,
          .neon-purple:focus,
          .neon-orange:focus,
          .neon-cyan:focus {
            outline: 2px solid rgba(255,255,255,0.5);
            outline-offset: 3px;
            box-shadow: 
              0 0 15px rgba(255,255,255,0.3),
              0 0 25px currentColor;
          }

          /* Final performance and accessibility optimization */
          @supports ((-webkit-touch-callout: none) or (touch-action: manipulation)) {
            .scroll-smooth > * {
              touch-action: manipulation;
              -webkit-tap-highlight-color: transparent;
            }
          }

          /* High contrast and screen reader support */
          @media (forced-colors: active) {
            .neon-pink,
            .neon-green,
            .neon-blue,
            .neon-purple,
            .neon-orange,
            .neon-cyan {
              border: 2px solid currentColor;
              background: transparent;
            }
          }

          .neon-pink:hover {
            box-shadow:
              0 0 30px rgba(255, 0, 128, 0.8),
              0 0 50px rgba(255, 0, 128, 0.5),
              0 0 80px rgba(255, 0, 128, 0.3);
            transform: translateY(-2px);
          }

          .neon-green {
            background: linear-gradient(45deg, #00ff88, #00cc66);
            box-shadow:
              0 0 20px rgba(0, 255, 136, 0.5),
              0 0 40px rgba(0, 255, 136, 0.3),
              0 0 60px rgba(0, 255, 136, 0.1);
            border: none;
          }

          .neon-green:hover {
            box-shadow:
              0 0 30px rgba(0, 255, 136, 0.8),
              0 0 50px rgba(0, 255, 136, 0.5),
              0 0 80px rgba(0, 255, 136, 0.3);
            transform: translateY(-2px);
          }

          .neon-blue {
            background: linear-gradient(45deg, #0088ff, #0066cc);
            box-shadow:
              0 0 20px rgba(0, 136, 255, 0.5),
              0 0 40px rgba(0, 136, 255, 0.3),
              0 0 60px rgba(0, 136, 255, 0.1);
            border: none;
          }

          .neon-blue:hover {
            box-shadow:
              0 0 30px rgba(0, 136, 255, 0.8),
              0 0 50px rgba(0, 136, 255, 0.5),
              0 0 80px rgba(0, 136, 255, 0.3);
            transform: translateY(-2px);
          }
        `}</style>
      </div>
    </div>
  );
};

export default Index;
