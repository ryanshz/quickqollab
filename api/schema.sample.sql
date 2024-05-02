-- This is the schmea we will be using for development.
-- Paste into your local postgres db (use DataGrip)

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Client (intepret as User) table
CREATE TABLE IF NOT EXISTS client
(
    client_id     UUID            PRIMARY KEY DEFAULT uuid_generate_v4(),
    username      VARCHAR(36)     NOT NULL UNIQUE,
    email         VARCHAR(255)    NOT NULL UNIQUE,
    password_hash VARCHAR(255)    NOT NULL,
    date_created  TIMESTAMP       DEFAULT CURRENT_TIMESTAMP,
    profile_picture BYTEA
);

CREATE TABLE IF NOT EXISTS room (
    room_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(100) NOT NULL,
    password_hash VARCHAR(255),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    host_id UUID NOT NULL,
    FOREIGN KEY (host_id) REFERENCES client(client_id)
);

CREATE TABLE IF NOT EXISTS lobby (
    id SERIAL PRIMARY KEY,
    client_id UUID NOT NULL,
    room_id UUID NOT NULL,
    join_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES client(client_id),
    FOREIGN KEY (room_id) REFERENCES room(room_id)
);