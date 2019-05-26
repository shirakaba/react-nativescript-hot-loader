# React NativeScript Hot Loader

A very minor tweak to enable usage of `react-hot-loader` with NativeScript.

# About

[React Hot Loader](https://github.com/gaearon/react-hot-loader) expects to run in an environment bearing the `window` object. NativeScript uses `global` instead, so this repository provides an amended `index.js` entrypoint using `global` to satisfy NativeScript. The other source files in the repo have been altered to point to `react-hot-loader` distribution files.

There may well be a better way to achieve this, but this is the easiest approach I could think of.

## Licence

Please refer to `react-hot-loader-LICENSE` for the licence for `react-hot-loader`, which this module alters.

This repo itself also follows a MIT licence.

# Keeping up-to-date

This should continue to patch the latest minor release of `react-hot-loader` (assuming the repo adheres to semver).