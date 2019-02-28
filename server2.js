var express = require("express");
var app = express();

var PORT = 3000;


app.use(express.static('./client/dist/'));
app.listen(PORT, console.log("Listening at 3000"));

app.get('/api/menu/:meal/:id', (req, res) =>{
 var type = req.params.meal;
 var id = req.params.id;   
   
   res.status(200).send('This is the data' + type + id);
})

app.post('/api/menu/', (req, res) =>{
    res.status(201).send(11);
});

app.put('/api/menu/:id', (req, res) => {
    res.status(201).send(req.params.id);
});


app.delete('/api/menu/:id', (req,res) => {
    res.status(200).send(req.params.id);
});