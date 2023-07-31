import * as esbuild from 'esbuild';
import { readFileSync } from 'node:fs';
import http from 'node:http';

let ctx = await esbuild.context({
  entryPoints: ['./src/main.tsx'],
  bundle: true,
  outdir: './dist',
  sourcemap: false,
  loader: {
    '.png': 'file',
    '.jpg': 'file',
    '.jpeg': 'file',
    '.svg': 'file',
    '.gif': 'file',
  },
});

await ctx.watch();

let { host, port } = await ctx.serve({
  port: 8003,
  servedir: './dist',
});

await esbuild.build({
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
});

http.createServer((req, res) => {
  const withoutTogetherUrl = req.url.includes('together') ? req.url.replace('/together', '') : '/';
  console.log(res.url, withoutTogetherUrl)

  console.log(withoutTogetherUrl);

  const options = {
    hostname: host,
    port: port,
    path: withoutTogetherUrl,
    method: req.method,
    headers: req.headers,
    body: req.body,
  }

  const proxyReq = http.request(options, proxyRes => {
    // If esbuild returns "not found", send a custom 404 page
    if (proxyRes.statusCode === 404) {
      console.log('forcing index.html')
      const fileSync = readFileSync('./dist/index.html');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(fileSync);
      return
    }

    // Otherwise, forward the response from esbuild to the client
    res.writeHead(proxyRes.statusCode, proxyRes.headers)
    proxyRes.pipe(res, { end: true })
  })

  // Forward the body of the request to esbuild
  req.pipe(proxyReq, { end: true })
}).listen(8000)

console.log(`serving at: http://localhost:8000/together/`);
