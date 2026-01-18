-- Create telegram_auth_tokens table for temporary auth tokens
CREATE TABLE IF NOT EXISTS telegram_auth_tokens (
    id SERIAL PRIMARY KEY,
    token VARCHAR(64) UNIQUE NOT NULL,
    telegram_id VARCHAR(50) NOT NULL,
    username VARCHAR(255),
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    photo_url TEXT,
    used BOOLEAN DEFAULT FALSE,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_telegram_auth_tokens_token ON telegram_auth_tokens(token);
CREATE INDEX IF NOT EXISTS idx_telegram_auth_tokens_expires_at ON telegram_auth_tokens(expires_at);