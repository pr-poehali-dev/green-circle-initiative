-- Создаем тестовую таблицу для проверки миграций
CREATE TABLE test_table (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    age INTEGER CHECK (age >= 0),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Добавляем несколько тестовых записей
INSERT INTO test_table (name, email, age) VALUES 
('Алексей Тестовый', 'alex@test.ru', 25),
('Мария Проверкина', 'maria@test.ru', 30),
('Иван Миграционный', 'ivan@test.ru', 28);