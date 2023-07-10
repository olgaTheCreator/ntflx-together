import { useEffect, useState } from 'react';
import { FriendsPres } from './FriendsPres';
import { Outlet, useOutletContext } from 'react-router-dom';
import axios from 'axios';
import { http_url } from '../context/Url_back';
import { useUserContext } from '../context/UserContext';

export interface Friend {
  username: string;
  uuid: string;
}

export interface FriendsState {
  friends: Friend[];
  setFriends: React.Dispatch<React.SetStateAction<Friend[]>>;
}

const handleFriend = (uuid_public: string, uuid_friend: string | undefined, action: "add" | "remove") =>
axios.post(`${http_url}/friends/${uuid_public}`,
{ uuid_friend: uuid_friend, action: action},
{ headers: { 'Content-Type': 'application/json' } })

export const FriendsContainer = (props: FriendsState) => {
  const { friends, setFriends } = props;
  const {uuid_public} = useUserContext();

  const handleRemoveFriend = (friend: Friend) => {
    handleFriend(uuid_public, friend.uuid, "remove")
    console.log('friend removed');
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
          // handleLastFriend={handleLastFriend}
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
