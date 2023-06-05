import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { App } from './app';

// eslint-disable-next-line no-undef, no-restricted-globals
new EventSource('http://0.0.0.0:8000/esbuild').addEventListener('change', () => location.reload());

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <CookiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>,
  );
}
