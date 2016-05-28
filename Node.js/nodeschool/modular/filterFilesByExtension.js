const fs = require('fs')
const path = require('path')

module.exports = (dir, extension, callback) => {
  fs.readdir(dir, (err, files) => {
    if (err) return callback(err)
 
    const fileredFiles = files
      .filter(fileName => path.extname(fileName) === '.' + extension)
      
    callback(null, fileredFiles)
  })  
}