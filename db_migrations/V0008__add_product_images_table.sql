-- Создание таблицы для хранения изображений товаров
CREATE TABLE IF NOT EXISTS project_489d77e8.product_images (
    id SERIAL PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    content_type VARCHAR(100) NOT NULL,
    file_data BYTEA NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);