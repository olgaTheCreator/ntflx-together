import * as React from 'react';
import { createRoot } from 'react-dom/client';
import useSWR from 'swr';
import axios from 'axios';

// eslint-disable-next-line no-undef, no-restricted-globals
new EventSource('/esbuild').addEventListener('change', () => location.reload());
const fe = (url: string) => axios.get(`http://0.0.0.0:3000/${url}`).then((res) => res.data as {});

function App() {
  const { data, error, isLoading } = useSWR('api', fe);

  return <div>bs {`${JSON.stringify({ data, isLoading, error })}`}</div>;
}

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
