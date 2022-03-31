const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const mysql = require('mysql2');

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // sql username
    user: 'root', 
    // sql pwd
    password: 'password',
    database: 'election'
  },
  console.log('Connected to the election database.')
);

db.query(`SELECT * FROM  candidates`, (err, rows) => {
  console.log(rows);
});

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
});

// request not found
app.use((req, res) => {
  res.status(404).end()
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});