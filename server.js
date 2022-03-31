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

// get all candidates 
// db.query(`SELECT * FROM  candidates`, (err, rows) => {
//   console.log(rows);
// });

// GET a single candidate's info
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(row);
// });

// DELETE a candidate (the ? denotes that it is a prepared statement and the ? is a placeholder)
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// CREATE a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
  VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];
db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
})

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