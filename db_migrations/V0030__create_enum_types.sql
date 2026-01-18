-- Создаем ENUM типы
CREATE TYPE "t_p9999_admin".order_status_enum AS ENUM ('pending', 'processing', 'shipped', 'delivered', 'cancelled');
CREATE TYPE "t_p9999_admin".priority_enum AS ENUM ('low', 'medium', 'high', 'urgent');
CREATE TYPE "t_p9999_admin".user_role_enum AS ENUM ('guest', 'user', 'moderator', 'admin', 'super_admin');