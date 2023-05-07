import * as React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { MovieCard } from './components/MovieCard';

// eslint-disable-next-line no-undef, no-restricted-globals
// new EventSource('/esbuild').addEventListener('change', () => location.reload());
const fe = (url: string) => axios.get(`http://0.0.0.0:3000/${url}`).then((res) => res.data as {});

export function App() {
  <>
    <Routes>
      {/* <Route path="/" element={<Loved />} /> */}
      {/* <Route path="/products" element={<Products />} />
       <Route path="/about" element={<About />} /> */}
    </Routes>
  </>;
  const { data, error, isLoading } = useSWR('results', fe);

  // return <div>{`${JSON.stringify({ data, isLoading, error })}`}</div>;
  return (
    // {/* <div className="text-lg font-bold text-warning-400">{JSON.stringify(data)}</div> */}
    <div className="flex h-screen max-h-screen justify-around">
      <div className="flex h-7/8 justify-center bg-blue-500">
        <MovieCard />
      </div>
      <div className="h-20 bg-orange">{''}</div>
    </div>
  );
}
