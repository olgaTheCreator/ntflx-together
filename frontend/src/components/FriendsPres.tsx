import { Link, useNavigate } from 'react-router-dom';
import { Friend } from './FriendsContainer';

// interface FriendsPresProps {
//     friends: Friend[]
// }
// const navigate = useNavigate();

export const FriendsPres = ({
  friend,
  handleRemoveFriend,
  handleLastFriend,
}: {
  friend: Friend;
  handleRemoveFriend: (friend_uuid:string) => void;
  handleLastFriend: (friend: Friend) => void;
}) => {
  return (
    <div className="mx-auto mb-4 grid w-full max-w-xs grid-cols-2 gap-4 rounded border-2 border-blue-500 bg-orange p-3 text-xl text-blue-500">
      <Link to={`../watch-together/${friend.uuid}`}>
        <button 
        onClick={() => handleLastFriend(friend)} 
        className="h-full w-full font-bold underline">
          {friend.username}
        </button>
      </Link>
      <button
        onClick={() => handleRemoveFriend(friend.uuid)}
        className="h-9 w-fit rounded-md bg-red-500 px-2 text-base  text-black transition-colors duration-150 md:h-12 lg:hover:bg-red-700"
      >
        Remove
      </button>
    </div>
  );
};
