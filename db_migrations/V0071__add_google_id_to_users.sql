-- Add google_id column for Google OAuth authentication
ALTER TABLE users ADD COLUMN IF NOT EXISTS google_id VARCHAR(50);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_users_google_id ON users(google_id);