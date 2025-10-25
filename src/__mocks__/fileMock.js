// Mock générique pour images/SVG/etc.
const React = require('react')

module.exports = {
  __esModule: true,
  default: 'file-mock',           // ex: import img from './a.png' -> 'file-mock'
  // Supporte aussi `import { ReactComponent as Icon } from './a.svg'`
  ReactComponent: (props) => React.createElement('svg', props),
}