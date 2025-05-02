// express work on MVC programing structure . 
// M :- Modal :- Database :- Mongo.db 
// V :- View  :- Frontend ,HTML , CSS , React 
// C :- Controllar :- Master File to handle reponse , request and operations .   
  // power shell :- npm install -g express 

  // folder :-  npm install -g express --save
  // folder :- npm i 
  // folder :- npm i express


var exp = require("express")
var app = exp()




// app = object 
// exp() = class
// app = express application 
// get() = this is HTTP method to be followed to transfer any data in the form of request and response

// var path = require("path")



app.get("/", function(req,res)
{
    res.send("Welcome Screen")
})

app.get("/login",function(req,res)
{
    res.send("Login Screen")
})

app.get("/singup",function(req,res)
{
    res.send("Singup Screen")
})

app.get("/forgot",function(req,res)
{
    res.send("Forgot Password Screen")
})

app.get("/otp",function(req,res)
{
    // res.send("/Users/kuldeep/Desktop/KuldeepExcellence_Github/Node_Js/ExpressTest/demo.html")
    res.sendFile("C:/Users/Lenovo/OneDrive/Desktop/Node_Js/ExpressTest/demo.html")
})

app.listen(6050)