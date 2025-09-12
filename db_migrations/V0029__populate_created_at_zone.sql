-- Заполняем новую колонку данными на основе существующей created_at
UPDATE "t_p9999_admin".customers 
SET created_at_zone = created_at AT TIME ZONE 'UTC' AT TIME ZONE 'Europe/Moscow';