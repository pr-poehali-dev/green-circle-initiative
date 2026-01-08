-- Создаем таблицу заказов с FK на клиентов
CREATE TABLE "t_p9999_admin".orders (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER NOT NULL REFERENCES "t_p9999_admin".customers(id),
    order_number VARCHAR(50) UNIQUE NOT NULL,
    total_amount NUMERIC(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending',
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    delivery_date DATE,
    notes TEXT
);