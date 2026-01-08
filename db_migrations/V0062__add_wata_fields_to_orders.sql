ALTER TABLE orders ADD COLUMN IF NOT EXISTS wata_order_id INTEGER UNIQUE;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS wata_transaction_id VARCHAR(100);

CREATE INDEX IF NOT EXISTS idx_orders_wata_order_id ON orders(wata_order_id);