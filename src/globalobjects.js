// this is a __dirname object which will return the absolute path of my Node.js folder/ directory 

console.log("absolute path of my directory is = "+__dirname)


// this is a __filename object which will return the absolute path of my Node.js file 

console.log("abolsute path of my Node.js file is = "+__filename)



// console module 

// 1. console.log() = log() is a function used to print any single line string or variable on the terminal or console of the webs web application 
a=10

console.log(" This is a Test console output to test console.log module ")
console.log(a)
console.log("we can also print a varianle like a and a string like this with the help of a + operator "+a)


// 2. console.error() = error() is a function used to print or push any error statement on the console . 
// this can be usefull when user did somerhing wrong , or hit a wrong password or any wrong condition . 


console.error(new Error("this is a wrong condition hit "))

// by this method we can create a error in the program 




// 3. console.warn() = warn() ia a function used to print someking of warning in the console . 
// its use case can be nything in the code that need attention like , password attemps , or any time function can be used to hit a warning . 


console.warn("this is a basic warning")