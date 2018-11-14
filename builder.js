const sass = require('node-sass');
const path = require('path');
const fs = require('fs');
const pathToFlagStyles = path.join(__dirname, './src/')

sass.render({
  file: path.join(pathToFlagStyles, 'flagpack.scss'),
  outputStyle: 'compressed'
}, function (err, result) {
  if (!err) {
    fs.writeFile(path.join(__dirname, './dist/', 'flagpack.min.css'), result.css, function (err) {
      if (!err) {
        console.log('File written to: ', pathToFlagStyles)
      } else {
        console.error(err)
      }
    });
  } else {
    console.error(err)
  }
})