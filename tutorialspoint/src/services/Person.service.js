const Person = require('../models/Person.model');
const { queryTryCatch } = require('../utils/queryTryCatch');
const { generateRegex } = require('../utils/utils');

class PersonService {
  #result;
  async createPerson(person) {
    queryTryCatch(await Person.create(person));
  }

  // get data
  async getPersonByFilter(filter) {
    filter = generateRegex(filter);
    queryTryCatch(
      await Person.find(filter).then((res) => {
        this.#result = res;
      })
    );

    return this.#result;
  }

  async getAll() {
    queryTryCatch(
      await Person.find()
        .sort({ _id: 1 })
        .skip(4)
        .limit(3)
        .then((res) => {
          this.#result = res;
        })
    );

    return this.#result;
  }

  // update data
  async updateById(person) {
    queryTryCatch(
      await Person.findByIdAndUpdate(person._id, person).then((res) => {
        this.#result = res;
        console.log('PersonService=> updateById:', res);
      })
    );

    return this.#result;
  }

  // delete data
  async deleteById(id) {
    queryTryCatch(
      await Person.findByIdAndDelete(id).then((res) => {
        this.#result = res;
      })
    );

    return this.#result;
  }
}

module.exports = new PersonService();
