-- Переименовываем старую таблицу
ALTER TABLE transactions RENAME TO transactions_old;

-- Переименовываем новую таблицу
ALTER TABLE transactions_new RENAME TO transactions;