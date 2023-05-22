INSERT OR REPLACE INTO swiped_movies(
    uuid_public,
    imdb_id,
    liked
    )
VALUES (
    $uuid_public,
    $imdb_id,
    $liked
    );
-- ON CONFLICT(uuid_public, imdb_id) DO UPDATE SET liked=excluded.$liked; 