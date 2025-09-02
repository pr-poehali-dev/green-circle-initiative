-- Добавляем таблицы в схему project_489d77e8
CREATE TABLE project_489d77e8.customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(50),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE project_489d77e8.reviews (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES project_489d77e8.products(id),
    customer_id INTEGER REFERENCES project_489d77e8.customers(id),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Добавляем тестовых клиентов
INSERT INTO project_489d77e8.customers (name, email, phone, address) VALUES 
('Анна Петрова', 'anna@example.com', '+7-999-123-45-67', 'Москва, ул. Ленина, 10'),
('Иван Иванов', 'ivan@example.com', '+7-999-234-56-78', 'СПб, Невский пр., 25'),
('Мария Сидорова', 'maria@example.com', '+7-999-345-67-89', 'Казань, ул. Баумана, 5');