import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/main.tsx'],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  loader: {
    '.png': 'file',
    '.jpg': 'file',
    '.jpeg': 'file',
    '.svg': 'file',
    '.gif': 'file',
  },
  outdir: './dist',
});
