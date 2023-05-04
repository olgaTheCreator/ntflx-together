import * as React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

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
  return <div className="text-lg font-bold text-blue-400">{JSON.stringify(data)}</div>;
}

// /* CSS HEX */
// --oxford-blue: #051338ff;
// --cambridge-blue: #7ca982ff;
// --seasalt: #fafafaff;
// --bittersweet-shimmer: #c83e4dff;
// --atomic-tangerine: #ff934fff;

// /* CSS HSL */
// --oxford-blue: hsla(224, 84%, 12%, 1);
// --cambridge-blue: hsla(128, 21%, 57%, 1);
// --seasalt: hsla(0, 0%, 98%, 1);
// --bittersweet-shimmer: hsla(353, 56%, 51%, 1);
// --atomic-tangerine: hsla(23, 100%, 65%, 1);
