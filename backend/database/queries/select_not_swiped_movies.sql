SELECT motion_pictures.*
FROM motion_pictures
LEFT JOIN swiped_movies ON motion_pictures.imdb_id = swiped_movies.imdb_id AND swiped_movies.uuid_public = $uuid_public
WHERE swiped_movies.imdb_id IS NULL;