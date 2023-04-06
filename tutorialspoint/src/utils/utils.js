const { FIELD_IS_NUM_OF_PERSON } = require('../config/constant');

const isObjectEmpty = (obj) => Object.keys(obj).length === 0;

const generateRegex = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] && !FIELD_IS_NUM_OF_PERSON.includes(key)) {
      obj[key] = {
        $regex: obj[key],
        $options: 'i',
      };
    }
  });
  return obj;
};

module.exports = { isObjectEmpty, generateRegex };
