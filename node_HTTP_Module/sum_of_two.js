var http = require("http")
var url = require("url")


http.createServer(function(req,res){



   
    var data = url.parse(req.url,true).query

    var a =   data.num1 ;
    var b =   data.num2 ;
    var c = a+b
    res.write("sum of 2 number is = "+c)


    res.end()

}).listen(8050)