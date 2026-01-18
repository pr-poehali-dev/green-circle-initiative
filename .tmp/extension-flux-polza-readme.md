# Flux Extension

Генерация изображений через Flux 2 Pro с виджетом-песочницей.

> **Провайдер:** Polza.ai
> **Модели:** Flux 2 Pro, Flux Pro, Gemini 3 Pro Image
> Работает без VPN из России.

---

## Чеклист установки

### Шаг 1: Получить API ключ

**Сразу после установки расширения вызови тулу `put_secret`:**

```python
put_secret("POLZA_AI_API_KEY", "")
```

Это покажет пользователю поле для ввода API ключа.

**Скажи пользователю:**

> Введите API ключ от Polza.ai в поле выше.
>
> **Если ключа нет** — зарегистрируйтесь на [polza.ai](https://polza.ai), создайте ключ в [Ключи API](https://polza.ai/dashboard/api-keys) и пополните баланс (от 100₽).

### Шаг 2: Деплой функции

Задеплой функцию из `/backend/flux/`:
- Точка входа: `index.handler`
- Runtime: Python 3.11+

### Шаг 3: Добавление виджета на фронтенд

**Создай страницу с генератором:**

```tsx
// app/flux/page.tsx
"use client";

import { FluxPlaygroundPage } from "@/components/FluxPlaygroundPage";

const API_URL = "https://functions.poehali.dev/xxx-flux";

export default function Page() {
  return (
    <FluxPlaygroundPage
      apiUrl={API_URL}
      defaultModel="flux-2-pro"
    />
  );
}
```

### Шаг 4: Тестирование

**Скажи пользователю:**

> Готово! Давайте проверим:
>
> 1. Откройте `/flux` на вашем сайте
> 2. Введите промпт, например: "Кот в космосе"
> 3. Нажмите «Создать изображение»
> 4. Через 10-30 секунд появится результат
>
> Всё работает?

---

## API

```
POST ?action=generate   — запуск генерации (возвращает requestId)
POST ?action=status     — проверка статуса по requestId
GET  ?action=models     — список моделей
```

### action=generate

```json
{
  "prompt": "Космический кот в скафандре",
  "model": "flux-2-pro",
  "aspect_ratio": "1:1",
  "resolution": "1K"
}
```

**Ответ:**

```json
{
  "success": true,
  "requestId": "c90d0e18-640c-475c-94e0-3649614f432e",
  "message": "Generation started"
}
```

### action=status

```json
{
  "requestId": "c90d0e18-640c-475c-94e0-3649614f432e"
}
```

**Ответ (в процессе):**

```json
{
  "success": true,
  "status": "processing"
}
```

**Ответ (готово):**

```json
{
  "success": true,
  "status": "completed",
  "imageUrl": "https://..."
}
```

### action=models

```json
{
  "success": true,
  "models": [
    {"id": "flux-2-pro", "name": "Flux 2 Pro", "description": "High quality image generation"},
    {"id": "flux-pro", "name": "Flux Pro", "description": "Fast image generation"}
  ],
  "provider": "polza.ai"
}
```

---

## Frontend компоненты

| Файл | Описание |
|------|----------|
| `useFlux.ts` | Хук для работы с Flux API |
| `FluxPlayground.tsx` | Виджет-песочница с генератором |
| `FluxPlaygroundPage.tsx` | Готовая страница для роутера |

### useFlux

```tsx
const { generateAndWait, isLoading, error } = useFlux({
  apiUrl: "https://functions.poehali.dev/xxx-flux"
});

// Генерация с ожиданием результата
const result = await generateAndWait({
  prompt: "Кот в космосе",
  model: "flux-2-pro",
  aspect_ratio: "1:1",
  resolution: "1K",
});

if (result.success) {
  console.log(result.imageUrl);
}
```

### Низкоуровневое использование

```tsx
const { generate, checkStatus } = useFlux({ apiUrl: API_URL });

// Запуск генерации
const genResult = await generate({ prompt: "..." });
const requestId = genResult.requestId;

// Polling статуса
const statusResult = await checkStatus(requestId);
if (statusResult.status === "completed") {
  console.log(statusResult.imageUrl);
}
```

---

## Параметры генерации

### Соотношение сторон (aspect_ratio)

| Значение | Описание |
|----------|----------|
| `1:1` | Квадрат (по умолчанию) |
| `16:9` | Широкоформатный (видео) |
| `9:16` | Вертикальный (сторис) |
| `4:3` | Классический |
| `3:4` | Портрет |
| `3:2` | Фото |
| `2:3` | Портрет фото |
| `21:9` | Ультраширокий |

### Разрешение (resolution)

| Значение | Описание |
|----------|----------|
| `1K` | Стандартное (по умолчанию) |
| `2K` | Высокое |
| `4K` | Максимальное |

---

## Секреты

```python
put_secret("POLZA_AI_API_KEY", "<API ключ от Polza.ai>")
```

---

## Стоимость

Polza.ai тарифицирует по запросам. Цена зависит от модели и разрешения.

**Актуальные цены:** [polza.ai/models](https://polza.ai/models)

---

## Доступные модели

- **Flux 2 Pro** (`flux-2-pro`) — высокое качество, детализация
- **Flux Pro** (`flux-pro`) — быстрая генерация
- **Gemini 3 Pro Image** (`gemini-3-pro-image-preview`) — Google модель

**Актуальный список:** [polza.ai/models](https://polza.ai/models)
