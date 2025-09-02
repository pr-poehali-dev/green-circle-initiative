-- Создаем таблицу отзывов в схеме project_489d77e8
CREATE TABLE project_489d77e8.reviews (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES project_489d77e8.products(id),
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
    review_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Добавляем несколько тестовых отзывов
INSERT INTO project_489d77e8.reviews (product_id, customer_name, customer_email, rating, review_text) VALUES 
(1, 'Анна Петрова', 'anna@example.com', 5, 'Отличный телефон! Быстрый, качественная камера'),
(1, 'Иван Сидоров', 'ivan@example.com', 4, 'Хороший телефон, но дорогой'),
(2, 'Мария Козлова', 'maria@example.com', 5, 'MacBook просто супер! Для работы идеален'),
(3, 'Олег Иванов', 'oleg@example.com', 3, 'Книга интересная, но тяжело читается');