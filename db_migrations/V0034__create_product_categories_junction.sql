-- Создаем связующую таблицу продукты-категории (many-to-many)
CREATE TABLE "t_p9999_admin".product_categories (
    product_id INTEGER NOT NULL REFERENCES "t_p9999_admin".products(id),
    category_id INTEGER NOT NULL REFERENCES "t_p9999_admin".categories(id),
    is_primary BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (product_id, category_id)
);