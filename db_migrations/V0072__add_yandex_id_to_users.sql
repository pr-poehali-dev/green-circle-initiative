-- Add yandex_id column for Yandex OAuth integration
ALTER TABLE users ADD COLUMN IF NOT EXISTS yandex_id VARCHAR(50);
CREATE INDEX IF NOT EXISTS idx_users_yandex_id ON users(yandex_id);