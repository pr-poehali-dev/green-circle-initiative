-- Добавляем колонку user_id в таблицу users для тестирования
ALTER TABLE users ADD COLUMN user_score INTEGER DEFAULT 0;