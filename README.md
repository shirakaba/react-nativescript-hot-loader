# React NativeScript Hot Loader

A very minor tweak to `react-hot-loader` to enable its usage with NativeScript.

# About

[React Hot Loader](https://github.com/gaearon/react-hot-loader) expects to run in an environment bearing the `window` object. NativeScript uses `global` instead, so this repository provides an amended `index.js` entrypoint using `global` to satisfy NativeScript. The other source files in the repo have been altered to point to `react-hot-loader` distribution files.

There may well be a better way to achieve this, but this is the easiest approach I could think of.

# Usage

In short: Just use exactly as you'd use `react-hot-loader`, but replacing the name with `react-nativescript-hot-loader`. Details below.

## Installation

```sh
npm install --save-dev react-nativescript-hot-loader
# No need to install 'react-hot-loader', because it's listed as a sub-dependency.
```

## Module bundler configuration

Where you would normally write `"react-hot-loader/<module bundler>"` (e.g. `react-hot-loader/babel`) in your module bundler config, simply write `"react-nativescript-hot-loader/<module bundler>"` instead.

```js
const babelLoader = {
    loader: "babel-loader",
    options: {
        cacheDirectory: true,
        babelrc: false,
        presets: [
            "@babel/preset-react"
        ],
        plugins: [
            /* plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript */
            // ["@babel/plugin-proposal-decorators", { legacy: true }],
            // "react-hot-loader/babel",
            "react-nativescript-hot-loader/babel",
            ["@babel/plugin-proposal-class-properties", { loose: true }],
        ]
    }
};
```

## Importing as a module

Just replace any usage of `'react-hot-loader'` with `'react-nativescript-hot-loader'`, e.g.:

```js
// import { hot } from 'react-hot-loader';
import { hot } from 'react-nativescript-hot-loader';
```

## API documentation

Although the import is renamed, the API is exactly the same; refer to the documentation in the `react-hot-loader` repo: https://github.com/gaearon/react-hot-loader

# Keeping up-to-date

This should automatically continue to patch the latest minor release of `react-hot-loader` (assuming the repo adheres to semver).

# Licence

Please refer to `react-hot-loader-LICENSE` for the licence for `react-hot-loader`, which this module alters.

This repo itself also follows a MIT licence.
