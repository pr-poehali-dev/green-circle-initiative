-- Создаем таблицу без PRIMARY KEY и ID
CREATE TABLE "t_p31278751923_qanelph".logs_no_pk (
    event_time TIMESTAMP,
    event_type VARCHAR(50),
    message TEXT,
    user_name VARCHAR(100),
    ip_address INET,
    severity_level INTEGER
);