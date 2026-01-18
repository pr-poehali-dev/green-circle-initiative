-- Добавляем колонку created_at_zone с типом timestamp with time zone
ALTER TABLE "t_p9999_admin".customers 
ADD COLUMN created_at_zone TIMESTAMP WITH TIME ZONE;