
const database = require('./database')
const con = new database()
const createTableUser = "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, user_name VARCHAR(255),user_address VARCHAR(255))";
const createTablePost = "CREATE TABLE IF NOT EXISTS posts (id INT AUTO_INCREMENT PRIMARY KEY, post_title VARCHAR(255),post_content LONGTEXT)";

con.query(createTableUser);
con.query(createTablePost);
