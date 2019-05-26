'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('react-hot-loader/dist/react-hot-loader.production.min.js');
} else if (process.env.NODE_ENV === 'test') {
  module.exports = require('react-hot-loader/dist/react-hot-loader.production.min.js');
/* Really what we need is an environment variable clarifying that this is {N} CLI, to compare against */
// } else if (typeof window === 'undefined') {;
//   // this is just server environment
//   module.exports = require('react-hot-loader/dist/react-hot-loader.production.min.js');
} else if (!module.hot) {
  console.error('React-Hot-Loader: Hot Module Replacement is not enabled');
  module.exports = require('react-hot-loader/dist/react-hot-loader.production.min.js');
} else {
  var evalAllowed = false;
  try {
    eval('evalAllowed = true');
  } catch (e) {
    // eval not allowed due to CSP
  }

  // RHL needs setPrototypeOf to operate Component inheritance, and eval to patch methods
  var jsFeaturesPresent = !!Object.setPrototypeOf;

  if (!jsFeaturesPresent || !evalAllowed) {
    // we are not in prod mode, but RHL could not be activated
    console.warn('React-Hot-Loader is not supported in this environment.');
    module.exports = require('react-hot-loader/dist/react-hot-loader.production.min.js');
  } else {
    /* Really what we need is an environment variable clarifying that this is {N} CLI, to compare against */
    // module.exports = window.reactHotLoaderGlobal = require('react-hot-loader/dist/react-hot-loader.development.js');
    module.exports = global.reactHotLoaderGlobal = require('react-hot-loader/dist/react-hot-loader.development.js');
  }
}