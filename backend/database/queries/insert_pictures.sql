INSERT INTO motion_pictures(
    media_type,
    title ,
    imdb_rating,
    poster_url,
    season_count
)
VALUES (
    $media_type,
    $title,
    $imdb_rating,
    $poster_url,
    $season_count
);