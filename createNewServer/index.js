var http = require('http')
var fs = require('fs')

// http.createServer((request, response) => {
//   var param = request.url.substring(1).split('&')
//   response.writeHead(200, { 'content-Type': 'text/html' })
//   response.write(param.toString('-'))
//   response.end()
// }).listen(8080)

// var fs = require('fs');
// console.log(fs);

var content = "phan COng SInh"

fs.writeFile('sinh.html', content, (err) => {
  if (err) throw err

  console.log('Write success')
})

http.createServer((request, response) => {
  response.writeHead(200, { 'content-Type': 'text/html' })

  fs.readFile('./code.html', 'utf-8', (err, data) => {
    if (err) throw err

    response.write(data)

    response.end()
  })

}).listen(8080)