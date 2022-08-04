
var fs = require('fs');
const path = require("path");
while(true){
var data= fs.readFileSync(path.resolve(__dirname, './src/emotion.json'));



var student = JSON.parse(data);



console.log(student);
}
   
var elements = JSON.parse(data);
const express = require("express");
const app = express();
   
// To solve the cors issue
const cors=require('cors');
const PORT=process.env.PORT || 4444;
app.listen(PORT, 
    () => console.log("Server Start at the Port ${PORT}"));
    
app.use(express.static('public'));
app.use(cors());
  
// when get request is made, alldata() is called
app.get(data);
function data( response) {
       
    // Returns all information about the elements
    response.send();
}