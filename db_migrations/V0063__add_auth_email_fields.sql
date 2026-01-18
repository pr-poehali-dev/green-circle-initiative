-- Add email and other fields required by auth-email extension
ALTER TABLE t_p18279400_green_circle_initiat.users 
  ADD COLUMN IF NOT EXISTS email VARCHAR(255) UNIQUE,
  ADD COLUMN IF NOT EXISTS name VARCHAR(255),
  ADD COLUMN IF NOT EXISTS failed_login_attempts INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS last_failed_login_at TIMESTAMP,
  ADD COLUMN IF NOT EXISTS last_login_at TIMESTAMP;

-- Create index on email
CREATE INDEX IF NOT EXISTS idx_users_email ON t_p18279400_green_circle_initiat.users(email);

-- Update existing users to have email = username if email is null
UPDATE t_p18279400_green_circle_initiat.users 
SET email = username || '@temp.local'
WHERE email IS NULL;