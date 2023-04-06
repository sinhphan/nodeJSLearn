const Person = require('../models/Person.model');
const PersonService = require('../services/Person.service');
const { isObjectEmpty } = require('../utils/utils');

class PersonController {
  createPerson(req, res) {
    PersonService.createPerson(req.body);
    res.send(req.body);
  }

  // get person
  async getPersonByFilter(req, res) {
    let persons;

    if (isObjectEmpty(req.query)) {
      persons = await PersonService.getAll();
    } else {
      persons = await PersonService.getPersonByFilter(req.query);
    }

    res.send(persons);
  }

  async getAll(req, res) {
    const persons = await PersonService.getAll();
    res.send(persons);
  }

  // update person
  async updateById(req, res) {
    const person = await PersonService.updateById(req.body);
    res.send(person);
  }

  //delete person
  async deleteById(req, res) {
    const person = await PersonService.deleteById(req.params.id);
    res.send(person);
  }
}

module.exports = new PersonController();
