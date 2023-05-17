CREATE TABLE IF NOT EXISTS users(
    username TEXT  NOT NULL,
    uuid_public TEXT NOT NULL PRIMARY KEY,
    uuid_private TEXT  NOT NULL UNIQUE
);