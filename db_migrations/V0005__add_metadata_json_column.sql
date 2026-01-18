-- Добавление JSON колонки metadata в таблицу users
ALTER TABLE project_489d77e8.users 
ADD COLUMN IF NOT EXISTS metadata JSONB DEFAULT '{}';

-- Создаем GIN индекс для быстрого поиска по JSON полям
CREATE INDEX IF NOT EXISTS idx_users_metadata ON project_489d77e8.users USING GIN (metadata);

-- Комментарий к полю
COMMENT ON COLUMN project_489d77e8.users.metadata IS 'Дополнительные данные пользователя в формате JSON';

-- Добавляем примеры данных для существующих пользователей
UPDATE project_489d77e8.users 
SET metadata = '{"preferences": {"theme": "light", "language": "ru"}, "notifications": {"email": true, "push": false}}'::jsonb
WHERE email = 'admin@poehali.dev';

UPDATE project_489d77e8.users 
SET metadata = '{"preferences": {"theme": "dark", "language": "ru"}, "last_visit": "2025-09-06"}'::jsonb
WHERE email = 'user@example.com';