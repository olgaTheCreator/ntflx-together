CREATE TABLE IF NOT EXISTS swiped_movies(
    uuid_public TEXT NOT NULL,
    imdb_id TEXT NOT NULL,
    liked INT,
    PRIMARY KEY (uuid_public, imdb_id)
    FOREIGN KEY (imdb_id) REFERENCES motion_pictures (imdb_id),
    FOREIGN KEY (uuid_public) REFERENCES users (uuid_public)
);