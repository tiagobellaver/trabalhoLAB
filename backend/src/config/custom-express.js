const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(express.json());
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

const routes = require('../app/routes/routes');
routes(app);

app.use(function (req, resp, next) {
    return resp.status(404).end();
});

app.use(function (erro, req, resp, next) {
    return resp.status(500).end();
});

module.exports = app;