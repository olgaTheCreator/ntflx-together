SELECT users.* FROM friends 
INNER JOIN users
ON friends_uuid_public = users.uuid_public
WHERE friends.uuid_public = $uuid_public;

-- SELECT users.* FROM friends INNER JOIN users ON friends_uuid_public = users.uuid_public  WHERE  friends.uuid_public = $uuid_public OR friends.friends_uuid_public
