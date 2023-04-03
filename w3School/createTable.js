const mysql = require('mysql')
const database = mysql.createConnection({
  host: 'localhost',
  user: 'sinh',
  password: 'SinhLAa3@',
  database: 'w3school'
})

database.connect((err) => {
  if (err) throw err

  const createTable = 'CREATE TABLE IF NOT EXISTS user (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), address VARCHAR(255))'
  database.query(createTable, (err, result) => {
    if (err) throw err
    console.log('the user table created in w3school database');
  })
})