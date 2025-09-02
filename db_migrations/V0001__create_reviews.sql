CREATE TABLE project_489d77e8.reviews (
    id SERIAL PRIMARY KEY,
    product_id INTEGER,
    customer_name VARCHAR(255) NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
    review_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);