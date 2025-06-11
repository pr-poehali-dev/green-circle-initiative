"use client";

import { Button } from "@/components/ui/button";

export function BackgroundPaths({
  title = "добро пожаловать",
}: {
  title?: string;
}) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="relative mb-8">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-neutral-900 dark:text-white">
              {title}
            </h1>
          </div>

          <div className="inline-block">
            <Button
              variant="ghost"
              onClick={() => alert("🚀 Поехали! Кнопка работает!")}
              className="rounded-xl px-8 py-6 text-lg font-semibold 
                            bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 
                            text-neutral-900 dark:text-white transition-all duration-300 
                            hover:-translate-y-0.5 border border-neutral-200 dark:border-neutral-700"
            >
              Поехали! 🚀
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
