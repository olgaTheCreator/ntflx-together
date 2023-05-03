CREATE TABLE IF NOT EXISTS motion_pictures(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    media_type TEXT,
    title TEXT,
    imdbRating INTEGER,
    posterURL TEXT,
    seasonCount INTEGER
);