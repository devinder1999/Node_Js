// Server File 
// Baackend



var http = require("http")
var url = require("url")


http.createServer(function(req,res){
   


    // var data = req.url

    var data = url.parse(req.url,true).query
// data = string --> JSON
// {name:kuldeep , age :100 , location:India}


// http://127.0.0.1:8050/?name=avinash&age=40&phone=8708753815&gender=Male&address=frrgtg&pincode=133005
    res.write("hello , "+data.name+" welcome our node project")
    res.write("hello , "+data.age+" welcome our node project")
    res.write("hello , "+data.phone+" welcome our node project")
    res.write("hello , "+data.gender+" welcome our node project")
    res.write("hello , "+data.address+" welcome our node project")
    res.write("hello , "+data.pincode+" welcome our node project")



    res.end()

}).listen(8050)