var data=require("express")
var app= data()
const path = require('path');

app.use(data.static(path.join(__dirname, 'public')));


app.get("/",function(req,res)
{
    res.send("Welcome To Davinder Singh Website")
})

app.get("/login",function(req,res)
{
    res.sendFile(__dirname+"/views/"+"login.html")
})


app.get("/signup",function(req,res)
{
    res.sendFile(__dirname+"/views/"+"signup.html")
})


app.get("/forgot",function(req,res)
{
    res.sendFile(__dirname+"/views/"+"forgot.html")
})


app.get("/otp",function(req,res)
{
 res.sendFile(__dirname+"/views/"+"otp.html")
})

app.listen(2025)