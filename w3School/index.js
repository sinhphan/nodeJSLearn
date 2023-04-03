<<<<<<< HEAD
var mysql = require('mysql')

const database = mysql.createConnection({
  host: 'localhost',
  user: 'sinh',
  password: 'SinhLAa3@'
})

database.connect((err) => {
  if (err) throw err

  console.log('connected');
})
=======
const http = require('http');
const url = require('url');
const fs = require('fs');
const events = require('events');

http.createServer((request, response) => {
  let urlParsed = url.parse(request.url, true);
  let pathName = urlParsed.pathname;
  let layoutPath = "./src/layout";
  let query = urlParsed.query
  if (pathName === '/') {
    const homePath = `${layoutPath}/home.html`

    fs.readFile(homePath, (err, data) => {
      if (err) throw err
      response.writeHead(200, { "Content-Type": "text/html" })
      response.end(data)
    })
  }
  else if (pathName === "/contact") {
    const contactPath = `${layoutPath}${pathName}.html`

    fs.readFile(contactPath, (err, data) => {
      if (err) throw err
      response.writeHead(200, { "Content-type": "text/html" })
      response.end(data)
    })
  }
  else {
    response.writeHead(404, { "Content-Type": "text/html" })
    response.end(
      "<h1>404 error Page not found</h1>"
    )
  }

}).listen(5555)

//create a server listen in port 5555

>>>>>>> e04673eab08185ac4efbda2f8ed3727c4c41fa95
