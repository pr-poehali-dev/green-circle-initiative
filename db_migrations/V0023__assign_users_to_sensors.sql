-- Обновляем существующие записи sensor_data, присваивая случайных пользователей
UPDATE "t_p31278751923_qanelph".sensor_data 
SET user_id = CASE 
    WHEN sensor_name = 'TEMP_001' THEN 29  -- admin
    WHEN sensor_name = 'TEMP_002' THEN 30  -- user1
    WHEN sensor_name = 'TEMP_003' THEN 31  -- moderator
    WHEN sensor_name = 'TEMP_004' THEN 32  -- guest_user
    ELSE 29
END;