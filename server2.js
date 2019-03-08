var nr = require('newrelic');
var connection = require('./database/newIndex.js');
var express = require("express");
var app = express();
var bodyParser = require('body-parser');


var PORT = 3000;

app.use(bodyParser.json())
app.use(express.static('./client/dist/'));


app.get('/api/menu/:meal/:id', (req, res) => {
    var meals = req.params.meal;
    var id = req.params.id;
    connection.query(`select * from ${meals} WHERE restaurant_id = ${id}`, function (err, result) {
      if (err) {
        console.log("error message: ", err);
        return;
      }
      res.send(result.rows);
    });
})

app.post('/api/menu/:meal', (req, res) => {
  var type = req.params.meal;
  var id = req.body.restaurant_id;
  var name = req.body.name;
  var description = req.body.description;
  var price = req.body.price; 

  var query = `INSERT INTO ${type} (restaurant_id, name, description, price) VALUES (${id}, '${name}', '${description}', ${price})`;  
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


app.listen(PORT);





