-- Заполняем продукты с комплексными данными
INSERT INTO "t_p9999_admin".products (
    sku, name, description, price, weight, dimensions, tags, 
    availability_count, priority, release_date, exact_time, 
    binary_data
) VALUES 
(
    'IPHONE15-128', 
    'iPhone 15 128GB', 
    'Новейший смартфон Apple с чипом A17 Bionic',
    89990.00, 
    0.171,
    '{"width": 71.6, "height": 147.6, "depth": 7.8}'::jsonb,
    ARRAY['apple', 'smartphone', 'premium', '5g'],
    50,
    'high',
    '2023-09-22',
    '10:00:00',
    '\x89504e470d0a1a0a'::bytea
),
(
    'MACBOOK-AIR-M2', 
    'MacBook Air M2 256GB', 
    'Ультрабук с чипом M2 и 13.6 дисплеем',
    109990.00, 
    1.240,
    '{"width": 304.1, "height": 212.4, "depth": 11.3}'::jsonb,
    ARRAY['apple', 'laptop', 'ultrabook', 'm2'],
    25,
    'high',
    '2022-07-15',
    '14:30:00',
    '\x504b030414000600'::bytea
),
(
    'TSHIRT-BASIC-M', 
    'Футболка базовая размер M', 
    'Хлопковая футболка унисекс',
    1590.00, 
    0.200,
    '{"chest": 52, "length": 72}'::jsonb,
    ARRAY['clothing', 'cotton', 'unisex', 'basic'],
    200,
    'low',
    '2025-03-01',
    '09:00:00',
    '\x474946383961'::bytea
);