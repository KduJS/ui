import base from './rollup.config.base'
import { terser } from 'rollup-plugin-terser'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'KduUi',
    file: 'dist/kdu-ui.min.js',
    format: 'iife',
    sourcemap: true,
    globals: {
      kdu: 'Kdu',
    },
  },
})

config.plugins.push(terser())

export default config
