-- Вставляем тестовые данные с разными типами
INSERT INTO "t_p31278751923_qanelph".data_types_test (
    small_number, big_number, decimal_value, float_value,
    short_text, long_text, fixed_char,
    date_only, time_only, datetime_full, datetime_tz,
    is_active, json_data, jsonb_data,
    tags, numbers, unique_id, binary_data
) VALUES 
-- Запись 1: Обычные данные
(
    100, 9223372036854775807, 1234.56, 3.14159,
    'Тест 1', 'Длинный текст для первой записи с эмодзи 🚀', 'CHAR_1    ',
    '2024-01-15', '14:30:00', '2024-01-15 14:30:00', '2024-01-15 14:30:00+03',
    true, '{"name": "John", "age": 30}'::json, '{"city": "Moscow", "country": "Russia"}'::jsonb,
    ARRAY['тег1', 'тег2', 'важно'], ARRAY[1, 2, 3, 4, 5],
    gen_random_uuid(), '\x48656c6c6f20576f726c64'::bytea
),
-- Запись 2: Экстремальные значения
(
    -32768, -9223372036854775808, -99999.99, -1.7976931348623157E+308,
    'Экстрим', 'Очень длинный текст с символами: абвгдежзийклмнопрстуфхцчшщъыьэюя ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890', 'EXTREME   ',
    '1900-01-01', '00:00:00', '1900-01-01 00:00:00', '1900-01-01 00:00:00+00',
    false, '{"numbers": [1,2,3], "nested": {"key": "value"}}'::json, '{"array": [{"id": 1}, {"id": 2}]}'::jsonb,
    ARRAY['минимум', 'максимум'], ARRAY[-2147483648, 2147483647],
    gen_random_uuid(), '\x00010203040506070809'::bytea
),
-- Запись 3: NULL значения
(
    null, null, null, null,
    null, null, null,
    null, null, null, null,
    null, null, null,
    null, null, null, null
),
-- Запись 4: Специальные символы и Unicode  
(
    777, 123456789, 0.01, 2.718281828,
    'Unicode: 你好世界', 'Текст с символами: ñáéíóú çüö αβγδε русский العربية 日本語 한국어', 'UNICODE   ',
    '2025-12-31', '23:59:59', '2025-12-31 23:59:59', '2025-12-31 23:59:59-12',
    true, '{"unicode": "🌍🚀💫", "math": "π≈3.14"}'::json, '{"special": "áéíóú", "symbols": "©®™"}'::jsonb,
    ARRAY['unicode', 'специальные', '特殊'], ARRAY[0, -1, 1],
    gen_random_uuid(), '\xc4b8c5b8c4b1c580'::bytea
);