var nr = require('newrelic');
var connection = require('./database/newIndex.js');
var express = require("express");
var app = express();
// var bodyParser = require('body-parser');
// const connection = require("./server/db/");    

var PORT = 3000;

// app.use(bodyParser.json())
app.use(express.static('./client/dist/'));
app.listen(PORT);

app.get('/api/menu/:meal/:id', (req, res) =>{
    // var type = req.params.meal;
    // var id = req.params.id;   
    // let queryStr = `select * from ${req.params.meal} WHERE restaurant_id = ${req.params.id}`;
    connection.query(`select * from ${req.params.meal} WHERE restaurant_id = ${req.params.id}`, function (err, result) {
      if (err) {
        console.log("error message: ", err);
        return;
      }
      res.send(result.rows);
    });
})

app.post('/api/menu/:meal', (req, res) =>{
  var type = req.params.meal;
  // console.log('BODY', req.body, type);
  // var query = `INSERT INTO ${type} (restaurant_id, name, description, price) VALUES (${req.body.restaurant_id}, '${req.body.name}', '${req.body.description}', ${req.body.price})`;  
  var query = `INSERT INTO ${type} (restaurant_id, name, description, price) VALUES (10000001, 'chris', 'A pizza', 19)`;  
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




// app.put('/api/menu/:meal/:id', (req, res) => {
//     var type = req.params.meal;
//     var id = req.params.id;   
//     var query = `UPDATE ${type} SET name = "Chris" WHERE id = ${id}`;
//     connection.connection.query(query, function (err, result) {
//       if (err) {
//         console.log("error message: ", err);
//         return;
//       }
//       res.send(result);
//     });
//  });  

//  app.delete('/api/menu/:meal/:id', (req, res) => {
//     var type = req.params.meal;
//     var id = req.params.id;   
//     let queryStr = `DELETE FROM ${type} WHERE restaurant_id = ${id}`;
//     connection.query(queryStr, function (err, result) {
//       if (err) {
//         console.log("error message: ", err);
//         return;
//       }
//       res.send(result);
//     });   
//  })  
  
