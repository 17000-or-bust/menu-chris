const fs = require('fs');
const moment = require('moment');
const data = require('./dummy_data.js');

var lunchItems = data.lunch.name;
var lunchDescription = data.lunch.des;
var dinnerItems = data.dinner.name;
var dinnerDescription = data.dinner.des;
var dessertItems = data.dessert.name;
var dessertDescription = data.dessert.des;

var writeStream = fs.createWriteStream('./lunchMenu2.csv');
var writeStream2 = fs.createWriteStream('./dinnerMenu.csv');
var writeStream3 = fs.createWriteStream('./dessertMenu.csv');

console.log('STARTING GENERATION', moment().format('HH:mm:ss'));

var buffer = "";
writeStream.write("restaurant_id, name, description, price \n");

for(var restaurants = 0; restaurants < 10000001; restaurants++){
    //random number of food items
    var randomNumber = Math.floor(Math.random() * (10 - 5)) +5;
        for(var food = 0; food < randomNumber; food++){ 
        var randomFood = Math.floor(Math.random() * (100 - 1)) +1;
        var randomPrice = Math.floor(Math.random() * (20 - 1)) +1;
           buffer += `${restaurants}, ${lunchItems[randomFood]}, ${lunchDescription[randomFood]}, ${randomPrice}\n`;    
        }      
  if(restaurants % 100000 === 0){  
      console.log(restaurants);        
   writeStream.write(buffer);
    buffer = "";
  }
}
writeStream.end();



  var buffer1 = "";
  writeStream2.write("restaurant_id, name, description, price \n");
  
  for(var restaurants = 0; restaurants < 10000001; restaurants++){
  
      var randomNumber1 = Math.floor(Math.random() * (10 - 5)) +5;
          for(var food = 0; food < randomNumber1; food++){ 
          var randomFood1 = Math.floor(Math.random() * (100 - 1)) +1;
          var randomPrice1 = Math.floor(Math.random() * (20 - 1)) +1;
             buffer1 += `${restaurants}, ${dinnerItems[randomFood1]}, ${dinnerDescription[randomFood1]}, ${randomPrice1}\n`;     
         }
    if(restaurants % 100000 === 0){  
        console.log(restaurants);        
     writeStream2.write(buffer1);
  
      buffer1 = "";
    }
  }
writeStream2.end();

var buffer2 = "";
writeStream3.write("restaurant_id, name, description, price \n");

for(var restaurants = 0; restaurants < 10000001; restaurants++){
    //random number of food items
    var randomNumber2 = Math.floor(Math.random() * (10 - 5)) +5;
        for(var food = 0; food < randomNumber2; food++){ 
        var randomFood2 = Math.floor(Math.random() * (100 - 1)) +1;
        var randomPrice2 = Math.floor(Math.random() * (20 - 1)) +1;
           buffer2 += `${restaurants}, ${dessertItems[randomFood2]}, ${dessertDescription[randomFood2]}, ${randomPrice2}\n`;     
       }
  if(restaurants % 100000 === 0){  
      console.log(restaurants);        
   writeStream3.write(buffer2);

    buffer2 = "";
  }
}
writeStream3.end();


console.log('ENDING GENERATION', moment().format('HH:mm:ss'));







