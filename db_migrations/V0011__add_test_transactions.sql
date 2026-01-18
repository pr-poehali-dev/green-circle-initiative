-- Добавляем тестовые транзакции для существующих пользователей
INSERT INTO "t_p31278751923_qanelph".transactions (user_id, amount, transaction_type, description, status) VALUES
(4, 150.00, 'deposit', 'Пополнение счета', 'completed'),
(4, -50.75, 'withdrawal', 'Покупка товара', 'completed'),
(5, 200.00, 'deposit', 'Зарплата', 'completed'),
(5, -25.00, 'payment', 'Оплата услуг', 'completed'),
(6, 75.50, 'transfer', 'Перевод от друга', 'completed'),
(4, -100.00, 'withdrawal', 'Снятие наличных', 'pending');