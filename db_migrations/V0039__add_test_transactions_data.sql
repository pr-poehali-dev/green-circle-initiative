-- Добавляем тестовые транзакции
INSERT INTO transactions (
    transaction_number, 
    amount, 
    currency, 
    payment_method, 
    transaction_status, 
    payment_gateway,
    gateway_transaction_id,
    customer_email,
    customer_name,
    description,
    priority
) VALUES 
('TXN-2024-001', 1500.00, 'RUB', 'card', 'completed', 'yookassa', 'yk_12345', 'ivan@example.com', 'Иван Петров', 'Оплата курса программирования', 'high'),
('TXN-2024-002', 750.50, 'RUB', 'sbp', 'pending', 'tinkoff', 'tk_67890', 'maria@example.com', 'Мария Сидорова', 'Покупка книг', 'medium'),
('TXN-2024-003', 2200.00, 'USD', 'paypal', 'failed', 'paypal', 'pp_abc123', 'john@example.com', 'John Smith', 'Premium subscription', 'urgent'),
('TXN-2024-004', 500.00, 'RUB', 'card', 'completed', 'sberbank', 'sb_xyz789', 'anna@example.com', 'Анна Кузнецова', 'Консультация', 'low');