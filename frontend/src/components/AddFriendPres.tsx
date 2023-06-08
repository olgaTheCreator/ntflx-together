import { useNavigate } from 'react-router-dom';
import { Friend } from './FriendsContainer';

interface AddFriendProps {
  friend: Friend;
  handleAddFriend: (friend: Friend) => void;
}

export const AddFriendPres = (props: AddFriendProps) => {
  const { friend, handleAddFriend } = props;
  const navigate = useNavigate();

  return (
    <div className="mx-auto grid w-full max-w-xs grid-cols-2 gap-4 rounded bg-orange p-5 text-xl font-semibold text-blue-500">
      <div>
        Add <span className="underline decoration-double decoration-4 underline-offset-8">{friend.username}</span> as a
        friend?{' '}
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
