-- Копируем данные из старой таблицы в новую
INSERT INTO transactions_new (
    transaction_number, amount, currency, payment_method, transaction_status,
    payment_gateway, gateway_transaction_id, customer_email, customer_name,
    created_at, processed_at, description, priority, owner_id
)
SELECT 
    transaction_number, amount, currency, payment_method, transaction_status,
    payment_gateway, gateway_transaction_id, customer_email, customer_name,
    created_at, processed_at, description, priority, owner_id
FROM transactions;