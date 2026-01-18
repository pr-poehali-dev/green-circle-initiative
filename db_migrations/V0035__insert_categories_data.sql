-- Заполняем категории (иерархия)
INSERT INTO "t_p9999_admin".categories (name, slug, parent_id, level, sort_order) VALUES 
('Электроника', 'electronics', NULL, 0, 1),
('Смартфоны', 'smartphones', 1, 1, 1),
('Ноутбуки', 'laptops', 1, 1, 2),
('Одежда', 'clothing', NULL, 0, 2),
('Мужская одежда', 'mens-clothing', 4, 1, 1),
('Женская одежда', 'womens-clothing', 4, 1, 2);