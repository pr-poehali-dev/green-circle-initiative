-- Создание таблицы пользователей для системы авторизации
CREATE TABLE IF NOT EXISTS project_489d77e8.users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);

-- Создание индексов для быстрого поиска
CREATE INDEX IF NOT EXISTS idx_users_username ON project_489d77e8.users(username);
CREATE INDEX IF NOT EXISTS idx_users_email ON project_489d77e8.users(email);
CREATE INDEX IF NOT EXISTS idx_users_active ON project_489d77e8.users(is_active);