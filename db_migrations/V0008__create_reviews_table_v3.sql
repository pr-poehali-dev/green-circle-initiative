-- Создаем ENUM тип для рейтинга
CREATE TYPE project_489d77e8.rating_enum AS ENUM ('1', '2', '3', '4', '5');

-- Создаем таблицу отзывов
CREATE TABLE project_489d77e8.reviews (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    rating project_489d77e8.rating_enum NOT NULL,
    review_text TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);