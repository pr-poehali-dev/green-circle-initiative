-- Добавляем FOREIGN KEY к старой таблице transactions_old
ALTER TABLE transactions_old 
ADD CONSTRAINT fk_transactions_old_user_id 
FOREIGN KEY (owner_id) REFERENCES users(id);