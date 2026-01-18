-- Add telegram_id column for Telegram authentication
ALTER TABLE users ADD COLUMN IF NOT EXISTS telegram_id VARCHAR(50);
CREATE INDEX IF NOT EXISTS idx_users_telegram_id ON users(telegram_id);