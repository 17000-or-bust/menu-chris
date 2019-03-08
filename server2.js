var nr = require('newrelic');
var connection = require('./database/newIndex.js');
var express = require("express");
var app = express();
var bodyParser = require('body-parser');


var PORT = 3000;

app.use(bodyParser.json())
app.use(express.static('./client/dist/'));


app.get('/api/menu/:meal/:id', (req, res) => {
    var values = [req.params.id];
    var meal = req.params.meal;
    connection.query(`select * from ${meal} WHERE restaurant_id = $1`, values, function (err, result) {
      if (err) {
        console.log("error message: ", err);
        return;
      }
      res.send(result.rows);
    });
})

app.post('/api/menu/:meal', (req, res) => {
  var values = [req.body.restaurant_id, req.body.name, req.body.description, req.body.price];
  var meal = req.params.meal;
  var query = `INSERT INTO ${meal} (restaurant_id, name, description, price) VALUES ($1, $2, $3, $4)`;  
  connection.query(query, values, function (err, result) {
    if (err) {
      console.log("error message: ", err);
      return;
    }
    res.send(result);
  });
})

app.get("*", (req, res) => {
res.sendFile(__dirname + '/client/dist/index.html')});  


app.listen(PORT);





