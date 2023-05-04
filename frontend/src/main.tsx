import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app';

// eslint-disable-next-line no-undef, no-restricted-globals
new EventSource('/esbuild').addEventListener('change', () => location.reload());

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
}
