import { useEffect, useState } from 'react';
import { FriendsPres } from './FriendsPres';
import { Outlet, useOutletContext } from 'react-router-dom';

export interface Friend {
  username: string;
  uuid: string;
}

export interface FriendsState {
  friends: Friend[];
  setFriends: React.Dispatch<React.SetStateAction<Friend[]>>;
}

export const FriendsContainer = (props: FriendsState) => {
  const { friends, setFriends } = props;

  const handleRemoveFriend = (friend: Friend) => {
    const newFriends = friends.filter((fri) => fri.uuid != friend.uuid);
    setFriends(newFriends);
    localStorage.setItem('friends', JSON.stringify(newFriends));
    console.log('friend removed');
  };

  const handleLastFriend = (friend: Friend) => {
    const newFriends = friends.filter((fri) => fri.uuid != friend.uuid);
    const lastFriendAtIndexZero = [friend, ...newFriends];
    setFriends(lastFriendAtIndexZero);
    localStorage.setItem('friends', JSON.stringify(lastFriendAtIndexZero));
    console.log('friends updated');
  };

  return (
    <div className="p-5">
      <Outlet context={{ friends, setFriends }} />
      {friends.length > 0 ? (
        <div className="pb-2 text-lg text-blue-500">Choose a friend to see movies you both want to watch.</div>
      ) : (
        ''
      )}
      {friends.map((friend) => (
        <FriendsPres
          handleLastFriend={handleLastFriend}
          handleRemoveFriend={handleRemoveFriend}
          friend={friend}
          key={friend.uuid}
        />
      ))}
    </div>
  );
};

export const useFriend = () => {
  return useOutletContext<FriendsState>();
};
