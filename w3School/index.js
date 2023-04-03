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