import { useState } from "react";
import { Link } from "react-router-dom";

const FUNCTIONS = [
  {
    label: "Fast",
    target: "200ms",
    url: "https://devfunctions.poehali.dev/554370fc-33bd-4929-9585-b4d6c2daea6d",
  },
  {
    label: "Medium",
    target: "5s",
    url: "https://devfunctions.poehali.dev/8ad7a01c-b34a-4cf0-8dd4-19459efb7c6e",
  },
  {
    label: "Slow",
    target: "10s",
    url: "https://devfunctions.poehali.dev/97be1cf1-8f7e-4f98-9b9f-5fd7eaabde4c",
  },
];

type Result = {
  actual_ms: number;
  target_ms: number;
  label: string;
  wall_ms: number;
};

type BenchState = {
  status: "idle" | "loading" | "done" | "error";
  result?: Result;
  error?: string;
};

export default function Bench() {
  const [states, setStates] = useState<BenchState[]>(
    FUNCTIONS.map(() => ({ status: "idle" }))
  );

  const call = async (index: number) => {
    setStates((prev) => {
      const next = [...prev];
      next[index] = { status: "loading" };
      return next;
    });

    const t0 = performance.now();
    try {
      const res = await fetch(FUNCTIONS[index].url);
      const wall_ms = Math.round(performance.now() - t0);
      const data = await res.json();
      const parsed = typeof data === "string" ? JSON.parse(data) : data;
      setStates((prev) => {
        const next = [...prev];
        next[index] = { status: "done", result: { ...parsed, wall_ms } };
        return next;
      });
    } catch (e: unknown) {
      const wall_ms = Math.round(performance.now() - t0);
      setStates((prev) => {
        const next = [...prev];
        next[index] = {
          status: "error",
          error: e instanceof Error ? e.message : "Unknown error",
          result: { wall_ms } as Result,
        };
        return next;
      });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-8">
      <div className="w-full max-w-xl space-y-6">
        <div className="text-center space-y-1">
          <h1 className="text-3xl font-bold text-neutral-100">Benchmark</h1>
          <p className="text-neutral-500">Замер времени ответа бекенд-функций</p>
        </div>

        <div className="space-y-4">
          {FUNCTIONS.map((fn, i) => {
            const state = states[i];
            return (
              <div
                key={fn.label}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 flex items-center justify-between gap-4"
              >
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-100 font-semibold">{fn.label}</span>
                    <span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-0.5 rounded-full">
                      {fn.target}
                    </span>
                  </div>
                  {state.status === "idle" && (
                    <p className="text-sm text-neutral-600">Ещё не вызывали</p>
                  )}
                  {state.status === "loading" && (
                    <p className="text-sm text-yellow-400 animate-pulse">Ждём ответа...</p>
                  )}
                  {state.status === "done" && state.result && (
                    <div className="text-sm space-y-0.5">
                      <p className="text-green-400">
                        Wall time: <span className="font-mono font-bold">{state.result.wall_ms} ms</span>
                      </p>
                      <p className="text-neutral-500">
                        Server sleep: <span className="font-mono">{state.result.actual_ms} ms</span>
                      </p>
                    </div>
                  )}
                  {state.status === "error" && (
                    <div className="text-sm space-y-0.5">
                      <p className="text-red-400">Ошибка: {state.error}</p>
                      {state.result?.wall_ms && (
                        <p className="text-neutral-500 font-mono">{state.result.wall_ms} ms</p>
                      )}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => call(i)}
                  disabled={state.status === "loading"}
                  className="shrink-0 px-4 py-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 disabled:opacity-40 disabled:cursor-not-allowed text-neutral-100 text-sm font-medium transition-colors"
                >
                  {state.status === "loading" ? "..." : "Вызвать"}
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/" className="text-neutral-500 hover:text-neutral-300 text-sm underline">
            ← Назад
          </Link>
        </div>
      </div>
    </div>
  );
}