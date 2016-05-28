const http = require('http')

const urls = process.argv.slice(2)

const getUrlContent = (url, cb) => {
  http
    .get(url, res => {
      res.setEncoding('utf8')
      var output = ''
      
      res.on('error', console.error)
      res.on('data', d => output += d)
      res.on('end', () => console.log(output))
      
      cb && cb()
    })
    .on('error', console.error)
}

getUrlContent(
  urls[0], 
  getUrlContent(
    urls[1]),
    getUrlContent(urls[2])
  )
  
    //  var http = require('http')
    //  var bl = require('bl')
    //  var results = []
    //  var count = 0

    //  function printResults () {
    //    for (var i = 0; i < 3; i++)
    //      console.log(results[i])
    //  }

    //  function httpGet (index) {
    //    http.get(process.argv[2 + index], function (response) {
    //      response.pipe(bl(function (err, data) {
    //        if (err)
    //          return console.error(err)

    //        results[index] = data.toString()
    //        count++

    //        if (count == 3)
    //          printResults()
    //      }))
    //    })
    //  }

    //  for (var i = 0; i < 3; i++)
    //    httpGet(i)