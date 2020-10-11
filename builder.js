const sprite = require('./helpers/sprites')
const sass = require('./helpers/sass');

if (process.argv.includes('sprite')) {
	sprite.compile('1x1');
	sprite.compile('4x3');
}

if (process.argv.includes('sass')) {
	sass.compile('flagpack', 'flagpack');
}
