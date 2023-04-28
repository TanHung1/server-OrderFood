const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
var methodOverride = require('method-override')
const app = express();
const route = require('./routes');
const db = require('./config/db');
//Connect to DB
db.connect();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'))

// route init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});