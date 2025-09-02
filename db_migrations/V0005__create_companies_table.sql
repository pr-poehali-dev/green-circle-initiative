CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    website VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO companies (name, email, website) VALUES 
('ТехноСтарт', 'info@technostart.ru', 'https://technostart.ru'),
('ИннаВейшн', 'hello@innovation.com', 'https://innovation.com');