const fs = require('fs')

const calcNewline = filePath => {
  if (!filePath) return 0

  const newline = fs
    .readFileSync(filePath)
    .toString()
    .split('\n')
    .length
    
  return newline - 1
}

console.log(
  calcNewline(process.argv[2])
)
