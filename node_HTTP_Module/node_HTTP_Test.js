// Node HTTP Module 
// HTTP :- hyper text transfer protocol .
// client :- any machine or device that can send or recive request and response from a server 
// ex.:- mobile , laptop , system , TV , Watch , digital device with a internet connection .

// Server :- Any Machine that can store database and backend logics and handle request and 
//           generate response for the clients machines 

//   Client ----> Request(data) ----> Server -------> Response(data) -------> Client 
//  mobile (Python)                        PC (Javascript)
// HTTTP  :- Text



// var http = require("http")

// http.createServer(function(req,res)    // this is a callback function 
// {
//     res.write("This is my first Node.js HTTP Response ")
//    res.end("This is the End of the Application")
// }).listen(8000)

var http = require("http")    // this is the transfer protocol

http.createServer(function(req,res)          // req = this is data comming fromt he client 
{                                             // res = this is the data that we will send to the client

    res.write("This is my Server Request")
    res.end()

}).listen(8050)   // this listen function is used to , listen or recive the request for the given port number application only . 

// URL = IP Address of the machine and Port no. of the application 


// client = "website" ----------request ---------> server 
//                   <--------------response----------------

// 8000 = port number 


// http://localhost:8050/?name=kuldeep&age=100&location=india


// localhost = IP Address :- 127.0.0.1
//  8050  = port 

// ?name=kuldeep&age=100&location=india    = data 




// port :- 
// 3000
// 8000
// 3050
// 4000

// htttp://127.98.56.123:8000
// htttp://127.98.56.123:3000


//IP --> Domain name 
// htttp://127.98.56.123:8000
// devproject.in

// http://127.0.0.1  == localhost:8000

// server :- PC Machine :-   IP :- Server -> 4 Application 






