import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SwipeAmovieContainer } from './components/SwipeAmovieContainer';
import { LovedMoviesContainer } from './components/LovedMoviesContainer';

// eslint-disable-next-line no-undef, no-restricted-globals
// new EventSource('/esbuild').addEventListener('change', () => location.reload());

export function App() {
  <></>;

  return (
    <div className="flex h-screen max-h-screen justify-center bg-blue-500">
      {/* <div className="text-lg font-bold text-warning-400"></div> */}
      <div className="flex h-screen max-h-screen max-w-md flex-col items-center justify-between">
        <div className="flex h-7/8 justify-center">
          <Routes>
            <Route path="/" element={<SwipeAmovieContainer />} />
            <Route path="/loved" element={<LovedMoviesContainer />} />
            {/* <Route path="/products" element={<Products />} />
       <Route path="/about" element={<About />} /> */}
          </Routes>
        </div>
        <div className="h-20 w-full max-w-screen-md bg-orange px-5"></div>
      </div>
    </div>
  );
}
// return <div>{`${JSON.stringify({ data, isLoading, error })}`}</div>;
