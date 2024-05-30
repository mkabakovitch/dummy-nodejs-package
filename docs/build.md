# Build

Building a package means transforming the source code and resources you create into output, which the consumers of your package will be able to use. For instance, you could write the code in [TypeScript](https://www.typescriptlang.org/) (which is not supported by browsers) and compile it into plain JavaScript drring the build step. Or write code in JavaScript with language constructs introduced in ES6 and [transpile](https://en.wikipedia.org/wiki/Source-to-source_compiler) it into a backward-compatible version of JavaScript that can be run by older JavaScript engines.

To illustrate the build step, and keep things simple, this package contains two modules: the [Greeter](https://github.com/mkabakovitch/dummy-nodejs-package/blob/main/src/greeter.mjs) module in [ES](https://nodejs.org/api/esm.html#modules-ecmascript-modules) format and the [Mathematics](https://github.com/mkabakovitch/dummy-nodejs-package/blob/main/src/mathematics.cjs) module in [CommonJS](https://nodejs.org/api/modules.html#modules-commonjs-modules) format. Both modules will be transpiled into CommonJS modules using the code transpiler [Babel](https://babeljs.io/). While Babel is considered to be a low-level approach, it does solely what it is supposed to do: transpile.

In a real world projects you might want not only to translipe, but also to bundle your modules bringing the code you write and all dependencies alltogether using a bundler, such as [Webpack](https://webpack.js.org/) or [Parcel](https://parceljs.org/). The ```Greeter``` and the ```Mathematics``` modules have no dependencies, so transpiling with Babel is all we need.

::: code-group

```json{8-10,15} [package.json]
{
  "name": "@mkabakovitch/dummy",
  "version": "1.0.0",
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

```json [babel.config.json]
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

Actual build process involves not only transpiling source files, but also cleaning up artefacts from previous builds before starting a new build. This is done in the ```prebuild``` script, which is called by __npm__ automatically before executing the ```build``` script:

```json{8-10} [package.json]
{
  "name": "@mkabakovitch/dummy",
  "version": "1.0.0",
  "description": "Dummy Node.js package",
  ... 
  },
  "scripts": {
    "clean": "rimraf dist",
    "prebuild": "npm run clean",
    "build": "babel src -d dist",
  }
}
```

See [npm Docs](https://docs.npmjs.com/cli/v6/using-npm/scripts#pre--post-scripts) for more information about pre and post scripts.
