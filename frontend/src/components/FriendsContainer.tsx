import { useEffect, useState } from 'react';
import { FriendsPres } from './FriendsPres';
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';
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

const fetchFriends = (url: string | undefined) => axios.get(`${http_url}/friends/${url}`);

const handleFriend = (uuid_public: string, uuid_friend: string | undefined, action: "add" | "remove") =>

axios.post(`${http_url}/friends/${uuid_public}`,
{ uuid_friend: uuid_friend, action: action},
{ headers: { 'Content-Type': 'application/json' } })


export const FriendsContainer = (props: FriendsState) => {
  const { friends, setFriends } = props;
  const {uuid_public} = useUserContext();
  const navigate = useNavigate();

  useEffect (() => {
    let id = setInterval(() => fetchFriends(uuid_public).then((response)=> {setFriends(response.data.friends)}).catch((e) => console.log(e)), 1000)
    return clearInterval(id)
},[])

  console.log(friends)


  const handleRemoveFriend = (friend_uuid:string) => {
    handleFriend(uuid_public, friend_uuid, "remove")
    console.log('friend removed');
    const lastFriend = localStorage.getItem("last_friend")
    const storedFriend: Friend = lastFriend? JSON.parse(lastFriend): {} 
    if (storedFriend.uuid === friend_uuid) {
      localStorage.removeItem("last_friend")
    }
    fetchFriends(uuid_public).then((response)=> {setFriends(response.data.friends)}).catch((e) => console.log(e));
    navigate('/qr');
  };

  const handleLastFriend = (friend:Friend) => {
    localStorage.setItem("last_friend", JSON.stringify(friend))
  }



  return (
    <div className="p-5">
      <Outlet context={{ friends, setFriends }} />
      {friends.length > 0 ? (
        <div className="pb-2 text-lg text-blue-500">Choose a friend to see movies you both want to watch.</div>
      ) : (
        ''
      )}
      {friends.map((frie) => (
        <FriendsPres
          handleLastFriend={handleLastFriend}
          handleRemoveFriend={handleRemoveFriend}
          friend={frie}
          key={frie.uuid}
        />
      ))}
    </div>
  );
};

export const useFriend = () => {
  return useOutletContext<FriendsState>();
};
