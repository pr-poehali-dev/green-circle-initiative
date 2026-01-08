-- Создаем новую таблицу с правильным внешним ключом
CREATE TABLE transactions_new (
    id SERIAL PRIMARY KEY,
    transaction_number VARCHAR(50) NOT NULL UNIQUE,
    amount NUMERIC(12,2) NOT NULL CHECK (amount > 0),
    currency VARCHAR(3) DEFAULT 'RUB',
    payment_method VARCHAR(50) NOT NULL,
    transaction_status VARCHAR(20) DEFAULT 'pending' CHECK (transaction_status IN ('pending', 'completed', 'failed', 'cancelled')),
    payment_gateway VARCHAR(50),
    gateway_transaction_id VARCHAR(100),
    customer_email VARCHAR(150),
    customer_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    processed_at TIMESTAMP,
    description TEXT,
    priority transaction_priority DEFAULT 'medium',
    owner_id INTEGER REFERENCES users(id)
);