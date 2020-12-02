const sass = require('node-sass');
const path = require('path');
const fs = require('fs');
const pathToFlagStyles = path.join(__dirname, '../src/')

exports.compile = function (input, output){
  const inputFile = path.join(pathToFlagStyles, input + '.scss');
  const outputFile = path.join(__dirname, '../dist/', output + '.css');
  sass.render({
    file: inputFile,
    outputStyle: 'compressed'
  }, function (err, result) {
    if (!err) {
      fs.writeFile(outputFile, result.css, function (err) {
        if (!err) {
          console.log('File written to: ', outputFile)
        } else {
          console.error(err)
        }
      });
    } else {
      console.error(err)
    }
  })
}