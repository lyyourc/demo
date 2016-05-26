const http = require('http')
const https = require('https')
const url = require('url')

http
  .createServer((req, res) => {
    const parsedUrl = url.parse(req.url)
    const path = parsedUrl.pathname
    const result = []
    
    if (path === '/api/500px') {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.writeHead(200, { 'Content-Type': 'application/json' })
      
      const api = 'https://api.500px.com/v1/photos'
      const key = 'TTyLoKEglsmyLlF4soApC4q5nTco4aYXQZJSxhZz'
      const query = `${api}?consumer_key=${key}&feature=popular&image_size=4`
      
      https.get(query, response => {
        response.setEncoding('utf8')
        var result = ''
        
        response.on('data', data => {
          result += data
        })
        
        response.on('end', () => {
          const photos = JSON.parse(result).photos
            .map(p => ({
              'aspect_ratio': p.width / p.height,
              image: { small: p.image_url },
            }))
          res.end(JSON.stringify(photos))
        })
      })
    } else {
      res.writeHead(404)
      res.end('404 Not Found')
    }
  })
  .listen(3000)
  