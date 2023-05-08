import * as React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { MovieCard, MovieCardProps } from './components/MovieCard';

interface AppProps {
  movieCards: MovieCardProps;
}

// eslint-disable-next-line no-undef, no-restricted-globals
// new EventSource('/esbuild').addEventListener('change', () => location.reload());
const fe = (url: string) => axios.get(`http://0.0.0.0:3000/${url}`).then((res) => res.data as {});

export function App(moviecCards: AppProps) {
  <>
    <Routes>
      {/* <Route path="/" element={<Loved />} /> */}
      {/* <Route path="/products" element={<Products />} />
       <Route path="/about" element={<About />} /> */}
    </Routes>
  </>;
  const { data, error, isLoading } = useSWR('results', fe);

  if (data) {
    const movie: MovieCardProps = data.movies[8];

    return (
      <div className="flex h-screen max-h-screen flex-col justify-between  bg-blue-500">
        <div className="text-lg font-bold text-warning-400"></div>
        <div className="flex h-7/8 justify-center">
          <MovieCard {...movie} />
        </div>
        <div className="h-20 bg-orange"></div>
      </div>
    );
  }
}
// return <div>{`${JSON.stringify({ data, isLoading, error })}`}</div>;
