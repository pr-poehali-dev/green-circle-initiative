-- Добавляем колонку user_id с внешним ключом к таблице users
ALTER TABLE "t_p31278751923_qanelph".sensor_data 
ADD COLUMN user_id INTEGER REFERENCES "t_p31278751923_qanelph".users(id);