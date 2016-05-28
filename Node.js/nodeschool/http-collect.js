const http = require('http')

const url = process.argv[2]

http
  .get(url, res => {
    res.setEncoding('utf8')
    var output = ''
    
    res.on('error', console.error)
  
    res.on('data', data => output = output + data)
    
    res.on('end', () => {
      console.log(output.length)
      console.log(output)
    })
  })
  .on('error', console.error)