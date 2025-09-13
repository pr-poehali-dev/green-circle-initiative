-- Создаем таблицу с различными типами данных и ограничениями
CREATE TABLE "t_p9999_admin".products (
    id SERIAL PRIMARY KEY,
    sku VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(200) NOT NULL CHECK (length(name) >= 2),
    description TEXT,
    price NUMERIC(10,2) NOT NULL CHECK (price > 0),
    weight DECIMAL(8,3) CHECK (weight >= 0),
    dimensions JSONB,
    tags TEXT[] DEFAULT '{}',
    availability_count INTEGER DEFAULT 0 CHECK (availability_count >= 0),
    priority "t_p9999_admin".priority_enum DEFAULT 'medium',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    release_date DATE,
    exact_time TIME,
    full_datetime TIMESTAMPTZ DEFAULT NOW(),
    binary_data BYTEA,
    search_vector TSVECTOR
);