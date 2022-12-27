import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'kdu-ui',
    file: 'dist/kdu-ui.umd.js',
    format: 'umd',
    sourcemap: true,
  },
})

export default config
