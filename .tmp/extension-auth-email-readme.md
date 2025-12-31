# Auth Email Extension

Авторизация по email + пароль с JWT токенами. **1 функция** вместо 5.

---

## Для ассистента: перед интеграцией

**Спроси пользователя:**

> Хотите подтверждение email и восстановление пароля через почту?
> Для этого нужен Gmail с 2FA. Без этого всё работает, но коды приходят в ответе API.

**Если ДА** → добавь переменные `SMTP_USER` и `SMTP_PASSWORD` (Gmail App Password).

---

## Как это работает

| SMTP | Регистрация | Сброс пароля |
|------|-------------|--------------|
| Нет | Сразу активен | Код в ответе API |
| Да | Код на почту | Код на почту |

---

## Установка

### База данных

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(72) NOT NULL,
    name VARCHAR(255),
    email_verified BOOLEAN DEFAULT TRUE,
    failed_login_attempts INTEGER DEFAULT 0,
    last_failed_login_at TIMESTAMP,
    last_login_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE refresh_tokens (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    token_hash VARCHAR(64) NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE password_reset_tokens (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    token_hash VARCHAR(64) NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE email_verification_tokens (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    token_hash VARCHAR(64) NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_refresh_tokens_hash ON refresh_tokens(token_hash);
CREATE INDEX idx_password_reset_tokens_hash ON password_reset_tokens(token_hash);
CREATE INDEX idx_email_verification_tokens_hash ON email_verification_tokens(token_hash);
```

### Переменные окружения

| Переменная | Описание |
|------------|----------|
| `DATABASE_URL` | PostgreSQL connection string |
| `MAIN_DB_SCHEMA` | Схема БД |
| `JWT_SECRET` | `openssl rand -hex 32` |
| `SMTP_USER` | Gmail (опционально) |
| `SMTP_PASSWORD` | Gmail App Password (опционально) |

### Gmail App Password

1. Включи 2FA: https://myaccount.google.com/security
2. Создай пароль: https://myaccount.google.com/apppasswords

---

## API

**После деплоя** замени URL на значение из `backend/func2url.json`:

```
POST ?action=register      → { email, password, name? }
POST ?action=verify-email  → { email, code }
POST ?action=login         → { email, password }
POST ?action=refresh       → { refresh_token }
POST ?action=logout        → { refresh_token }
POST ?action=reset-password→ { email } или { email, code, new_password }
```

**Важно:** Если `email_verification_required: true` в ответе register — покажи форму ввода 6-значного кода.

---

## Frontend

| Файл | Описание |
|------|----------|
| `useAuth.ts` | Хук авторизации |
| `LoginForm.tsx` | Форма входа |
| `RegisterForm.tsx` | Регистрация + ввод кода |
| `ResetPasswordForm.tsx` | Сброс пароля |
| `UserProfile.tsx` | Профиль после входа |

### Полный пример страницы /auth

```tsx
import { useState } from "react";
import { useAuth } from "@/components/extensions/auth-email/useAuth";
import { LoginForm } from "@/components/extensions/auth-email/LoginForm";
import { RegisterForm } from "@/components/extensions/auth-email/RegisterForm";
import { ResetPasswordForm } from "@/components/extensions/auth-email/ResetPasswordForm";
import { UserProfile } from "@/components/extensions/auth-email/UserProfile";

const AUTH_URL = "https://functions.poehali.dev/xxx"; // ← из func2url.json

type View = "login" | "register" | "reset";

export default function Auth() {
  const [view, setView] = useState<View>("login");

  const auth = useAuth({
    apiUrls: {
      login: `${AUTH_URL}?action=login`,
      register: `${AUTH_URL}?action=register`,
      verifyEmail: `${AUTH_URL}?action=verify-email`,
      refresh: `${AUTH_URL}?action=refresh`,
      logout: `${AUTH_URL}?action=logout`,
      resetPassword: `${AUTH_URL}?action=reset-password`,
    },
  });

  // Если пользователь авторизован → показать профиль
  if (auth.isAuthenticated && auth.user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
        <UserProfile
          user={auth.user}
          onLogout={auth.logout}
          isLoading={auth.isLoading}
          className="w-full max-w-md"
        />
      </div>
    );
  }

  // Иначе → показать формы входа/регистрации/сброса
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="w-full max-w-md">
        {view === "login" && (
          <LoginForm
            onLogin={auth.login}
            onRegisterClick={() => setView("register")}
            onForgotPasswordClick={() => setView("reset")}
            error={auth.error}
            isLoading={auth.isLoading}
          />
        )}

        {view === "register" && (
          <RegisterForm
            onRegister={auth.register}
            onVerifyEmail={auth.verifyEmail}
            onLogin={auth.login}
            onLoginClick={() => setView("login")}
            error={auth.error}
            isLoading={auth.isLoading}
          />
        )}

        {view === "reset" && (
          <ResetPasswordForm
            onRequestReset={auth.requestPasswordReset}
            onResetPassword={auth.resetPassword}
            onSuccess={() => setView("login")}
            onBackToLogin={() => setView("login")}
            error={auth.error}
            isLoading={auth.isLoading}
          />
        )}
      </div>
    </div>
  );
}
```

**Логика:**
1. Если `auth.isAuthenticated && auth.user` → показать `UserProfile`
2. Иначе → показать формы входа/регистрации/сброса с переключением через `view`
3. После успешного входа/регистрации автоматически отображается профиль

---

## Безопасность

- bcrypt, JWT access (15 мин), refresh (30 дней) в localStorage
- Rate limiting: 5 попыток, блок 15 мин
- 6-значные коды через `secrets`