import axios from 'axios';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { http_url } from '../context/Url';
import { useEffect, useState } from 'react';
import { AddFriendPres } from './AddFriendPres';
import { Friend } from './FriendsContainer';
import { useFriend } from './FriendsContainer';

const fetchFriendName = (url: string | undefined) => axios.get(`${http_url}/user/${url}`);

export const AddFriendContainer = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [friend, setFriend] = useState<Friend>({ username: '', uuid: '' });
  const { friends, setFriends } = useFriend();

  const handleAddFriend = (friend: Friend) => {
    const newFriends = [...friends, friend];
    setFriends(newFriends);
    localStorage.setItem('friends', JSON.stringify(newFriends));
    console.log('friend added');
    navigate('/qr');
  };

  useEffect(() => {
    fetchFriendName(params.uuid_friend)
      .then((response) => {
        // console.log(response.data, response.data.username);
        setFriend({ username: response.data.username, uuid: response.data.public_uuid });
      })
      .catch((e) => console.log(e));
  }, [params.uuid_friend]);

  console.log(friends);

  return (
    <div>
      {!friends.some((f) => f.uuid === friend.uuid) && (
        <AddFriendPres friend={friend} handleAddFriend={handleAddFriend} />
      )}
    </div>
  );
};
