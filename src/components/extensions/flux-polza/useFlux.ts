/**
 * useFlux - React hook for Flux image generation
 *
 * Provider: Polza.ai
 */

import { useState, useCallback } from "react";

interface FluxConfig {
  apiUrl: string;
}

interface GenerateParams {
  prompt: string;
  model?: string;
  aspect_ratio?: string;
  resolution?: string;
}

interface GenerateResult {
  success: boolean;
  requestId?: string;
  error?: string;
}

interface StatusResult {
  success: boolean;
  status?: string;
  imageUrl?: string;
  error?: string;
}

interface Model {
  id: string;
  name: string;
  description?: string;
}

interface ModelsResult {
  success: boolean;
  models?: Model[];
  error?: string;
}

export function useFlux({ apiUrl }: FluxConfig) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = useCallback(
    async (params: GenerateParams): Promise<GenerateResult> => {
      setIsLoading(true);
      setError(null);

      try {
        console.log('[Flux] Starting generation with params:', params);
        const response = await fetch(`${apiUrl}?action=generate`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(params),
        });

        console.log('[Flux] Response status:', response.status);
        console.log('[Flux] Response headers:', Object.fromEntries(response.headers.entries()));

        const data = await response.json();
        console.log('[Flux] Response data:', data);

        if (!response.ok) {
          const errorMsg = data.error || "Generation failed";
          setError(errorMsg);
          return { success: false, error: errorMsg };
        }

        return { success: true, requestId: data.requestId };
      } catch (err) {
        console.error('[Flux] Fetch error:', err);
        const errorMsg = err instanceof Error ? err.message : "Network error";
        setError(errorMsg);
        return { success: false, error: errorMsg };
      } finally {
        setIsLoading(false);
      }
    },
    [apiUrl]
  );

  const checkStatus = useCallback(
    async (requestId: string): Promise<StatusResult> => {
      try {
        console.log('[Flux] Checking status for requestId:', requestId);
        const response = await fetch(`${apiUrl}?action=status`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ requestId }),
        });

        console.log('[Flux] Status response status:', response.status);
        const data = await response.json();
        console.log('[Flux] Status response data:', data);

        if (!response.ok) {
          return { success: false, error: data.error || "Status check failed" };
        }

        return {
          success: true,
          status: data.status,
          imageUrl: data.imageUrl,
          error: data.error,
        };
      } catch (err) {
        console.error('[Flux] Status check error:', err);
        return {
          success: false,
          error: err instanceof Error ? err.message : "Network error",
        };
      }
    },
    [apiUrl]
  );

  const getModels = useCallback(async (): Promise<ModelsResult> => {
    try {
      const response = await fetch(`${apiUrl}?action=models`);
      const data = await response.json();

      if (!response.ok) {
        return { success: false, error: data.error || "Failed to load models" };
      }

      return { success: true, models: data.models };
    } catch (err) {
      return {
        success: false,
        error: err instanceof Error ? err.message : "Network error",
      };
    }
  }, [apiUrl]);

  const generateAndWait = useCallback(
    async (
      params: GenerateParams,
      onProgress?: (status: string) => void,
      maxWaitMs: number = 180000,
      pollIntervalMs: number = 3000
    ): Promise<StatusResult> => {
      setIsLoading(true);
      setError(null);

      try {
        // Start generation
        const genResult = await generate(params);
        if (!genResult.success || !genResult.requestId) {
          setIsLoading(false);
          return { success: false, error: genResult.error };
        }

        const requestId = genResult.requestId;
        const startTime = Date.now();

        // Poll for result
        while (Date.now() - startTime < maxWaitMs) {
          const statusResult = await checkStatus(requestId);

          if (!statusResult.success) {
            setIsLoading(false);
            return statusResult;
          }

          const status = statusResult.status?.toLowerCase();
          
          if (status === "completed" && statusResult.imageUrl) {
            console.log('[Flux] ✅ Generation completed! Image URL:', statusResult.imageUrl);
            onProgress?.("Готово! Загружаем изображение...");
            setIsLoading(false);
            return statusResult;
          }
          
          if (status === "completed" && !statusResult.imageUrl) {
            console.log('[Flux] ⚠️ Status is COMPLETED but no imageUrl!', statusResult);
            onProgress?.("Обработка завершена, ожидаем URL...");
          } else {
            onProgress?.(status || "processing");
          }

          if (status === "failed") {
            setIsLoading(false);
            setError(statusResult.error || "Generation failed");
            return { success: false, error: statusResult.error || "Generation failed" };
          }

          await new Promise((resolve) => setTimeout(resolve, pollIntervalMs));
        }

        setIsLoading(false);
        setError("Generation timeout");
        return { success: false, error: "Generation timeout" };
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : "Unknown error";
        setIsLoading(false);
        setError(errorMsg);
        return { success: false, error: errorMsg };
      }
    },
    [generate, checkStatus]
  );

  return {
    generate,
    checkStatus,
    getModels,
    generateAndWait,
    isLoading,
    error,
  };
}

export default useFlux;