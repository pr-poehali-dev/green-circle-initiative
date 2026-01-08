/**
 * Flux Playground Page
 *
 * Страница-песочница для генерации изображений.
 * Пример: /flux или /image-generator
 */

"use client";

import { FluxPlayground } from "./FluxPlayground";

interface FluxPlaygroundPageProps {
  apiUrl: string;
  defaultModel?: string;
}

export function FluxPlaygroundPage({
  apiUrl,
  defaultModel = "flux-2-pro",
}: FluxPlaygroundPageProps) {
  return (
    <div className="h-screen">
      <FluxPlayground apiUrl={apiUrl} defaultModel={defaultModel} />
    </div>
  );
}

export default FluxPlaygroundPage;
