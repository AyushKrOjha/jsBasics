//block of code
//var - Global level [OR] Function level
//let - Global level [OR] Block level {}
//const - same as 'let' but constant
 
var greet = "Evening"
function add(a, b){
    var greet = "Morning"
    return a+b
}

let sum = add(2,3)
console.log(sum)
console.log(greet)  // Evening

//does not have name => called anyonymus function -- function expressions 

let sumOfInts = function(a,b){
    return a+b
}

let sumOfNumbers = (c,d)=> c+d
console.log(sumOfNumbers(2,3))