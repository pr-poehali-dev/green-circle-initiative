-- V3: Добавляем роли пользователей для админ панели
ALTER TABLE users ADD COLUMN role VARCHAR(50) DEFAULT 'user';
ALTER TABLE users ADD COLUMN last_login TIMESTAMP;

-- Ограничение на роли
ALTER TABLE users ADD CONSTRAINT check_user_role CHECK (role IN ('admin', 'user'));

-- Индекс для поиска
CREATE INDEX idx_users_role ON users(role);

-- Первый пользователь становится админом
UPDATE users SET role = 'admin' WHERE id = 1;