import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';

export default {
  input: 'front/browser/index.ts',
  output: [
    {
      file: 'front/browser/lib/index.js',
      format: 'iife',
      name: 'TP110Reader'
    }
  ],
  plugins: [
    typescript(),
    serve({
      contentBase: [
        'front/browser/lib',
        'front/browser/static'
      ],
      host: '0.0.0.0',
      port: '10001',
      open: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
  ]
};
