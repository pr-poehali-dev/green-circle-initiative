-- Добавление колонки order в таблицу users
ALTER TABLE project_489d77e8.users 
ADD COLUMN IF NOT EXISTS "order" INTEGER DEFAULT 0;

-- Создаем индекс для сортировки по order
CREATE INDEX IF NOT EXISTS idx_users_order ON project_489d77e8.users("order");

-- Комментарий к полю
COMMENT ON COLUMN project_489d77e8.users."order" IS 'Порядок сортировки пользователя';

-- Устанавливаем начальные значения order на основе id
UPDATE project_489d77e8.users 
SET "order" = id * 10 
WHERE "order" = 0;