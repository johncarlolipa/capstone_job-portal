const express = require("express");
const app = express();

// set  the view engine to ejs, and using 
// express.static to run all of the files within the directory of public 
// with this tailwind won't work

app.use(express.static("public"));
app.set("view engine", "ejs");


// Setting home as a home page

app.get('/', function(req, rest){
  rest.render('pages/home');
});

// Server port

app.listen(3000);
console.log("Server is running");
