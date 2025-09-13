-- Создаем таблицу категорий с иерархией (самоссылающийся FK)
CREATE TABLE "t_p9999_admin".categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    parent_id INTEGER REFERENCES "t_p9999_admin".categories(id),
    level INTEGER DEFAULT 0 CHECK (level >= 0 AND level <= 5),
    sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);