-- Создаем еще одну таблицу без PRIMARY KEY
CREATE TABLE "t_p31278751923_qanelph".sensor_data (
    timestamp_recorded TIMESTAMP,
    sensor_name VARCHAR(100),
    temperature NUMERIC(5,2),
    humidity NUMERIC(5,2),
    location VARCHAR(200),
    battery_level INTEGER,
    signal_strength INTEGER
);