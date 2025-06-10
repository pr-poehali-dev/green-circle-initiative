"use client";

import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/SparklesCore";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            className="animate-pulse"
            style={{
              animation: `pathDraw ${20 + Math.random() * 10}s linear infinite`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({
  title = "добро пожаловать",
}: {
  title?: string;
}) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Лампа как фоновый элемент */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
          <div
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto right-1/2 h-56 overflow-visible w-full bg-gradient-conic from-cyan-500/40 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top] animate-fade-in"
          >
            <div className="absolute w-[100%] left-0 bg-white/90 dark:bg-neutral-950/90 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute w-40 h-[100%] left-0 bg-white/90 dark:bg-neutral-950/90 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
          </div>
          <div
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto left-1/2 h-56 w-full bg-gradient-conic from-transparent via-transparent to-cyan-500/40 text-white [--conic-position:from_290deg_at_center_top] animate-fade-in"
          >
            <div className="absolute w-40 h-[100%] right-0 bg-white/90 dark:bg-neutral-950/90 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute w-[100%] right-0 bg-white/90 dark:bg-neutral-950/90 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          </div>
          <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-white/80 dark:bg-neutral-950/80 blur-2xl"></div>
          <div className="absolute inset-auto z-50 h-36 w-full -translate-y-1/2 rounded-full bg-cyan-500/30 opacity-50 blur-3xl"></div>
          <div className="absolute inset-auto z-30 h-36 w-[80%] -translate-y-[6rem] rounded-full bg-cyan-400/40 blur-2xl animate-scale-in"></div>

          <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-white/90 dark:bg-neutral-950/90"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="relative mb-8">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 relative z-20">
              {title}
            </h1>
            <div className="absolute inset-0 z-10">
              <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#64748b"
                speed={2}
              />
            </div>
          </div>

          <div
            className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
                        dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
                        overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Button
              variant="ghost"
              onClick={() => alert("🚀 Поехали! Кнопка работает!")}
              className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                            bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                            text-black dark:text-white transition-all duration-300 
                            hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                            hover:shadow-md dark:hover:shadow-neutral-800/50"
            >
              <span className="opacity-90 group-hover:opacity-100 transition-opacity text-slate-600">
                Пое
              </span>
              <span
                className="ml-3 opacity-70 group-hover:opacity-100 hover:translate-x-1.5 
                                transition-all duration-300"
              ></span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
