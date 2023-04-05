const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  author: ObjectId,
  name: String,
  description: String,
  image: String,
  createAt: { type: Date, default: Date.now },
});
