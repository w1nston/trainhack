var express = require('express');
//var bodyParser = require('body-parser')
var app = express();


//app.use(bodyParser());

const routes = require('./app/routes')(express.Router());
app.use(routes);


app.listen(3030, () => {
  console.info("server running on http://localhost:3030")
})
