const net = require('net')

net
  .createServer(socket => {
    const now = new Date()
    socket.write(
      `${formatTime(now)}\n`
    )
    socket.end()
  })
  .listen(process.argv[2])
  
 function formatTime (time) {
   const year = time.getFullYear()
   const month = prependZero(time.getMonth() + 1)
   const date = prependZero(time.getDate())
   const hours = prependZero(time.getHours())
   const minutes = prependZero(time.getMinutes())
   
   function prependZero (time) { 
     return +time < 10 ? `0${+time}` : `${+time}`
   }
   
   // format yyyy-mm-dd hh:mm
   return `${year}-${month}-${date} ${hours}:${minutes}`
 }