SELECT motion_pictures.*
FROM motion_pictures
INNER JOIN swiped_movies AS user_movies
    ON motion_pictures.imdb_id = user_movies.imdb_id
INNER JOIN swiped_movies AS friend_movies
    ON user_movies.imdb_id = friend_movies.imdb_id
WHERE user_movies.liked = 1
    AND user_movies.uuid_public = $uuid_public
    AND friend_movies.liked = 1
    AND friend_movies.uuid_public = $friend_uuid
ORDER BY motion_pictures.imdb_rating DESC;