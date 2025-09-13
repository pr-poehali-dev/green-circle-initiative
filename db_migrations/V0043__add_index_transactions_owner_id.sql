-- Создаем индекс на owner_id для производительности
CREATE INDEX idx_transactions_owner_id ON transactions(owner_id);