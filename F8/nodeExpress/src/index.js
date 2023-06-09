const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const db = require('./config/db');

const app = express();
const port = 3000;

//connect to database
db.connect();

// static folder
app.use(express.static('./src/public'));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// http logger
app.use(morgan('combined'));

// template engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './src/resources/views');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.get('/search', (req, res) => {
  res.render('search');
});

app.post('/search', (req, res) => {
  console.log(req.body);
  res.send('');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
