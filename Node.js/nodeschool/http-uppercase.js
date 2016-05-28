const http = require('http')
const map = require('through2-map')

http
  .createServer((req, res) => {
    const method = req.method
    if (method.toUpperCase() !== 'POST') res.end()
    
    req
      .pipe(map(chunk => chunk.toString().toUpperCase()))
      .pipe(res)
  })
  .listen(process.argv[2])