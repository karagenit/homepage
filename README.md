# Homepage

My New Tab Default Homepage

## Setup & Usage

First, clone this repository. Most files are in `src/`.

To configure, you must edit `src/data.json` with the links etc. that you want in your homepage. Then, run `yarn build` to build a static site (located in `build/`), and then set this as your browser's homepage. 

> **NOTE:** you will have to edit the `homepage:` value in `package.json` to reflect the directory that the built files will be stored in.

### The Blue Alliance

If you wish to use the 'The Blue Alliance' widget, you must have your TBA read key stored in `src/token.js` formatted as:

```
var token = {
    token: 'abcdef0123'
}

module.exports = token
```
