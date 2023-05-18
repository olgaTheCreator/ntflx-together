CREATE TABLE IF NOT EXISTS motion_pictures(
    imdb_id TEXT PRIMARY KEY,
    media_type TEXT,
    title TEXT,
    link TEXT,
    imdb_rating INTEGER,
    poster_url_342 TEXT,
    poster_url_780 TEXT,
    season_count INTEGER
);