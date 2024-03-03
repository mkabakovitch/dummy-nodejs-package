# Folder Structure

In order to separate the source code, unit tests, documentation, the following folder structure is used:

```
.
├─ .github
│  └─ workflows
│     ├─ publish-github-packahes.yml
│     └─ publish-github-pages.yml
├─ docs
│  └─ .vitepress
│  │  └─ config.mjs
│  ├─ public
│  │  └─ assets
│  │    └─ logos
│  ├─ about.md
│  ├─ ...
│  └─ vitepless-examples.md
├─ src
│  ├─ dummy.mjs
│  └─ mathematic.cjs
├─ test
│  ├─ dummy.test.js
│  └─ mathematic.test.js
├─ .babelrc
├─ .gitignore
├─ .npmrc
├─ package.json
├─ package-lock.json
└─ README.md
```

## .github/workflows Folder

The ```.github/workflows``` folder contains workflows for building and publishing the content of the **docs** folder to [GitHub Pages](./github-pages.md) and publishing package to [GitHub Packages](./github-packages.md).


## docs Folder

The ```docs``` folder contains project documentation, both development and end-user. This is also the source for the [GitHub Pages](./github-pages) site.

## src Folder

For this package the source code is placed into ```/src``` folder. The reason for that is to provide logical separation between the busibess functionality of the package and development infrastructure like testing and documentation. 

::: tip **/src** folder
Other projects, especially built with [CAP](https://cap.cloud.sap/docs/) may (and even [should](https://cap.cloud.sap/docs/get-started/jumpstart#minimal-configuration)) not use ```/src``` folder for the source code. Instead, the root folder of the source code is the the root folder of the repository.
:::

### dummy.mjs File

The ```dummy.mjs``` file contains the [Dummy](https://github.com/mkabakovitch/dummy-package/blob/main/src/dummy.mjs) Node.js module in [ES (ECMAScript)](https://nodejs.org/api/esm.html#modules-ecmascript-modules) format. The ```.mjs``` extension is used to explicitly specify ES module format.

### mathematic.cjs File

The ```mathematic.cjs``` file contains the [Mathematic](https://github.com/mkabakovitch/dummy-package/blob/main/src/mathematic.cjs) Node.js module in [CommonJS](https://nodejs.org/api/modules.html#modules-commonjs-modules) format.  The ```.mjs``` extension is used to explicitly specify CommonJS module format.

## test Folder

the **test** contains scripts for testing ```Dummy``` and ```Mathematics``` modules.

## packaje.json File

[packaje.json](https://github.com/mkabakovitch/dummy-package/blob/main/package.json) is the package definition file. See also [npm Docs](https://docs.npmjs.com/cli/v6/configuring-npm/package-json) for more information about ```package.json``` file structure.

## README.md File

This file contains brief information for developers and end-users. It may be used instead of project documentation for small or utility projects. For larger projects use [GitHub Pages](./github-pages.md).