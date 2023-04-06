const queryTryCatch =
  (fn) =>
  (...param) => {
    Promise.resolve(fn(...param)).catch((err) => {
      throw err;
    });
  };

module.exports = { queryTryCatch };
