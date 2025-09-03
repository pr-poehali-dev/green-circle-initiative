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

-- Добавление триггера для обновления updated_at
CREATE OR REPLACE FUNCTION project_489d77e8.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at 
    BEFORE UPDATE ON project_489d77e8.users 
    FOR EACH ROW 
    EXECUTE FUNCTION project_489d77e8.update_updated_at_column();