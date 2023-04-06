const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
  name: String,
  age: Number,
  nationality: String,
});

const Person = mongoose.model('Persons', personSchema);

module.exports = Person;
