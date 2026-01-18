-- Создаем таблицу с разными типами данных для тестирования
CREATE TABLE "t_p31278751923_qanelph".data_types_test (
    id SERIAL PRIMARY KEY,
    -- Числовые типы
    small_number SMALLINT,
    big_number BIGINT,
    decimal_value DECIMAL(10,2),
    float_value FLOAT,
    -- Текстовые типы
    short_text VARCHAR(50),
    long_text TEXT,
    fixed_char CHAR(10),
    -- Дата и время
    date_only DATE,
    time_only TIME,
    datetime_full TIMESTAMP,
    datetime_tz TIMESTAMPTZ,
    -- Логический тип
    is_active BOOLEAN,
    -- JSON данные
    json_data JSON,
    jsonb_data JSONB,
    -- Массивы
    tags TEXT[],
    numbers INTEGER[],
    -- UUID
    unique_id UUID,
    -- Бинарные данные
    binary_data BYTEA
);