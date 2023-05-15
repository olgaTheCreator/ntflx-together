import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SwipeAmovieContainer } from './components/SwipeAmovieContainer';
import { LovedMoviesContainer } from './components/LovedMoviesContainer';
import { NavBottomContainer } from './components/NavBottomContainer';
import { useCookies } from 'react-cookie';
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line no-undef, no-restricted-globals
// new EventSource('/esbuild').addEventListener('change', () => location.reload());

export function App() {
  const [cookies, setCookie] = useCookies(['ntflx_user']);
  const [uuid, setUuid] = React.useState('');
  console.log(cookies.ntflx_user);
  if (!uuid || uuid == undefined) {
    setUuid(uuidv4());
  }
  const newCookie = () => {
    setCookie('ntflx_user', uuid, { maxAge: 2592000, sameSite: true });
  };

  return (
    <div className="h-screen flex-col justify-center overflow-scroll bg-blue-500 font-poppins text-white">
      {cookies.ntflx_user != undefined ? <span>Hello {cookies.ntflx_user}</span> : <span>No cookie</span>}
      <button onClick={newCookie}>press me</button>
      {/* {console.log(cookies.ntflx_user, uuid)} */}
      {/* <div className="text-lg font-bold text-warning-400"></div> */}
      {/* <div className="flex h-screen max-h-screen max-w-md flex-col items-center justify-between">
        <div className="flex h-7/8 justify-center"> */}
      <Routes>
        <Route path="/" element={<SwipeAmovieContainer />} />

        <Route path="/loved" element={<LovedMoviesContainer />} />
        {/* <Route path="/loved" element={<WatchTogether />} /> */}
        {/* {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      {/* </div> */}
      {/* <div className="z-2 fixed bottom-0 left-0 h-14 w-full bg-orange"> */}
      <NavBottomContainer />
      {/* </div> */}
    </div>
  );
}
