-- Создаем таблицы в схеме project
CREATE TABLE project.companies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    website VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE project.employees (
    id SERIAL PRIMARY KEY,
    company_id INTEGER REFERENCES project.companies(id),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    position VARCHAR(150),
    salary DECIMAL(10,2),
    hire_date DATE DEFAULT CURRENT_DATE
);

-- Добавляем тестовые данные
INSERT INTO project.companies (name, email, website) VALUES 
('ТехноСтарт', 'info@technostart.ru', 'https://technostart.ru'),
('ИннаВейшн', 'hello@innovation.com', 'https://innovation.com');

INSERT INTO project.employees (company_id, first_name, last_name, position, salary) VALUES 
(1, 'Анна', 'Иванова', 'Frontend разработчик', 120000),
(1, 'Петр', 'Сидоров', 'Backend разработчик', 140000),
(2, 'Мария', 'Козлова', 'UI/UX дизайнер', 100000);