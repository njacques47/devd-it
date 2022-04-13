const express = require('express');

router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

// originally app.get('/api/candidates')
// get all candidates
router.get('/candidates', (req, res) => {
});

// originally app.get('/api/candidate/:id')
// get a single candidate
router.get('/candidate/:id', (req, res) => {});

// originally app.post('/api/candidate')
// create candidate
router.post('/candidate', ({ body }, res) => {});

// originally app.put('/api/candidate/:id')
// update candidate id
router.put('/candidate/:id', (req, res) => {});

// originally app.delete('/api/candidate/:id')
// delete candidate
router.delete('/candidate/:id', (req, res) => {});

module.exports = router;