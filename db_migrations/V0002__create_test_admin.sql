-- Создание тестового администратора
-- Пароль: admin123 (хеш с солью)
INSERT INTO project_489d77e8.users (email, username, password_hash, name, role, created_at, is_active)
VALUES (
    'admin@poehali.dev',
    'admin',
    '1a2b3c4d5e6f7890:8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918',
    'Администратор',
    'admin',
    NOW(),
    true
) ON CONFLICT (email) DO NOTHING;