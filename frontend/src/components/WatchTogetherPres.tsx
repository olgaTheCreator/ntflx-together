import { NavLink, Outlet } from 'react-router-dom';
import { ButtonNavQr } from './buttons/ButtonNavQr';
import { ButtonAddFriend } from './buttons/ButtonAddFriend';
import { ButtonNavLove } from './buttons/ButtonNavLove';

export const WatchTogetherPres = () => {
  const activeLink = 'opacity-100 bg-info-300';
  return (
    <div>
      <div className="z-2 fixed left-0 top-0 h-12 w-full">
        <div className="mt-5 grid h-full w-full grid-cols-3 place-items-center text-blue-500">
          <NavLink
            to="./watch-together/qr"
            className={({ isActive }) => (isActive ? activeLink : 'h-12 w-16 rounded-lg bg-info-500 text-white')}
          >
            <ButtonNavQr />
          </NavLink>
          <NavLink
            to="./watch-together/friends"
            className={({ isActive }) => (isActive ? activeLink : 'h-12 w-16 rounded bg-info-500 text-white')}
          >
            <ButtonAddFriend />
          </NavLink>
          <NavLink
            to="./watch-together/movies"
            className={({ isActive }) => (isActive ? activeLink : 'h-12 w-16 rounded bg-info-500 text-white')}
          >
            <ButtonNavLove />
          </NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
