const queryTryCatch = (fn) => (param, next) => {
  Promise.resolve(fn(param, next)).catch((err) => next(err));
};

module.exports = { queryTryCatch };
