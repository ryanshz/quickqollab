-- Client (intepret as User) table
CREATE TABLE IF NOT EXISTS client
(
    client_id     SERIAL          PRIMARY KEY,
    username      VARCHAR(36)     NOT NULL UNIQUE,
    email         VARCHAR(255)    NOT NULL UNIQUE,
    password_hash VARCHAR(255)    NOT NULL,
    date_created  TIMESTAMP       DEFAULT CURRENT_TIMESTAMP
);