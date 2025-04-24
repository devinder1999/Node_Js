var fs = require("fs")

// fs.readFile("test.txt",function(err,data)
// {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data.toString())
//     }

// })



// fs.writeFile("test.txt","Devinder Singh", function(err)
// {
//     if(err)
//     {
//         console.log(err)
//     }
//     else{
//         console.log("Your data is written in the file suucessfully ")
//     }
// })


// fs.writeFile("test.txt","Firozpur", function(err)
// {
//     if(err)
//     {
//         console.log(err)

//     }
//     else
//     {
//         console.log("data apppended succsefuly xw")
//     }
// })


// fs.unlink("test.txt",function(err)
// {
//     if(err)
//     {
//         console.log(err)

//     }
//     else{
//         console.log("file is deleted successufly")
//     }
// })



fs.mkdir("dev",function(err)
{
    if(err)
    {
        console.log(err)

    }
    else{
        console.log("folder is created ")
    }
})