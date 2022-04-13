const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();


// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// /api prefix allows it to be removed from indivual route expresssions (aka no writing apiRoutes, apiCandidates, etc.)
// use API routes
app.use('/api', apiRoutes);


app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
});

// request not found
app.use((req, res) => {
  res.status(404).end()
});

// start server afrer DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Databased connected.');
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});