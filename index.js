var express = require('express');
var Webtask = require('webtask-tools');
var auth0   = require('auth0-oauth2-express');

var app = express();

app.use(auth0({
  scopes: 'read:connections'
}));

app.get('/', function (req, res) {
  res.status(200).send('Hello World');
});

module.exports = app;
