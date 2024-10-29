GRANT ALL PRIVILEGES ON DATABASE "order_notifier" TO kahler;

-- tables:
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    role_id INTEGER REFERENCES roles(id),
    hashed_password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE carts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cart_products (
    id SERIAL PRIMARY KEY,
    cart_id INTEGER REFERENCES carts(id),
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE notifications (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id),
    is_read BOOLEAN DEFAULT FALSE,
    message TEXT,
    type VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_products (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id),
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- indexes:
CREATE INDEX idx_users_email ON users(email);

CREATE INDEX idx_products_name ON products(name);

CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);

CREATE INDEX idx_notifications_order_id ON notifications(order_id);
CREATE INDEX idx_notifications_is_read ON notifications(is_read);

CREATE INDEX idx_cart_products_cart_product ON cart_products(cart_id, product_id);

CREATE INDEX idx_order_products_order_product ON order_products(order_id, product_id);


-- sample data:
INSERT INTO roles (name) VALUES ('admin');
INSERT INTO roles (name) VALUES ('user');

INSERT INTO users (username, email, role_id, hashed_password) VALUES ('admin', 'admin@ordernotifier.one', 1, 'admin');
INSERT INTO users (username, email, role_id, hashed_password) VALUES ('user', 'user@ordernotifier.one', 2, 'user');

INSERT INTO products (name, description, price, stock) VALUES ('Product 1', 'Description 1', 10.00, 100);
INSERT INTO products (name, description, price, stock) VALUES ('Product 2', 'Description 2', 20.00, 200);
INSERT INTO products (name, description, price, stock) VALUES ('Product 3', 'Description 3', 30.00, 300);
INSERT INTO products (name, description, price, stock) VALUES ('Product 4', 'Description 4', 40.00, 400);
INSERT INTO products (name, description, price, stock) VALUES ('Product 5', 'Description 5', 50.00, 500);

INSERT INTO carts (user_id) VALUES (2);
INSERT INTO cart_products (cart_id, product_id, quantity) VALUES (1, 1, 1);
INSERT INTO cart_products (cart_id, product_id, quantity) VALUES (1, 2, 2);
INSERT INTO cart_products (cart_id, product_id, quantity) VALUES (1, 3, 3);
INSERT INTO cart_products (cart_id, product_id, quantity) VALUES (1, 4, 4);
INSERT INTO cart_products (cart_id, product_id, quantity) VALUES (1, 5, 5);

INSERT INTO orders (user_id, status) VALUES (2, 'pending');
INSERT INTO order_products (order_id, product_id, quantity) VALUES (1, 1, 1);
INSERT INTO order_products (order_id, product_id, quantity) VALUES (1, 2, 2);
INSERT INTO order_products (order_id, product_id, quantity) VALUES (1, 3, 3);
INSERT INTO order_products (order_id, product_id, quantity) VALUES (1, 4, 4);
INSERT INTO order_products (order_id, product_id, quantity) VALUES (1, 5, 5);

INSERT INTO orders (user_id, status) VALUES (2, 'completed');
INSERT INTO order_products (order_id, product_id, quantity) VALUES (2, 1, 1);
INSERT INTO order_products (order_id, product_id, quantity) VALUES (2, 2, 2);
INSERT INTO order_products (order_id, product_id, quantity) VALUES (2, 3, 3);
INSERT INTO order_products (order_id, product_id, quantity) VALUES (2, 4, 4);
INSERT INTO order_products (order_id, product_id, quantity) VALUES (2, 5, 5);

INSERT INTO notifications (order_id, message, type) VALUES (1, 'Order 1 is pending', 'order');
INSERT INTO notifications (order_id, message, type) VALUES (2, 'Order 2 is completed', 'order');