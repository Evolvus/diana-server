
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/registration'), //created model loading here
  Task1 = require('./api/models/blacklist'),
  Task2 = require('./api/models/channel'),
  Task3 = require('./api/models/ciservice'),
  bodyParser = require('body-parser');

  var cors = require('cors');
  app.use(cors());

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:evolvus*123@ds161336.mlab.com:61336/alexadb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))


var routes = require('./api/routes/registration'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);


app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
