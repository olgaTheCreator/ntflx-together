import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { http_url } from '../context/Url';
import { useEffect, useState } from 'react';

interface Friend {
  username: string;
  uuid: string;
}

const fetchFriendName = (url: string | undefined) => axios.get(`${http_url}/user/${url}`);

export const AddFriend = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [friend, setFriend] = useState<Friend>({ username: '', uuid: '' });
  const [friends, setFriends] = useState<Array<Friend>>([]);

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
        console.log(response.data, response.data.username);
        setFriend({ username: response.data.username, uuid: response.data.public_uuid });
      })
      .catch((e) => console.log(e));
  }, [params.uuid_friend]);
  useEffect(() => {
    const saved = localStorage.getItem('friends');
    console.log(saved);
    if (saved) {
      const initial = JSON.parse(saved);
      setFriends(initial);
    }
  }, []);

  return (
    <div className="mx-auto mt-5 grid w-full max-w-xs grid-cols-2 gap-4 rounded bg-orange p-5 text-xl text-blue-500">
      <div>
        Add <strong>{friend.username}</strong> as friend?{' '}
      </div>
      <div className="flex-xol flex place-items-center justify-around">
        <button
          onClick={() => handleAddFriend(friend)}
          className="h-9 w-14 rounded-md bg-red-500 px-3 text-lg text-black transition-colors duration-150 md:h-12 lg:hover:bg-red-700"
        >
          Yes
        </button>
        <button
          onClick={() => {
            navigate('/qr');
          }}
          className="h-9 w-14 rounded-md bg-green-500 px-3 text-lg text-black transition-colors duration-150 md:h-12 lg:hover:bg-green-700"
        >
          No
        </button>
      </div>
    </div>
  );
};
