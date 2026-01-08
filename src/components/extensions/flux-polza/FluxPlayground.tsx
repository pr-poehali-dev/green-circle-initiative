/**
 * Flux Playground - Песочница для генерации изображений
 *
 * Провайдер: Polza.ai
 * Модель: Flux 2 Pro
 */

"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { useFlux } from "./useFlux";

// =============================================================================
// TYPES
// =============================================================================

interface GeneratedImage {
  id: string;
  prompt: string;
  imageUrl: string;
  model: string;
  aspectRatio: string;
  timestamp: number;
}

interface FluxModel {
  id: string;
  name: string;
  description?: string;
}

interface FluxPlaygroundProps {
  apiUrl: string;
  defaultModel?: string;
}

// =============================================================================
// ASPECT RATIO OPTIONS
// =============================================================================

const ASPECT_RATIOS = [
  { value: "1:1", label: "1:1", icon: "□" },
  { value: "16:9", label: "16:9", icon: "▭" },
  { value: "9:16", label: "9:16", icon: "▯" },
  { value: "4:3", label: "4:3", icon: "▭" },
  { value: "3:4", label: "3:4", icon: "▯" },
  { value: "3:2", label: "3:2", icon: "▭" },
  { value: "2:3", label: "2:3", icon: "▯" },
  { value: "21:9", label: "21:9", icon: "▬" },
];

const RESOLUTIONS = [
  { value: "1K", label: "1K" },
  { value: "2K", label: "2K" },
  { value: "4K", label: "4K" },
];

// =============================================================================
// MODEL DROPDOWN
// =============================================================================

function ModelDropdown({
  value,
  onChange,
  models,
  loading,
}: {
  value: string;
  onChange: (value: string) => void;
  models: FluxModel[];
  loading: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedModel = models.find((m) => m.id === value);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => !loading && setOpen(!open)}
        disabled={loading}
        className="w-full flex items-center justify-between px-3 py-2 bg-[#2d2d2d] border border-gray-600 rounded text-sm text-left hover:border-gray-500 focus:outline-none focus:border-purple-500 disabled:opacity-50"
      >
        <span className="truncate">
          {loading ? "Загрузка..." : selectedModel?.name || value}
        </span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && models.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-[#2d2d2d] border border-gray-600 rounded shadow-lg max-h-60 overflow-y-auto">
          {models.map((model) => (
            <button
              key={model.id}
              type="button"
              onClick={() => {
                onChange(model.id);
                setOpen(false);
              }}
              className={`w-full px-3 py-2 text-sm text-left hover:bg-[#3d3d3d] ${
                model.id === value ? "bg-purple-600/20 text-purple-400" : ""
              }`}
            >
              <div>{model.name}</div>
              {model.description && (
                <div className="text-xs text-gray-500">{model.description}</div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// =============================================================================
// COMPONENT
// =============================================================================

export function FluxPlayground({
  apiUrl,
  defaultModel = "flux-2-pro",
}: FluxPlaygroundProps) {
  const [prompt, setPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState(defaultModel);
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [resolution, setResolution] = useState("1K");
  const [models, setModels] = useState<FluxModel[]>([]);
  const [modelsLoading, setModelsLoading] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [status, setStatus] = useState<string | null>(null);

  const { generateAndWait, getModels, isLoading, error } = useFlux({ apiUrl });

  // Load models
  useEffect(() => {
    const loadModels = async () => {
      setModelsLoading(true);
      const result = await getModels();
      if (result.success && result.models) {
        setModels(result.models);
      }
      setModelsLoading(false);
    };
    loadModels();
  }, [getModels]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const text = prompt.trim();
    if (!text || isLoading) return;

    setStatus("Запуск генерации...");

    const result = await generateAndWait(
      {
        prompt: text,
        model: selectedModel,
        aspect_ratio: aspectRatio,
        resolution,
      },
      (s) => setStatus(`Статус: ${s}`)
    );

    if (result.success && result.imageUrl) {
      setStatus("✅ Изображение готово!");
      const newImage: GeneratedImage = {
        id: crypto.randomUUID(),
        prompt: text,
        imageUrl: result.imageUrl,
        model: selectedModel,
        aspectRatio,
        timestamp: Date.now(),
      };
      setGeneratedImages((prev) => [newImage, ...prev]);
      setPrompt("");
      
      // Clear status after a delay to show success message
      setTimeout(() => setStatus(null), 3000);
    } else {
      setStatus(null);
    }
  };

  const clearHistory = () => setGeneratedImages([]);

  return (
    <div className="flex h-full bg-[#1e1e1e] text-white">
      {/* Левая панель - Настройки */}
      <div className="w-80 border-r border-gray-700 flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-lg font-medium">Генератор изображений</h1>
        </div>

        <div className="p-4 space-y-4 flex-1 overflow-y-auto">
          {/* Модель */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Модель</label>
            <ModelDropdown
              value={selectedModel}
              onChange={setSelectedModel}
              models={models}
              loading={modelsLoading}
            />
          </div>

          {/* Соотношение сторон */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Соотношение сторон</label>
            <div className="grid grid-cols-4 gap-2">
              {ASPECT_RATIOS.map((ratio) => (
                <button
                  key={ratio.value}
                  type="button"
                  onClick={() => setAspectRatio(ratio.value)}
                  className={`px-2 py-2 text-xs border rounded transition-colors ${
                    aspectRatio === ratio.value
                      ? "bg-purple-600 border-purple-500 text-white"
                      : "bg-[#2d2d2d] border-gray-600 hover:border-gray-500"
                  }`}
                >
                  <div className="text-base mb-1">{ratio.icon}</div>
                  <div>{ratio.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Разрешение */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Разрешение</label>
            <div className="flex gap-2">
              {RESOLUTIONS.map((res) => (
                <button
                  key={res.value}
                  type="button"
                  onClick={() => setResolution(res.value)}
                  className={`flex-1 px-3 py-2 text-sm border rounded transition-colors ${
                    resolution === res.value
                      ? "bg-purple-600 border-purple-500 text-white"
                      : "bg-[#2d2d2d] border-gray-600 hover:border-gray-500"
                  }`}
                >
                  {res.label}
                </button>
              ))}
            </div>
          </div>

          {/* Промпт */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Промпт</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Опишите изображение, которое хотите создать..."
              rows={6}
              className="w-full px-3 py-2 bg-[#2d2d2d] border border-gray-600 rounded text-sm resize-none focus:outline-none focus:border-purple-500 placeholder-gray-500"
            />
          </div>

          {/* Кнопка генерации */}
          <button
            onClick={handleSubmit}
            disabled={isLoading || !prompt.trim()}
            className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed rounded font-medium transition-colors"
          >
            {isLoading ? "Генерация..." : "Создать изображение"}
          </button>

          {/* Статус генерации */}
          {isLoading && status && (
            <div className="px-3 py-2 bg-purple-900/30 border border-purple-800 rounded">
              <p className="text-sm text-purple-300 flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {status}
              </p>
            </div>
          )}

          {/* Ошибка */}
          {error && (
            <div className="px-3 py-2 bg-red-900/30 border border-red-800 rounded">
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}
        </div>

        {/* Кнопка очистки */}
        {generatedImages.length > 0 && (
          <div className="p-4 border-t border-gray-700">
            <button
              onClick={clearHistory}
              className="w-full px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-600 rounded hover:border-gray-500 transition-colors"
            >
              Очистить историю
            </button>
          </div>
        )}
      </div>

      {/* Правая панель - Результаты */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          {generatedImages.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-lg mb-2">Ваши изображения появятся здесь</p>
                <p className="text-sm">Введите промпт и нажмите «Создать изображение»</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {generatedImages.map((img) => (
                <div key={img.id} className="bg-[#2d2d2d] rounded-lg overflow-hidden group">
                  <div className="relative aspect-square">
                    <img
                      src={img.imageUrl}
                      alt={img.prompt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-3 w-full">
                        <p className="text-sm line-clamp-3">{img.prompt}</p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                          <span>{img.model}</span>
                          <span>•</span>
                          <span>{img.aspectRatio}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 flex gap-2">
                    <a
                      href={img.imageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-1.5 text-sm text-center bg-[#3d3d3d] hover:bg-[#4d4d4d] rounded transition-colors"
                    >
                      Открыть
                    </a>
                    <a
                      href={img.imageUrl}
                      download={`flux-${img.id}.png`}
                      className="flex-1 px-3 py-1.5 text-sm text-center bg-purple-600 hover:bg-purple-700 rounded transition-colors"
                    >
                      Скачать
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Статус генерации */}
        {isLoading && status && (
          <div className="px-6 py-3 bg-purple-900/30 border-t border-purple-800">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-sm text-purple-300">{status}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FluxPlayground;