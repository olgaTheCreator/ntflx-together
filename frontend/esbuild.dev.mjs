import * as esbuild from 'esbuild';

let ctx = await esbuild.context({
  entryPoints: ['./src/main.tsx'],
  bundle: true,
  outdir: './dist',
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
  servedir: './dist',
});

await esbuild.build({
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  // loader: {
  //   '.png': 'file',
  //   '.jpg': 'file',
  //   '.jpeg': 'file',
  //   '.svg': 'file',
  //   '.gif': 'file',
  // },
  // outdir: './dist',
  // publicPath: '/assets',
});

console.log(`serving at: http://${host}:${port}/`);
