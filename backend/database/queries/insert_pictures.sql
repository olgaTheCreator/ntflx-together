INSERT INTO motion_pictures(
    imdb_id,
    media_type,
    title ,
    imdb_rating,
    link,
    poster_url_342,
    poster_url_780,
    season_count
)
VALUES (
    $imdb_id,
    $media_type,
    $title,
    $imdb_rating,
    $link,
    $poster_url_342,
    $poster_url_780,
    $season_count
);