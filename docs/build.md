# Build

Building a package means the code you write in one language is compiled (or "[transpiled](https://en.wikipedia.org/wiki/Source-to-source_compiler)") to the format which your package consumers will understand. In the simplest case, when the source code is written in plain JavaScript, and/or you know the consumers will be able to use it, no transpiling is required, and in the result even no build process is needed.

If the code is in still JavaScipt, but uses some features which may not be supported by all consumers, you may usе [Babel](https://babeljs.io/) for converting it to format, which the consumers will understand. However, Babel is considered to be a low-level approach. Instaed, you may use such tools as [Webpack](https://webpack.js.org/) or [Parcel](https://parceljs.org/). For sake of simplicity, this package uses Babel.

::: code-group
```json{8-10,15} [package.json]
{
  "name": "@mkabakovitch/dummy-package",
  "version": "1.0.10",
  "description": "Dummy Node.js package",
  ...
  "devDependencies": {
    ...
    "@babel/cli": "^7.23.9",
    "@babel/core": "^7.23.9",
    "@babel/preset-env": "^7.23.9",
    ...
  },
  "scripts": {
    ...
    "build": "babel src -d dist",
    ...
  }
}
```
```json [.babelrc]
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "node": "18"
        }
      }
    ]
  ],
  "plugins": []
}
```
:::
Actual build process involves not only transpiling source files, but also cleaning up artefacts from previous builds. This is done in the ```prebuild``` script, which is called by npm automatically before executing ```build``` script. See [npm Docs](https://docs.npmjs.com/cli/v6/using-npm/scripts#pre--post-scripts) for more information about pre and post scripts.