CREATE TABLE IF NOT EXISTS motion_pictures(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    media_type TEXT,
    title TEXT,
    imdb_rating INTEGER,
    poster_url TEXT,
    season_count INTEGER
);