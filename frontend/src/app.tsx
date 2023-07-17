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
import axios from 'axios';
import { http_url } from './context/Url_back';

//eslint-disable-next-line no-undef, no-restricted-globals
//new EventSource('/esbuild').addEventListener('change', () => location.reload());
export interface Friend {
  username: string;
  uuid: string;
}

export const fetchFriends = (url: string | undefined) => axios.get(`${http_url}/friends/${url}`);

export function App() {
  const [friends, setFriends] = React.useState<Array<Friend>>([]);

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

  useEffect (() => {
    fetchFriends(user.uuid_public).then((response)=> {setFriends(response.data.friends)}).catch((e) => console.log(e));
},[])
  
  return (
    <UserContext.Provider value={user}>
      <div className="flex h-screen max-w-full flex-col justify-start overflow-y-scroll bg-blue-500 font-poppins text-white lg:h-screen-small">
        <div className='lg:mt-24 max-w-full '><Routes>
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
        </Routes></div>

        <NavBottomContainer />
      </div>
    </UserContext.Provider>
  );
}
