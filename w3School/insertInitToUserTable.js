const mysql = require('mysql')
const database = mysql.createConnection({
  host: 'localhost',
  user: 'sinh',
  password: 'SinhLAa3@',
  database: 'w3school',
})

database.connect((err) => {
  if (err) throw err
  const insertInit = 'INSERT INTO user (username, address) VALUES ?'
  const value = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ]

  database.query(insertInit, [value], (err) => {
    if (err) throw err
    console.log('init value inserted to user table of w3school');
  })
})