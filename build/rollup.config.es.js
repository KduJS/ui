import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'kdu-ui',
    file: 'dist/kdu-ui.esm.js',
    format: 'es',
    sourcemap: true,
  },
  external: [
    ...base.external,
    'focus-visible',
    'k-tooltip',
    'kdu-resize',
  ],
})

export default config
