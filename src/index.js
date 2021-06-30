const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const cookieParser = require('cookie-parser');
const {extname} = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const route = require('./routes');
const db = require('./config/db');

const app = express();
const port = 8000;

db.connect();

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(methodOverride('_method'));

app.use(morgan('combined'));

app.engine('.hbs', handlebars({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b,
  },
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});