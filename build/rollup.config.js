import path from 'path'
import license from 'rollup-plugin-license'

const version = require('../package.json').version
const banner =
`jQuery Ripples plugin v${version} / https://github.com/sirxemic/jquery.ripples
MIT License
@author sirxemic / https://sirxemic.com/`

export default {
  entry: path.join(__dirname, '../src/main.js'),
  dest: path.join(__dirname, '../dist/jquery.ripples.js'),
  format: 'umd',
  plugins: [
    license({
      banner
    })
  ],
  external: [ 'jquery' ]
}
