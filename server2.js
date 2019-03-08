var nr = require('newrelic');
var connection = require('./database/newIndex.js');
var express = require("express");
var app = express();
var bodyParser = require('body-parser');


var PORT = 3000;

app.use(bodyParser.json())
app.use(express.static('./client/dist/'));
app.listen(PORT);

app.get('/api/menu/:meal/:id', (req, res) => {
    connection.query(`select * from ${req.params.meal} WHERE restaurant_id = ${req.params.id}`, function (err, result) {
      if (err) {
        console.log("error message: ", err);
        return;
      }
      res.send(result.rows);
    });
})

app.post('/api/menu/:meal', (req, res) => {
  var type = req.params.meal;
  var query = `INSERT INTO ${type} (restaurant_id, name, description, price) VALUES (${req.body.restaurant_id}, '${req.body.name}', '${req.body.description}', ${req.body.price})`;  
  connection.query(query, function (err, result) {
    if (err) {
      console.log("error message: ", err);
      return;
    }
    res.send(result);
  });
})

app.get("*", (req, res) => {
res.sendFile(__dirname + '/client/dist/index.html')});  





