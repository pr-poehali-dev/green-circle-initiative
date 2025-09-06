-- Добавление поля role в таблицу users
ALTER TABLE project_489d77e8.users 
ADD COLUMN IF NOT EXISTS role VARCHAR(50) DEFAULT 'user' NOT NULL;

-- Создаем индекс для быстрой фильтрации по ролям
CREATE INDEX IF NOT EXISTS idx_users_role ON project_489d77e8.users(role);

-- Комментарий к полю
COMMENT ON COLUMN project_489d77e8.users.role IS 'Роль пользователя: user, admin';