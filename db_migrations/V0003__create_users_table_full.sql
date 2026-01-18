-- Создание таблицы пользователей
CREATE TABLE IF NOT EXISTS project_489d77e8.users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'user',
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT NULL
);

-- Индексы для быстрого поиска
CREATE INDEX IF NOT EXISTS idx_users_email ON project_489d77e8.users(email);
CREATE INDEX IF NOT EXISTS idx_users_username ON project_489d77e8.users(username);
CREATE INDEX IF NOT EXISTS idx_users_role ON project_489d77e8.users(role);
CREATE INDEX IF NOT EXISTS idx_users_is_active ON project_489d77e8.users(is_active);

-- Комментарии к полям
COMMENT ON TABLE project_489d77e8.users IS 'Таблица пользователей системы';
COMMENT ON COLUMN project_489d77e8.users.role IS 'Роль пользователя: user, admin';
COMMENT ON COLUMN project_489d77e8.users.is_active IS 'Активен ли пользователь';

-- Создание администратора по умолчанию
-- Email: admin@poehali.dev
-- Пароль: admin123
INSERT INTO project_489d77e8.users (email, username, password_hash, name, role, created_at, is_active)
VALUES (
    'admin@poehali.dev',
    'admin',
    '1a2b3c4d5e6f7890:8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918',
    'Администратор',
    'admin',
    NOW(),
    true
) ON CONFLICT (email) DO NOTHING;

-- Создание тестового пользователя
-- Email: user@example.com  
-- Пароль: user123
INSERT INTO project_489d77e8.users (email, username, password_hash, name, role, created_at, is_active)
VALUES (
    'user@example.com',
    'testuser',
    'a1b2c3d4e5f67890:5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
    'Тестовый пользователь',
    'user',
    NOW(),
    true
) ON CONFLICT (email) DO NOTHING;