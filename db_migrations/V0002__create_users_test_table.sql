-- Создаем простую тестовую таблицу
CREATE TABLE users_test (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Вставляем пару тестовых записей
INSERT INTO users_test (username) VALUES 
('test_user_1'),
('test_user_2');