var http = require('http')
var fs = require('fs')
var url = require('url')


http.createServer((request, reponse) => {
  var urlParsed = url.parse(request.url, true)
  var pathname = urlParsed.pathname
  var search = urlParsed.search
  let aQuery = urlParsed.query.a

  if (pathname === '/') {
    fs.readFile('urlModuleTest/index.html', 'utf8', (err, data) => {
      if (err) throw err

      reponse.writeHead(200, { 'Content-Type': 'text/html' })
      reponse.write(`'path name is :', ${pathname}, <br>`)
      reponse.write(`'search string is :', ${search}, <br>`)
      if (aQuery) reponse.write(`'query is : ', ${aQuery}<br>`)
      reponse.end(data)
    })
  } else {
    let filePath = `urlModuleTest${pathname}.html`
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reponse.writeHead(404, { 'Content-Type': 'text/html' })
        reponse.write(`'path name is :', ${pathname}, <br>`)
        reponse.write(`'search string is :', ${search}, <br>`)
        if (aQuery) reponse.write(`'query is : ', ${aQuery}<br>`)
        reponse.end('404 Not Found')
      } else {
        reponse.writeHead(200, { 'Content-Type': 'text/html' })
        reponse.write(`'path name is :', ${pathname}, <br>`)
        reponse.write(`'search string is :', ${search}, <br>`)
        if (aQuery) reponse.write(`'query is : ', ${aQuery}<br>`)
        reponse.end(data)
      }
    })

  }

}).listen(8080)