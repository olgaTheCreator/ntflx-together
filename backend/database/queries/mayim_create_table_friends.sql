CREATE TABLE IF NOT EXISTS friends(
    uuid_public TEXT NOT NULL,
    friends_uuid_public TEXT NOT NULL,
    PRIMARY KEY (uuid_public, friends_uuid_public)
    FOREIGN KEY (friends_uuid_public) REFERENCES users (uuid_public),
    FOREIGN KEY (uuid_public) REFERENCES users (uuid_public)
);