const fs = require('fs')

const calcNewline = (filePath, cb) =>
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) throw err

    const lines = data.split('\n').length - 1
    cb(lines)
  })
  
calcNewline(process.argv[2], console.log)