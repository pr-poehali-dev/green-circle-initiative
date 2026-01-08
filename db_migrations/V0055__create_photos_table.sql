-- Create photos table
CREATE TABLE IF NOT EXISTS photos (
    id UUID PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    s3_key VARCHAR(500) NOT NULL,
    url TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_photos_created_at ON photos(created_at DESC);
