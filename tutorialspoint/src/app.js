const express = require('express');
const routes = require('./routes');
// const home = require('./routes/home.route');
// const courses = require('./routes/courses.route');

const app = express();
const port = 3000;

// Middleware function
app.use('/courses', (req, res, next) => {
  console.log('use link to courses');
  next();
});
// app.use('/', (req, res, next) => {
//   console.log('use link to homepage');
//   next();
// });

// routes handle
app.use('/courses', routes.courses);
app.use('/', routes.home);
app.get('*', (req, res) => {
  res.send('sorry this url invalid');
});

// app.use('/courses', home);
// app.use('/', courses);

app.listen(port);
