const fs = require('fs')
const dirPath = process.argv[2]
const extension = `.${process.argv[3]}`

fs.readdir(dirPath, (err, contents) => {
  if (err) return console.error(err)

  contents
    .filter(fileName => fileName.slice(-extension.length) === extension) 
    .forEach(fileName => console.log(fileName))
})