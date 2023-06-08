import { NavLink } from 'react-router-dom';
import { ButtonAddFriend } from '../buttons/ButtonAddFriend';

export const AddFriendFirstCard = () => {
  return (
    <div className="mx-auto mt-5 w-full max-w-xs rounded bg-orange px-5 py-16">
      <h1 className="text-center text-3xl font-medium text-blue-500">Add a friend first</h1>
      <div className="mt-5 text-info-500">
        <NavLink to="/./qr">
          <ButtonAddFriend />
        </NavLink>
      </div>
    </div>
  );
};
