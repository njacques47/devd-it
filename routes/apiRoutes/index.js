const express = require('express');
const router = express.Router();

router.use(require('./candidateRoutes'));

module.exports = router;

// this is the centeral file hub for all the routes