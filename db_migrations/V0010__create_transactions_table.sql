-- Создаем таблицу транзакций
CREATE TABLE "t_p31278751923_qanelph".transactions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    transaction_type VARCHAR(50) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'completed',
    FOREIGN KEY (user_id) REFERENCES "t_p31278751923_qanelph".users(id)
);

-- Добавляем несколько тестовых транзакций для существующих пользователей
INSERT INTO "t_p31278751923_qanelph".transactions (user_id, amount, transaction_type, description, status) VALUES
(1, 150.00, 'deposit', 'Пополнение счета', 'completed'),
(1, -50.75, 'withdrawal', 'Покупка товара', 'completed'),
(2, 200.00, 'deposit', 'Зарплата', 'completed'),
(2, -25.00, 'payment', 'Оплата услуг', 'completed'),
(3, 75.50, 'transfer', 'Перевод от друга', 'completed'),
(1, -100.00, 'withdrawal', 'Снятие наличных', 'pending');