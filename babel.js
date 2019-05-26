'use strict';
if (process.env.NODE_ENV === 'production') {
  module.exports = require('react-hot-loader/dist/babel.production.min.js');
} else {
  module.exports = require('react-hot-loader/dist/babel.development.js');
}
