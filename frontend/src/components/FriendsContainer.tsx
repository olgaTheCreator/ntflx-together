import { useEffect, useState } from 'react';
import { FriendsPres } from './FriendsPres';
import { Outlet, useOutletContext } from 'react-router-dom';

export interface Friend {
  username: string;
  uuid: string;
}

type ContextType = { friends: Friend[]; setFriends: React.Dispatch<React.SetStateAction<Friend[]>> };

export const FriendsContainer = () => {
  const [friends, setFriends] = useState<Array<Friend>>([]);

  useEffect(() => {
    const saved = localStorage.getItem('friends');
    if (saved) {
      const initial = JSON.parse(saved);
      setFriends(initial);
    }
  }, []);

  const handleRemoveFriend = (friend: Friend) => {
    const newFriends = friends.filter((fri) => fri.uuid != friend.uuid);
    setFriends(newFriends);
    localStorage.setItem('friends', JSON.stringify(newFriends));
    console.log('friend removed');
  };

  return (
    <div className="p-5">
      <Outlet context={{ friends, setFriends }} />
      {friends.length > 0 ? (
        <div className="pb-2 text-lg text-blue-500">Choose a friend to see movies loved by both of you:</div>
      ) : (
        ''
      )}
      {friends.map((friend) => (
        <FriendsPres handleRemoveFriend={handleRemoveFriend} friend={friend} key={friend.uuid} />
      ))}
    </div>
  );
};

export const useFriend = () => {
  return useOutletContext<ContextType>();
};
