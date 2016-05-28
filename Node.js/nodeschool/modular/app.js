const filterFilesByExtension = require('./filterFilesByExtension')
const dir = process.argv[2]
const extensions = process.argv[3]

filterFilesByExtension(dir, extensions, (err, files) => {
  if (err) return console.error(err)
  
  files.forEach(f => console.log(f))
})
