import { Link, useNavigate } from 'react-router-dom';
import { Friend } from './FriendsContainer';

// interface FriendsPresProps {
//     friends: Friend[]
// }
// const navigate = useNavigate();

export const FriendsPres = ({
  friend,
  handleRemoveFriend,
}: {
  friend: Friend;
  handleRemoveFriend: (friend: Friend) => void;
}) => {
  return (
    <div className="mx-auto grid w-full max-w-xs grid-cols-2 gap-4 rounded border-2 border-blue-500 bg-orange p-5 text-xl text-blue-500">
      <Link to={`../watch-together/${friend.uuid}`}>
        <button className="h-full w-full font-bold">{friend.username}</button>
      </Link>
      <button
        onClick={() => handleRemoveFriend(friend)}
        className="h-9 w-fit rounded-md bg-red-500 px-2 text-base  text-black transition-colors duration-150 md:h-12 lg:hover:bg-red-700"
      >
        Remove
      </button>
    </div>
  );
};
