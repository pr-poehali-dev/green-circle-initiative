-- Добавляем колонку role в таблицу users
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS role VARCHAR(50) NOT NULL DEFAULT 'user';

-- Обновляем существующих пользователей (если нужны админы)
-- UPDATE users SET role = 'admin' WHERE email = 'admin@example.com';

-- Создаем индекс для быстрого поиска по роли
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);

-- Добавляем комментарий к колонке
COMMENT ON COLUMN users.role IS 'Роль пользователя: user, admin, moderator';