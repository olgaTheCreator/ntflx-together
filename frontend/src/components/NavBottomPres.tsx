import { ButtonNavLove } from './buttons/ButtonNavLove';
import { ButtonNavFriends } from './buttons/ButtonNavFriends';
import { NavLink } from 'react-router-dom';
import { ButtonNavSwipe } from './buttons/ButtonNavSwipe';
import { ButtonNavQr } from './buttons/ButtonNavQr';
// const navButtons = [ButtonNavLove];

export const NavBottomPres = () => {
  const activeLink = 'opacity-100 bg-orange-600 w-full rounded-t-md h-14 ring-2 ring-orange-300 ring-inset';
  return (
    <div className="z-2 fixed bottom-0 grid  h-14 w-full grid-cols-1 place-items-center border-blue-500 md:h-14 lg:top-0 lg:border-t-8 lg:bg-blue-500">
      <div className="grid h-full w-full grid-cols-4  place-items-end text-blue-500 lg:max-w-4xl">
        <NavLink to="./" className={({ isActive }) => (isActive ? activeLink : 'h-12 w-full bg-orange')}>
          <ButtonNavSwipe />
        </NavLink>
        <NavLink to="./loved" className={({ isActive }) => (isActive ? activeLink : 'h-12 w-full  bg-orange')}>
          <ButtonNavLove />
        </NavLink>
        <NavLink to="./qr" className={({ isActive }) => (isActive ? activeLink : 'h-12 w-full  bg-orange')}>
          <ButtonNavQr />
        </NavLink>
        <NavLink to="./watch-together" className={({ isActive }) => (isActive ? activeLink : 'h-12 w-full  bg-orange')}>
          <ButtonNavFriends />
        </NavLink>
      </div>
    </div>
  );
};
