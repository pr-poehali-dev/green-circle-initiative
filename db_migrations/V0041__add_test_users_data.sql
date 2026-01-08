-- Добавляем тестовых пользователей
INSERT INTO users (
    email, 
    username, 
    first_name, 
    last_name, 
    phone, 
    date_of_birth,
    status,
    role,
    email_verified,
    last_login_at
) VALUES 
('admin@example.com', 'admin', 'Алексей', 'Администраторов', '+7-900-123-45-67', '1985-03-15', 'active', 'admin', TRUE, '2024-09-13 10:30:00'),
('ivan@example.com', 'ivan_petrov', 'Иван', 'Петров', '+7-900-234-56-78', '1990-07-22', 'active', 'customer', TRUE, '2024-09-12 14:20:00'),
('maria@example.com', 'maria_s', 'Мария', 'Сидорова', '+7-900-345-67-89', '1992-11-08', 'active', 'customer', TRUE, '2024-09-11 16:45:00'),
('manager@example.com', 'manager01', 'Екатерина', 'Менеджерова', '+7-900-456-78-90', '1988-12-03', 'active', 'manager', TRUE, '2024-09-13 09:15:00'),
('john@example.com', 'johnsmith', 'John', 'Smith', '+1-555-123-4567', '1987-05-18', 'inactive', 'customer', FALSE, NULL);