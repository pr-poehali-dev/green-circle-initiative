-- Создаем ENUM для рейтинга
CREATE TYPE project_489d77e8.rating_enum AS ENUM ('1', '2', '3', '4', '5');

-- Добавляем новую колонку с ENUM типом
ALTER TABLE project_489d77e8.reviews ADD COLUMN rating_enum project_489d77e8.rating_enum;

-- Копируем данные из старой колонки в новую
UPDATE project_489d77e8.reviews SET rating_enum = rating::text::project_489d77e8.rating_enum;

-- Удаляем старую колонку
ALTER TABLE project_489d77e8.reviews DROP COLUMN rating;

-- Переименовываем новую колонку
ALTER TABLE project_489d77e8.reviews RENAME COLUMN rating_enum TO rating;

-- Делаем колонку обязательной
ALTER TABLE project_489d77e8.reviews ALTER COLUMN rating SET NOT NULL;