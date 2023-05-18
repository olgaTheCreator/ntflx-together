import * as React from 'react';
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { SwipeAmovieContainer } from './components/SwipeAmovieContainer';
import { LovedMoviesContainer } from './components/LovedMoviesContainer';
import { NavBottomContainer } from './components/NavBottomContainer';
import { RegisterUserContainer } from './components/RegisterUserContainer';
import { RegisterUserSuccess } from './components/RegisterUserSuccess';
import { UserContext } from './context/Context';

// eslint-disable-next-line no-undef, no-restricted-globals
// new EventSource('/esbuild').addEventListener('change', () => location.reload());

export function App() {
  const [cookies, setCookie] = useCookies([
    'ntflx_together_username',
    'ntflx_together_uuid_public',
    'ntflx_together_uuid_private',
  ]);

  const navigate = useNavigate();
  console.log(cookies.ntflx_together_username);

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
      {/* {console.log(user.username)} */}
      <div className="h-screen flex-col justify-center overflow-scroll bg-blue-500 font-poppins text-white">
        {/* <button onClick={newCookie}>press me</button> */}
        {/* {console.log(cookies.ntflx_together, uuid)} */}
        {/* <div className="text-lg font-bold text-warning-400"></div> */}
        {/* <div className="flex h-screen max-h-screen max-w-md flex-col items-center justify-between">
        <div className="flex h-7/8 justify-center"> */}
        <Routes>
          <Route path="/" element={<SwipeAmovieContainer />} />

          <Route path="/loved" element={<LovedMoviesContainer />} />
          <Route path="/register" element={<RegisterUserContainer setCookie={setCookie} />} />
          <Route path="/success" element={<RegisterUserSuccess />} />
          {/* <Route path="/loved" element={<WatchTogether />} /> */}
          {/* {/* <Route path="/products" element={<Products />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        {/* </div> */}
        {/* <div className="z-2 fixed bottom-0 left-0 h-14 w-full bg-orange"> */}
        <NavBottomContainer />
        {/* </div> */}
      </div>
    </UserContext.Provider>
  );
}
