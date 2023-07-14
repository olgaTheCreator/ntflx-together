import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { http_url } from '../context/Url_back';
import { useEffect, useState } from 'react';
import { AddFriendPres } from './AddFriendPres';
import { Friend } from './FriendsContainer';
import { useFriend } from './FriendsContainer';
import { useUserContext } from '../context/UserContext';
import { fetchFriends } from '../app';

const fetchFriendName = (url: string | undefined) => axios.get(`${http_url}/user/${url}`);
const handleFriend = (uuid_public: string, uuid_friend: string | undefined, action: "add" | "remove") =>
axios.post(`${http_url}/friends/${uuid_public}`,
{ uuid_friend: uuid_friend, action: action},
{ headers: { 'Content-Type': 'application/json' } })

export const AddFriendContainer = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [friend, setFriend] = useState<Friend>({ username: '', uuid: '' });
  const { friends, setFriends } = useFriend();
  const { uuid_public } = useUserContext();
  

  const handleAddFriend = (friend: Friend) => {
   handleFriend(uuid_public, friend.uuid, "add")
    console.log('friend added');
    fetchFriends(uuid_public).then((response)=> {setFriends(response.data.friends)}).catch((e) => console.log(e))
    navigate('/qr');
  };

  useEffect(() => {
    fetchFriendName(params.uuid_friend)
      .then((response) => {
        setFriend({ username: response.data.username, uuid: response.data.public_uuid });
      })
      .catch((e) => console.log(e));
  }, []);


  if (params.uuid_friend !== uuid_public) {
    return (
      <div>
        {!friends.some((f) => f.uuid === friend.uuid) && (
          <AddFriendPres friend={friend} handleAddFriend={handleAddFriend} />
        )}
      </div>
    );
  }
};
