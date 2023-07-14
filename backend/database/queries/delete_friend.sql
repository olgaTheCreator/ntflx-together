DELETE FROM friends
WHERE (uuid_public = $uuid_public
AND friends_uuid_public = $friend_uuid) OR (uuid_public = $friend_uuid AND friends_uuid_public = $uuid_public);