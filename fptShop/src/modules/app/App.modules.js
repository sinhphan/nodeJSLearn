const { log } = require('console');
const http = require('http');
const { eventNames } = require('process');
const url = require('url');

class App {
  #app;
  #res;
  #req;
  #urlParsed;
  #pathName;

  constructor() {
    this.#app = http.createServer((req, res) => {
      this.#req = req;
      this.#res = res;
      this.#urlParsed = url.parse(req.url);
      this.#pathName = this.#urlParsed.pathName;
    });
  }

  get(pathName, callback) {
    pathName = pathName === '' ? '/' : pathName;
    if (pathName === this.#pathName) {
      callback(this.#req, this.#res);
    }
  }

  listen(port, callback) {
    this.#app.listen(port, callback);
    return;
  }
}

module.exports = new App();
