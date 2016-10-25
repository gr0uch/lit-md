# Literate Markdown

[![Build Status](https://img.shields.io/travis/sapeien/lit-md/master.svg?style=flat-square)](https://travis-ci.org/sapeien/lit-md)
[![npm Version](https://img.shields.io/npm/v/lit-md.svg?style=flat-square)](https://www.npmjs.com/package/lit-md)
[![License](https://img.shields.io/npm/l/lit-md.svg?style=flat-square)](https://raw.githubusercontent.com/sapeien/lit-md/master/LICENSE)

Literate programming done cheaply. Extract indented blocks from Markdown files to produce executable code.

```
$ npm install lit-md
```


## Usage

```sh
$ lit-md < input.js.md > output.js
```

The input might look like:

```md
Some program
============

Add one and one together.

    1 + 1

That's it!
```

This outputs:

```
1 + 1
```


## License

This software is licensed under the [GPL v3 license](//github.com/sapeien/lit-md/blob/master/LICENSE).
