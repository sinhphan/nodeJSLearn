const mysql = require('mysql')
const database = mysql.createConnection({
  host: 'localhost',
  user: "sinh",
  password: 'SinhLAa3@',
})

database.connect((err) => {
  if (err) throw err
  console.log('connected');
  const createDatabaseQuery = 'CREATE DATABASE w3school'

  database.query(
    createDatabaseQuery,
    (err, result) => {
      if (err) throw err
      console.log('database w3school created')
    }
  )
})