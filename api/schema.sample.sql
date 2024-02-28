-- This is the schmea we will be using for development.
-- Paste into your local postgres db (use DataGrip)

-- Client (intepret as User) table
CREATE TABLE IF NOT EXISTS client
(
    client_id     SERIAL          PRIMARY KEY,
    username      VARCHAR(36)     NOT NULL UNIQUE,
    email         VARCHAR(255)    NOT NULL UNIQUE,
    password_hash VARCHAR(255)    NOT NULL,
    date_created  TIMESTAMP       DEFAULT CURRENT_TIMESTAMP
);

-- Dataset to populate Client table
INSERT INTO client (username, email, password_hash) VALUES
('ChibiCoder', 'chibicoder@techweeb.com', 'hashed_password_1'),
('RamenDev', 'ramendev@noodlecode.com', 'hashed_password_2'),
('HaikuHacker', 'haikuhacker@poetictech.com', 'hashed_password_3'),
('SakuraSysadmin', 'sakurasysadmin@itblossoms.com', 'hashed_password_4'),
('OtakuEngineer', 'otakuengineer@animeinnovation.com', 'hashed_password_5');