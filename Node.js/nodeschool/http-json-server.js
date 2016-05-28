const http = require('http')
const url = require('url')
const strftime = require('strftime')

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    
    const parsedUrl = url.parse(req.url, true)
    const route = parsedUrl.pathname
    const iso = parsedUrl.query.iso
    if (!iso) {
      res.end('specify iso param in query string')
    }

    const date = new Date(iso)
    
    if (route === '/api/parsetime') {
      const isoTime = parsedUrl.query.iso
      const hms = strftime('%H:%M:%S', date)
        .split(':')
        .map(x => Number(x))
      
      res.write(JSON.stringify({
        hour: hms[0],
        minute:hms[1],
        second:hms[2]
      }))
      
    } else if (route === '/api/unixtime') {
      res.write(JSON.stringify({
        unixtime: date.getTime()
      }))
    } else {
      res.writeHead(404)
      res.write('404')
    }
    
    res.end()
  })
  .listen(process.argv[2])