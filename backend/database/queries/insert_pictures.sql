INSERT INTO motion_pictures(
    media_type,
    title ,
    imdb_rating,
    link,
    poster_url,
    season_count
)
VALUES (
    $media_type,
    $title,
    $imdb_rating,
    $link,
    $poster_url,
    $season_count
);