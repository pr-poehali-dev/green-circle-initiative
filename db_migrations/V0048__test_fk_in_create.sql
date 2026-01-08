-- Тестируем FOREIGN KEY в CREATE TABLE
CREATE TABLE test_with_fk (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id)
);