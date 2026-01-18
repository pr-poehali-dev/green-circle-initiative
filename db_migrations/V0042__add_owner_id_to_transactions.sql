-- Добавляем колонку owner_id в таблицу транзакций для связи с пользователями
ALTER TABLE transactions ADD COLUMN owner_id INTEGER;