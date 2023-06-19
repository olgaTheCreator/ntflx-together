import * as React from 'react';
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { SwipeAmovieContainer } from './components/SwipeAmovieContainer';
import { LovedMoviesContainer } from './components/LovedMoviesContainer';
import { SwipeAmovieWithUrlContainer } from './components/SwipeAmovieWithUrlContainer';
import { NavBottomContainer } from './components/NavBottomContainer';
import { RegisterUserContainer } from './components/RegisterUserContainer';
import { RegisterUserSuccess } from './components/RegisterUserSuccess';
import { UserContext } from './context/UserContext';
import { GenerateAndScanQrContainer } from './components/GenerateAndScanQrContainer';
import { WatchTogetherLovedContainer } from './components/WatchTogetherLovedContainer';
import { AddFriendContainer } from './components/AddFriendContainer';
import { AddFriendFirstCard } from './components/cards/AddFriendFirstCard';

//eslint-disable-next-line no-undef, no-restricted-globals
//new EventSource('/esbuild').addEventListener('change', () => location.reload());
export interface Friend {
  username: string;
  uuid: string;
}

export function App() {
  const [friends, setFriends] = React.useState<Array<Friend>>([]);

  useEffect(() => {
    const saved = localStorage.getItem('friends');
    if (saved) {
      const initial = JSON.parse(saved);
      setFriends(initial);
    }
  }, []);

  const [cookies, setCookie] = useCookies([
    'ntflx_together_username',
    'ntflx_together_uuid_public',
    'ntflx_together_uuid_private',
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    if (
      cookies.ntflx_together_username == undefined ||
      cookies.ntflx_together_uuid_private == undefined ||
      cookies.ntflx_together_uuid_public == undefined
    ) {
      navigate('/register');
    }
  }, [cookies]);

  const user = {
    username: cookies.ntflx_together_username,
    uuid_private: cookies.ntflx_together_uuid_private,
    uuid_public: cookies.ntflx_together_uuid_public,
  };

  return (
    <UserContext.Provider value={user}>
      <div className="flex h-screen max-w-full flex-col justify-start overflow-scroll bg-blue-500 font-poppins text-white lg:h-screen-small">
        <Routes>
          <Route path="/" element={<SwipeAmovieContainer />} />
          <Route path="movie/:imdb_id" element={<SwipeAmovieWithUrlContainer />} />
          <Route path="loved" element={<LovedMoviesContainer />} />
          <Route path="register" element={<RegisterUserContainer setCookie={setCookie} />} />
          <Route path="success" element={<RegisterUserSuccess />} />
          <Route path="qr" element={<GenerateAndScanQrContainer friends={friends} setFriends={setFriends} />}>
            <Route path=":uuid_friend" element={<AddFriendContainer />} />
          </Route>
          <Route path="watch-together">
            <Route index element={<WatchTogetherLovedContainer friends={friends} setFriends={setFriends} />} />
            <Route
              path=":uuid_friend"
              element={<WatchTogetherLovedContainer friends={friends} setFriends={setFriends} />}
            />
          </Route>
        </Routes>

        <NavBottomContainer />
      </div>
    </UserContext.Provider>
  );
}
