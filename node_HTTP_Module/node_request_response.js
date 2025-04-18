// var http = require("http")
// var url = require("url")


// http.createServer(function(req,res){



//     // var data = req.url

//     var data = url.parse(req.url,true).query
// // data = string --> JSON
// // {name:kuldeep , age :100 , location:India}

//     res.write("hello , "+data.name+" welcome our node project")


//     res.end()

// }).listen(8050)
var url = require("url")

var http = require("http")
http.createServer(function(req,res)        
{                                             

    var data = req.url 
    var user = url.parse(req.url,true).query
    // console.log(data )
    console.log(user.name)
    console.log(user.location)
    console.log(user.company)
    // console.log(req)
    res.write("This is my Server Request")
    res.end()

}).listen(8050) 
