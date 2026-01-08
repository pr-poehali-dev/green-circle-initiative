# Robokassa Payment Integration

Интеграция платёжной системы Robokassa для приёма онлайн-платежей.

## Что включено

- `backend/robokassa/` — создание заказа и ссылки на оплату
- `backend/robokassa-webhook/` — обработка webhook от Robokassa
- `frontend/useRobokassa.ts` — React хук для работы с API
- `frontend/PaymentButton.tsx` — готовый компонент кнопки оплаты

## ⚠️ Быстрая установка

После установки расширения через `extension_manager` выполни:

### Шаг 1: Миграция БД (обязательно!)
Юра автоматически применит миграцию для создания таблиц `orders` и `order_items`.

### Шаг 2: Sync Backend (обязательно!)
Юра автоматически задеплоит функции `robokassa` и `robokassa-webhook`.

### Шаг 3: Проверь секреты
Если секреты еще не добавлены, Юра предложит их добавить:
- `ROBOKASSA_MERCHANT_LOGIN`
- `ROBOKASSA_PASSWORD_1`
- `ROBOKASSA_PASSWORD_2`

## Установка (детали)

### 1. База данных

Миграция создаёт таблицы:

```sql
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    order_number VARCHAR(50) UNIQUE NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_phone VARCHAR(50),
    amount DECIMAL(10, 2) NOT NULL,
    robokassa_inv_id INTEGER UNIQUE,
    status VARCHAR(20) DEFAULT 'pending',
    payment_url TEXT,
    delivery_address TEXT,
    order_comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    paid_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id),
    product_id VARCHAR(100),
    product_name VARCHAR(255) NOT NULL,
    product_price DECIMAL(10, 2) NOT NULL,
    quantity INTEGER DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_orders_robokassa_inv_id ON orders(robokassa_inv_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);
```

### 2. Секреты

Добавь секреты в проект через UI:

| Переменная | Описание |
|------------|----------|
| `ROBOKASSA_MERCHANT_LOGIN` | Логин магазина в Robokassa |
| `ROBOKASSA_PASSWORD_1` | Пароль #1 для создания платежей |
| `ROBOKASSA_PASSWORD_2` | Пароль #2 для проверки webhook |

### 3. Backend

**⚠️ КРИТИЧНО:** Все функции должны возвращать правильную структуру:

```python
def handler(event: dict, context) -> dict:
    method = event.get('httpMethod', 'GET').upper()
    
    # ОБЯЗАТЕЛЬНО обработай OPTIONS для CORS
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': HEADERS,
            'body': '',
            'isBase64Encoded': False  # ⚠️ ОБЯЗАТЕЛЬНО!
        }
    
    # Оберни всю логику в try-catch
    try:
        # ... твоя логика
        return {
            'statusCode': 200,
            'headers': HEADERS,
            'body': json.dumps({...}),
            'isBase64Encoded': False  # ⚠️ ОБЯЗАТЕЛЬНО!
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': HEADERS,
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False  # ⚠️ ОБЯЗАТЕЛЬНО!
        }
```

**Проверь HEADERS:**
```python
HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Session-Id',
    'Access-Control-Max-Age': '86400',
    'Content-Type': 'application/json'
}
```

### 4. Frontend

**⚠️ КРИТИЧНО:** Удали `credentials: "include"` из fetch запроса!

В `useRobokassa.ts` должно быть:

```typescript
const response = await fetch(apiUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  // ❌ НЕ ДОБАВЛЯЙ: credentials: "include"
  body: JSON.stringify({...})
});
```

Пример использования:

```tsx
import { PaymentButton } from "@/components/extensions/robokassa/PaymentButton";
import func2url from '../../backend/func2url.json';

<PaymentButton
  apiUrl={func2url['robokassa']}
  amount={totalAmount}
  userName={formData.name}
  userEmail={formData.email}
  userPhone={formData.phone}
  userAddress={formData.address}
  cartItems={cartItems}
  buttonText="Оплатить заказ"
  onSuccess={(orderNumber) => {
    alert(`Заказ ${orderNumber} создан!`);
  }}
  onError={(error) => {
    alert(`Ошибка: ${error.message}`);
  }}
/>
```

### 5. Настройка Robokassa

В личном кабинете Robokassa укажи:

- **Result URL**: URL функции `robokassa-webhook` из `func2url.json`

Пример: `https://devfunctions.poehali.dev/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

## Поток оплаты

```
1. Пользователь нажимает "Оплатить"
   ↓
2. Frontend → POST /robokassa (amount, user_name, cart_items...)
   ↓
3. Backend создаёт заказ в БД, генерирует payment_url
   ↓
4. Frontend редиректит на Robokassa
   ↓
5. Пользователь оплачивает
   ↓
6. Robokassa → POST /robokassa-webhook (OutSum, InvId, SignatureValue)
   ↓
7. Backend проверяет подпись, обновляет status = 'paid'
   ↓
8. Robokassa редиректит обратно на сайт
```

## API

### POST /robokassa

Создание заказа и получение ссылки на оплату.

**Request:**
```json
{
  "amount": 1500.00,
  "user_name": "Иван Иванов",
  "user_email": "ivan@example.com",
  "user_phone": "+79991234567",
  "user_address": "Москва, ул. Примерная, 1",
  "cart_items": [
    {"id": "1", "name": "Товар", "price": 1500, "quantity": 1}
  ]
}
```

**Response:**
```json
{
  "payment_url": "https://auth.robokassa.ru/...",
  "order_id": 123,
  "order_number": "ORD-20241219-456789"
}
```

### POST /robokassa-webhook

Webhook от Robokassa (вызывается автоматически после оплаты).

**Response:** `OK{InvId}` при успехе

## ⚠️ Частые проблемы и решения

### 1. Failed to fetch / Сеть недоступна

**Симптомы:**
- Кнопка оплаты не работает
- В консоли браузера: `Failed to fetch`
- В логах frontend: `Fetch error: Failed to fetch`

**Причины и решения:**

#### Причина 1: Отсутствует `isBase64Encoded`
Проверь что **ВСЕ** return в `backend/.../robokassa/index.py` содержат:
```python
return {
    'statusCode': 200,
    'headers': HEADERS,
    'body': json.dumps({...}),
    'isBase64Encoded': False  # ⚠️ БЕЗ ЭТОГО НЕ РАБОТАЕТ!
}
```

#### Причина 2: `credentials: "include"` в fetch
Проверь `src/components/extensions/robokassa/useRobokassa.ts`:
```typescript
// ❌ НЕПРАВИЛЬНО:
const response = await fetch(apiUrl, {
  credentials: "include",  // УДАЛИ ЭТО!
  ...
});

// ✅ ПРАВИЛЬНО:
const response = await fetch(apiUrl, {
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({...})
});
```

#### Причина 3: Не обрабатывается OPTIONS
Проверь что в начале `handler()` есть:
```python
if method == 'OPTIONS':
    return {'statusCode': 200, 'headers': HEADERS, 'body': '', 'isBase64Encoded': False}
```

### 2. Database errors

**Симптом:** `relation "orders" does not exist`

**Причина:** Таблицы не созданы

**Решение:** Попроси Юру применить миграцию из раздела "База данных"

### 3. Robokassa credentials not configured

**Симптом:** Ошибка 500, в логах "credentials not configured"

**Причина:** Секреты не добавлены

**Решение:** Добавь три секрета через UI проекта (см. раздел "Секреты")

### 4. Backend функция не найдена (404)

**Симптом:** 404 при вызове API

**Причина:** `sync_backend` не выполнен

**Решение:** Попроси Юру выполнить `sync_backend`

## ✅ Чеклист успешной установки

Перед тестированием проверь:

- [ ] ✅ Миграция БД применена (таблицы `orders`, `order_items` существуют)
- [ ] ✅ Секреты добавлены: `ROBOKASSA_MERCHANT_LOGIN`, `PASSWORD_1`, `PASSWORD_2`
- [ ] ✅ Backend функции задеплоены (`func2url.json` содержит URL)
- [ ] ✅ В `backend/.../robokassa/index.py` **ВСЕ** return имеют `isBase64Encoded: False`
- [ ] ✅ В `useRobokassa.ts` **УДАЛЁН** `credentials: "include"`
- [ ] ✅ В `index.py` есть обработка `OPTIONS` метода
- [ ] ✅ В `index.py` вся логика обёрнута в `try-except`
- [ ] ✅ PaymentButton интегрирован в компонент
- [ ] ✅ Тестовый платёж открывает страницу Robokassa
- [ ] ⏳ Result URL настроен в личном кабинете Robokassa

**Быстрый тест:**
1. Нажми кнопку оплаты
2. Должна открыться страница `auth.robokassa.ru` с формой оплаты
3. Если видишь "Failed to fetch" — проверь пункты с ✅ выше

## Пример интеграции

Простой пример кнопки для теста:

```tsx
import { PaymentButton } from '@/components/extensions/robokassa/PaymentButton';
import func2url from '../../backend/func2url.json';

<PaymentButton
  apiUrl={func2url['robokassa']}
  amount={10}
  userName="Тестовый пользователь"
  userEmail="test@example.com"
  userPhone="+79991234567"
  cartItems={[
    { id: "test-1", name: "Тестовый товар", price: 10, quantity: 1 }
  ]}
  buttonText="💳 Тест оплаты (10₽)"
  onSuccess={(orderNumber) => {
    alert(`✅ Заказ ${orderNumber} создан!`);
  }}
  onError={(error) => {
    alert(`❌ Ошибка: ${error.message}`);
  }}
/>
```
