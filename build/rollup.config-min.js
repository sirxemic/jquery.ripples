import path from 'path'
import uglify from 'rollup-plugin-uglify'
import config from './rollup.config.js'

config.dest = path.join(__dirname, '../dist/jquery.ripples-min.js'),
config.plugins.unshift(uglify())

export default config
