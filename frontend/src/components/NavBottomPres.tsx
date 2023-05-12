import { ButtonNavLove } from './buttons/ButtonNavLove';
import { ButtonNavPlay } from './buttons/ButtonNavPlay';
import { ButtonNavFriends } from './buttons/ButtonNavFriends';
import { NavLink } from 'react-router-dom';
import { ButtonNavSwipe } from './buttons/ButtonNavSwipe';
const navButtons = [ButtonNavLove];

export const NavBottomPres = () => {
  const activeLink = 'bg-orange';
  return (
    <div className="z-2 fixed bottom-0 left-0 h-12 w-full bg-info-500">
      <div className="grid h-full w-full grid-cols-3 divide-x-2 divide-blue-500 text-blue-500">
        <NavLink to="./" className={({ isActive }) => (isActive ? activeLink : '')}>
          <ButtonNavSwipe />
        </NavLink>
        <NavLink to="./loved" className={({ isActive }) => (isActive ? activeLink : '')}>
          <ButtonNavLove />
        </NavLink>
        <NavLink to="./hi" className={({ isActive }) => (isActive ? activeLink : '')}>
          <ButtonNavFriends />
        </NavLink>
      </div>
    </div>
  );
};
