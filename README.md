# remark-helpers

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

Basically, with remark-helpers you can find desire elements in markdown document
and process them in html or plaintext format.

Bunch of helpers for working with [remark][remark-readme].

Very important to notice, that this package is very simple and doesn’t contain
any smart and/or complicated logic, that’s why it’s tightly coupled with
[remark API for AST tree (MDAST)][remark-readme]. Check it out first.

[remark-readme]: https://github.com/wooorm/remark#readme

## Install

```
npm install --save remark-helpers
```

## Usage

```js
var md = require('remark-helpers');

md.ast('# title');          // mdast format see more https://github.com/wooorm/mdast
md.html(`*italic*`);        // <p><em>italic</em></p>
md.text('**`plaintext`**'); // plaintext
```

[Look into tests for more examples](tests).

[tests]: https://github.com/greybax/remark-helpers/blob/master/test.js
## API

### html(input)

Return html.

##### input

Type: `string` / `AST`

### text(input)

Return plain text.

##### input

Type: `string` / `AST`

### ast(input)

Return AST tree for current text.

##### input

Type: `string`

### md(input)

Return markdown for current input text.

##### input

Type:  `string` / `AST`


### Bunch of shortcut helpers. Based on [MDAST](https://github.com/wooorm/mdast)

```js
const isType = (node, type) => node.type === type;
const isDepth = (node, depth) => node.depth === depth;
const hasChildren = (node) => node.children ? true : false;

const isRoot = node => isType(node, "root");
const isParagraph = node => isType(node, "paragraph");
const isBlockquote = node => isType(node, 'blockquote');
const isHeading = node => isType(node, 'heading');
const isCode = node => isType(node, 'code');
const isInlineCode = node => isType(node, 'inlineCode');
const isYaml = node => isType(node, 'yaml');
const isHtml = node => isType(node, 'html');
const isList = node => isType(node, 'list');
const isListItem = node => isType(node, 'listItem');
const isTable = node => isType(node, 'table');
const isTableRow = node => isType(node, 'tableRow');
const isTableCell = node => isType(node, 'tableCell');
const isThematicBreak = node => isType(node, 'thematicBreak');
const isBreak = node => isType(node, 'break');
const isEmphasis = node => isType(node, 'emphasis');
const isStrong = node => isType(node, 'strong');
const isDelete = node => isType(node, 'delete');
const isLink = node => isType(node, 'link');
const isImage = node => isType(node, 'image');
const isFootnote = node => isType(node, 'footnote');
const isLinkReference = node => isType(node, 'linkReference');
const isImageReference = node => isType(node, 'imageReference');
const isFootnoteReference = node => isType(node, 'footnoteReference');
const isDefinition = node => isType(node, 'definition');
const isFootnoteDefinition = node => isType(node, 'footnoteDefinition');
const isText = node => isType(node, 'Text');
```

## License

MIT © [Aleksandr Filatov](https://alfilatov.com/)

[npm-url]: https://npmjs.org/package/remark-helpers
[npm-image]: https://img.shields.io/npm/v/remark-helpers.svg?style=flat-square

[travis-url]: https://travis-ci.org/greybax/remark-helpers
[travis-image]: https://img.shields.io/travis/greybax/remark-helpers.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/greybax/remark-helpers
[coveralls-image]: https://img.shields.io/coveralls/greybax/remark-helpers.svg?style=flat-square

[depstat-url]: https://david-dm.org/greybax/remark-helpers
[depstat-image]: https://david-dm.org/greybax/remark-helpers.svg?style=flat-square

[depstat-dev-url]: https://david-dm.org/greybax/remark-helpers
[depstat-dev-image]: https://david-dm.org/greybax/remark-helpers/dev-status.svg?style=flat-square