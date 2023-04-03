const mysql = require('mysql')

class Database {
  #host = 'localhost';
  #user = 'sinh';
  #passWord = 'SinhLAa3@';
  #database = 'w3school';
  #con;

  constructor() {
    this.#connect()
  }

  #connect() {
    this.#con = mysql.createConnection({
      host: this.#host,
      user: this.#user,
      password: this.#passWord,
      database: this.#database,
    });
    this.#con.connect();
  }

  query(query) {
    this.#con.query(query, (err, result) => {
      if (err) throw err;
      console.log(`query: ${query} success`)
    });
  }

  close() {
    this.#con.end();
  }
}

module.exports = Database