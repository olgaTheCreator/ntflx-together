import * as React from 'react';
import { createRoot } from 'react-dom/client';

// eslint-disable-next-line no-undef, no-restricted-globals
new EventSource('/esbuild').addEventListener('change', () => location.reload());

function App() {
  return <div>Hello World!</div>;
}

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
