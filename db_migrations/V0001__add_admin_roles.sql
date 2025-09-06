-- Добавляем роль пользователя для админ панели
ALTER TABLE users ADD COLUMN IF NOT EXISTS role VARCHAR(50) DEFAULT 'user';

-- Добавляем ограничение на роли
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint 
        WHERE conname = 'check_user_role' 
        AND conrelid = 'users'::regclass
    ) THEN
        ALTER TABLE users ADD CONSTRAINT check_user_role 
        CHECK (role IN ('admin', 'user', 'manager'));
    END IF;
END $$;

-- Создаем индекс для поиска по роли
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);

-- Обновляем первого пользователя как админа
UPDATE users SET role = 'admin' WHERE id = (SELECT MIN(id) FROM users) AND role IS NULL;

-- Добавляем поле последнего входа
ALTER TABLE users ADD COLUMN IF NOT EXISTS last_login TIMESTAMP;