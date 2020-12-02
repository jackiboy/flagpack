const sass = require('node-sass');
const path = require('path');
const fs = require('fs');
const SVGSpriter = require('@fullstax/svg-sprite');

async function getCommonContent() {
	return new Promise((resolve, reject) => {
		const inputFile = path.join(__dirname, '../src/', '_common.scss');
		sass.render({
			file: inputFile,
			outputStyle: 'expanded'
		}, function (err, result) {
			if (!err) {
				resolve(result.css);
			} else {
				reject(err);
			}
		});
	});
}

async function getSprites(outputDir, format) {
	return new Promise((resolve, reject) => {
		const results = [];
		const config = {
			dest: outputDir,
			log: false,
			mode: {
				css: {
					// cache busting
					bust: false,
					dest: '.',
					prefix: format === '1x1' ? '.%s.fp-square' : '.%s',
					dimensions: false,
					sprite: `flagpack_${format}_sprite.svg`,
					layout: 'vertical',
					common: 'fp',
					render: {
						dest: '../',
						css: {
							dest: `flagpack_${format}_sprite.css`
						}
					}
				}
			}
		};

		var spriter = new SVGSpriter(config);

		// add all svg files from the src/assets/icons folder to the sprite
		const scgIcons = fs.readdirSync(`./flags/${format}/`).filter(fn => fn.endsWith('.svg'));
		scgIcons.forEach(iconFile => {
			const iconPath = path.resolve(`./flags/${format}/`, iconFile);
			spriter.add(iconPath, path.basename(iconFile), fs.readFileSync(iconPath, { encoding: 'utf-8' }));
		});

		// Compile the sprite
		spriter.compile(function (error, result, cssData) {
			for (var mode in result) {
				for (var type in result[mode]) {
					const sprite = result[mode][type];
					results.push({
						path: sprite.path,
						contents: sprite.contents
					});
				}
			}
		});

		resolve(results);
	})
}

exports.compile = function(format) {
	const outputDir = './dist/';

	Promise.all([
		getCommonContent(),
		getSprites(outputDir, format)
	]).then((values) => {
		const commonContent = values[0];
		const sprites = values[1];
	
		// ensure output dir exists
		if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
		
		sprites.forEach(sprite => {
			if (sprite.path.endsWith('css')) {
				fs.writeFileSync(sprite.path, [ commonContent, sprite.contents ].join('\n'));
			} else {
				fs.writeFileSync(sprite.path, sprite.contents);
			}
			console.log('File written to: ', sprite.path);
		});
	});
}
