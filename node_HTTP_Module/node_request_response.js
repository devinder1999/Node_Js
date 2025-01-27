var http = require("http")
var url = require("url")


http.createServer(function(req,res){



    // var data = req.url

    var data = url.parse(req.url,true).query
// data = string --> JSON
// {name:kuldeep , age :100 , location:India}

    res.write("hello , "+data.name+" welcome our node project")


    res.end()

}).listen(8050)