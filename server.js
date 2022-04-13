const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const db = require('./db/connection');
const inputCheck = require('./utils/inputCheck');
const apiRoutes = require('.routes/apiRoutes');

// express middleware
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

// /api prefix allows it to be removed from indivual route expresssions (aka no writing apiRoutes, apiCandidates, etc.)
app.use('/api', apiRoutes);


app.get('/api/parties', (req, res) => {
  const sql = `SELECT * FROM parties`;
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

app.get('/api/party/:id', (req, res) => {
  const sql = `SELECT * FROM parties WHERE id = ?`;
  const params = [req.params.id];
  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'successfully retrieved single id',
      data: row
    });
  });
});

app.delete('/api/party/:id', (req, res) => {
  const sql = `DELETE FROM parties WHERE id = ?`;
  const params = [req.params.id];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: res.message });
      // checks if anything was deleted
    } else if (!result.affectedRows) {
      res.json({
        message: 'Party not found'
      });
    } else {
      res.json({
        message: 'deleted',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });
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