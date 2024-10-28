-- init.sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    product_id INTEGER REFERENCES products(id),
    order_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    quantity INTEGER NOT NULL
);

CREATE TABLE notifications (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id),
    is_read BOOLEAN DEFAULT FALSE
);

-- Insert sample data
INSERT INTO users (username, email) VALUES ('testuser', 'test@example.com');
INSERT INTO products (name, description, price) VALUES 
    ('Product 1', 'Description for Product 1', 19.99),
    ('Product 2', 'Description for Product 2', 29.99);
