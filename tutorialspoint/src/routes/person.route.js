const express = require('express');
const PersonController = require('../controllers/Person.controller');
const personRouter = express.Router();

personRouter.post('/', PersonController.createPerson);

personRouter.post('/update', PersonController.updateById);

personRouter.get('/delete/:id', PersonController.deleteById);

personRouter.get('/find', PersonController.getPersonByFilter);

personRouter.get('/', PersonController.getAll);

module.exports = personRouter;
