-- Создание таблицы товаров в схеме project_489d77e8
CREATE TABLE project_489d77e8.products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Вставка тестовых данных
INSERT INTO project_489d77e8.products (name, description, price, image_url) VALUES 
('Смартфон iPhone 15', 'Новейший iPhone с камерой 48 МП и процессором A17', 89990.00, 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop'),
('Ноутбук MacBook Air', 'Тонкий и легкий ноутбук с процессором M2', 129990.00, 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop'),
('Наушники AirPods Pro', 'Беспроводные наушники с шумоподавлением', 29990.00, 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop');