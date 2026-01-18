-- Создаем таблицу для хранения кодов подтверждения email
CREATE TABLE IF NOT EXISTS project_489d77e8.email_verifications (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    code VARCHAR(6) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP NOT NULL,
    is_used BOOLEAN NOT NULL DEFAULT FALSE
);

-- Индекс для поиска по email и коду
CREATE INDEX idx_email_verifications_email_code 
ON project_489d77e8.email_verifications (email, code);

-- Индекс для автоматической очистки истекших кодов
CREATE INDEX idx_email_verifications_expires 
ON project_489d77e8.email_verifications (expires_at) 
WHERE is_used = FALSE;

-- Добавляем поле email_verified в таблицу users
ALTER TABLE project_489d77e8.users 
ADD COLUMN IF NOT EXISTS email_verified BOOLEAN NOT NULL DEFAULT FALSE;