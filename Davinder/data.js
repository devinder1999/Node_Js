var data=require("express")
var app= data()

//hello world

app.get("/",function(req,res)
{
    res.send("Welcome To Davinder Singh Website")
})

app.get("/login",function(req,res)
{
    res.sendFile("C:/Users/Lenovo/OneDrive/Desktop/Node_Js/Davinder/login.html")
})


app.get("/signup",function(req,res)
{
    res.sendFile("C:/Users/Lenovo/OneDrive/Desktop/Node_Js/Davinder/signup.html")
})


app.get("/forgot",function(req,res)
{
    res.sendFile("C:/Users/Lenovo/OneDrive/Desktop/Node_Js/Davinder/forgot.html")
})


app.get("/otp",function(req,res)
{
 res.sendFile("C:/Users/Lenovo/OneDrive/Desktop/Node_Js/Davinder/otp.html")
})

app.listen(2025)