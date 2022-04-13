const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection({
  host: 'localhost',
  // sql username
  user: 'root',
  // sql pwd
  password: 'password',
  database: 'election'
},
console.log('Connected to the election database.')
);

module.exports = db;