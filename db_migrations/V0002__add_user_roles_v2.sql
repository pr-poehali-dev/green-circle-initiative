-- Добавляем поле роли для разделения пользователей и админов
ALTER TABLE users ADD COLUMN role VARCHAR(50) DEFAULT 'user';

-- Создаем ограничение на возможные роли
ALTER TABLE users ADD CONSTRAINT check_user_role CHECK (role IN ('admin', 'user', 'manager'));

-- Создаем индекс для быстрого поиска по роли
CREATE INDEX idx_users_role ON users(role);

-- Добавляем поле для отслеживания последнего входа
ALTER TABLE users ADD COLUMN last_login TIMESTAMP;

-- Делаем первого пользователя админом
UPDATE users SET role = 'admin' WHERE id = 1;