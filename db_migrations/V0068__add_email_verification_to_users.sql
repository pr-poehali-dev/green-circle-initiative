-- Добавление поля email_verified для подтверждения email
ALTER TABLE t_p18279400_green_circle_initiat.users 
ADD COLUMN IF NOT EXISTS email_verified BOOLEAN DEFAULT FALSE;

-- Создание таблицы токенов подтверждения email
CREATE TABLE IF NOT EXISTS t_p18279400_green_circle_initiat.email_verification_tokens (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES t_p18279400_green_circle_initiat.users(id),
    token_hash VARCHAR(64) NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Индекс для быстрого поиска токенов
CREATE INDEX IF NOT EXISTS idx_email_verification_tokens_hash 
ON t_p18279400_green_circle_initiat.email_verification_tokens(token_hash);