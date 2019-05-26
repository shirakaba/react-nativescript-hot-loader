'use strict';
if (!module.hot || process.env.NODE_ENV === 'production') {
  module.exports = require('react-hot-loader/dist/react-hot-loader.production.min.js');
} else {
  module.exports = require('react-hot-loader/dist/react-hot-loader.development.js');
}
