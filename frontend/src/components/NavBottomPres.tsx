import { ButtonNavLove } from './buttons/ButtonNavLove';
import { ButtonNavFriends } from './buttons/ButtonNavFriends';
import { NavLink } from 'react-router-dom';
import { ButtonNavSwipe } from './buttons/ButtonNavSwipe';
import { ButtonNavQr } from './buttons/ButtonNavQr';
// const navButtons = [ButtonNavLove];

export const NavBottomPres = () => {
  const activeLink = 'opacity-100 bg-orange';
  return (
    <div className="z-2 fixed bottom-0 left-0 h-12 w-full bg-orange bg-opacity-90">
      <div className="grid h-full w-full grid-cols-4 text-blue-500">
        <NavLink to="./" className={({ isActive }) => (isActive ? activeLink : 'h-12 opacity-70')}>
          <ButtonNavSwipe />
        </NavLink>
        <NavLink to="./loved" className={({ isActive }) => (isActive ? activeLink : 'opacity-70')}>
          <ButtonNavLove />
        </NavLink>
        <NavLink to="./qr" className={({ isActive }) => (isActive ? activeLink : 'opacity-70')}>
          <ButtonNavQr />
        </NavLink>
        <NavLink to="./watch-together" className={({ isActive }) => (isActive ? activeLink : 'opacity-70')}>
          <ButtonNavFriends />
        </NavLink>
      </div>
    </div>
  );
};
