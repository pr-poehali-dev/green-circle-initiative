-- Создаем различные типы индексов
CREATE INDEX idx_products_name ON "t_p9999_admin".products (name);
CREATE INDEX idx_products_price_desc ON "t_p9999_admin".products (price DESC);
CREATE INDEX idx_products_tags_gin ON "t_p9999_admin".products USING GIN (tags);
CREATE INDEX idx_products_dimensions_gin ON "t_p9999_admin".products USING GIN (dimensions);
CREATE INDEX idx_products_active_priority ON "t_p9999_admin".products (is_active, priority) WHERE is_active = true;
CREATE INDEX idx_products_created_at_partial ON "t_p9999_admin".products (created_at) WHERE created_at >= '2025-01-01';