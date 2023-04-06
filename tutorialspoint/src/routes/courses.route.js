const express = require('express');
const coursesRoutes = express.Router();

coursesRoutes.get('/', (req, res) => {
  res.send('this is coures page');
});

coursesRoutes.get('/:id', (req, res) => {
  res.send(`This is #${req.params.id} course`);
});

coursesRoutes.post('/', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

module.exports = coursesRoutes;
