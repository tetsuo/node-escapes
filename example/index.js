var fs = require('fs');
var escapes = require('..');

fs.createReadStream(__dirname + '/node.ans')
	.pipe(escapes(function (canvas) {
		var s = '<img src="' + canvas.toDataURL() + '">';
		fs.writeFile('out.html', s);
	}));
