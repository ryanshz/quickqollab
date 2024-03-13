-- The client table is essential for managing user accounts within the system, facilitating authentication, 
-- and ensuring data integrity by enforcing unique usernames and email addresses.

CREATE TABLE client (
    client_id SERIAL PRIMARY KEY,
    username VARCHAR(36) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO client (username, email, password_hash, date_created)
VALUES 
    ('john_doe', 'john@example.com', 'password1', '2024-03-12 00:00:00'),
    ('jane_smith', 'jane@example.com', 'password2', '2024-03-12 00:00:00'),
    ('mark_johnson', 'mark@example.com', 'password3', '2024-03-12 00:00:00');
