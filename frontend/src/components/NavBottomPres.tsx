import { ButtonNavLove } from './buttons/ButtonNavLove';
import { ButtonNavFriends } from './buttons/ButtonNavFriends';
import { NavLink } from 'react-router-dom';
import { ButtonNavSwipe } from './buttons/ButtonNavSwipe';
const navButtons = [ButtonNavLove];

export const NavBottomPres = () => {
  const activeLink = 'opacity-100 bg-orange-600';
  return (
    <div className="z-2 fixed bottom-0 left-0 h-12 w-full bg-orange">
      <div className="grid h-full w-full grid-cols-3 text-blue-500">
        <NavLink to="./" className={({ isActive }) => (isActive ? activeLink : 'h-12 opacity-70')}>
          <ButtonNavSwipe />
        </NavLink>
        <NavLink to="./loved" className={({ isActive }) => (isActive ? activeLink : 'opacity-70')}>
          <ButtonNavLove />
        </NavLink>
        <NavLink to="./hi" className={({ isActive }) => (isActive ? activeLink : 'opacity-70')}>
          <ButtonNavFriends />
        </NavLink>
      </div>
    </div>
  );
};
