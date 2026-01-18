-- Создаем ENUM тип для статуса транзакции
CREATE TYPE transaction_priority AS ENUM ('low', 'medium', 'high', 'urgent');

-- Добавляем колонку с ENUM типом
ALTER TABLE transactions ADD COLUMN priority transaction_priority DEFAULT 'medium';