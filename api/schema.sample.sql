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

CREATE TABLE IF NOT EXISTS room (
    room_id       SERIAL          PRIMARY KEY,
    title         VARCHAR(100)    NOT NULL,
    created_by    VARCHAR(36)     NOT NULL,
    description   TEXT            NOT NULL,
    password      VARCHAR(255),   
    is_open       BOOLEAN         DEFAULT TRUE, 
    date_created  TIMESTAMP       DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS lobby 
(
    room_id INT NOT NULL,
    client_id INT NOT NULL,
    FOREIGN KEY (room_id) REFERENCES room(room_id),
    FOREIGN KEY (client_id) REFERENCES client(client_id),
    PRIMARY KEY (room_id, client_id)
);

