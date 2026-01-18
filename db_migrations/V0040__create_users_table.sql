-- Создаем ENUM для статуса пользователя
CREATE TYPE user_status AS ENUM ('active', 'inactive', 'suspended', 'blocked');

-- Создаем ENUM для роли пользователя
CREATE TYPE user_role AS ENUM ('admin', 'manager', 'customer', 'guest');

-- Создаем таблицу пользователей
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(150) NOT NULL UNIQUE,
    username VARCHAR(50) UNIQUE,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    phone VARCHAR(20),
    date_of_birth DATE,
    status user_status DEFAULT 'active',
    role user_role DEFAULT 'customer',
    email_verified BOOLEAN DEFAULT FALSE,
    last_login_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);