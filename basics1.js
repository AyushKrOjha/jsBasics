//Printing
console.log("Hello World!")

//variables
var a = 10
console.log(a)
console.log(typeof(a))

let b = 10.5
console.log(b)
console.log(typeof(b))

let c = "Ayush Ojha"
console.log(c)
console.log(typeof(c))

let required = true
console.log(required)
console.log(typeof(required))

//null & Undifined are two more data types
//let c = a + b (it did not work --> we cannot redeclare variable with let keyword but possible with var)
c = a + b // reassigning is allowed with let 
// var c = a + b this is also allowed
console.log(c)

//not operator 
console.log(!required)