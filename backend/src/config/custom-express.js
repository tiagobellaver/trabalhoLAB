const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressValidator = require('express-validator'); 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
}));

app.use(express.json());
const rotas = require('../app/routes/routes');
rotas(app);

app.use(function (req, resp, next) {
    return resp.status(404).end();
});

app.use(function (erro, req, resp, next) {
  return resp.status(~500).end();
});

module.exports = app;