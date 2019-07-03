const express = require('express');

const app = express();
const favicon = require('express-favicon');

const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const path = require('path');
const controllers = require('./controllers');
require('env2')('./server/.env');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', port);

app.use(controllers);


app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = app;
