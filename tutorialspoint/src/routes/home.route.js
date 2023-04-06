const express = require('express');
const homeRoutes = express.Router();

homeRoutes.get('/', (req, res) => {
  res.send('this is home page');
});

module.exports = homeRoutes;
