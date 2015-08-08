# escapes

writable stream to render ansi graphics into canvas.

This is [escapes.js](https://github.com/atdt/escapes.js) ported to node.js using [node-canvas](https://github.com/Automattic/node-canvas).

# example

given [node.ans](http://www.cambus.net/node-js-ansi-logo/) by [fcambus](https://github.com/fcambus):

```js
var fs = require('fs');
var escapes = require('escapes');

fs.createReadStream(__dirname + '/node.ans')
	.pipe(escapes(function (canvas) {
		var s = '<img src="' + canvas.toDataURL() + '">';
		fs.writeFile('out.html', s);
	}));
```

now open `out.html` because it's awesome:

![screenshot](http://i.imgur.com/DopdWo1.png)

See also http://sixteencolors.net for many more awesome artpacks.

# api

```js
var escapes = require('escapes');
```

## var stream = escapes(cb);

# todo

* streaming png/jpeg support

# license

mit
