if (process.env.NODE_ENV === 'production') {
  module.exports = require('react-hot-loader/dist/webpack.production.min.js');
} else {
  module.exports = require('react-hot-loader/dist/webpack.development.js');
}
