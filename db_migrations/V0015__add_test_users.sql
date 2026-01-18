-- Добавляем тестовых пользователей
INSERT INTO "t_p31278751923_qanelph".users (username, password, role) VALUES 
('admin', 'secure_hash_123', 'administrator'),
('user1', 'password_hash_456', 'user'),
('moderator', 'mod_hash_789', 'moderator'),
('guest_user', 'guest_hash_000', 'guest');