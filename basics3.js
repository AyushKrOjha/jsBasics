var marks = Array(6)
var marks = new Array(20, 40, 35, 56, 100, 13)

var marks = [20, 40, 35, 56, 100, 13]

console.log(marks[2])
marks[5] = 40
console.log(marks)

console.log(marks.length)

//append new element 
marks.push(65)
console.log(marks)

//Delete last element 
marks.pop()
console.log(marks)

//add element in 0th position
marks.unshift(14)
console.log(marks)

//Delete first element 
marks.shift()
console.log(marks)

//index of any element
console.log(marks.indexOf(56))

//check if number is present 
console.log(marks.includes(120))
console.log(marks.includes(35))

//creating sub array from main array 
var subMarks = marks.slice(2, 5)
console.log(subMarks)

//for loop for array
var sum = 0;
for(let i = 0; i < marks.length; i++){
    sum += marks[i];
    console.log(marks[i])
}
console.log(sum)

//reduce method
var total = marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)


// new Array
var scores = [12, 13, 14, 16]
var evenScr = []
for(var i = 0; i < scores.length; i++){
    if(scores[i]%2 == 0){
        evenScr.push(scores[i])
    }
}
console.log(evenScr)

// filter method
let newFilterScr = scores.filter(score=>score%2==0)
console.log(newFilterScr)

// map function (multiply each element by 3)
var mappedScr = newFilterScr.map(score=>score*3)
console.log(mappedScr)

var total = mappedScr.reduce((sum,score)=>sum+score,0)
console.log(total)

//method chaining
var score1 = [12, 13, 14, 16]
var total = score1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(total)

//sorting of any array 
let fruits = ["Banana", "mango", "apple", "grapes" ]
fruits.sort() // only used in string
console.log(fruits)
fruits.reverse()
console.log(fruits)

var scores2 = [34, 54, 12, 9, 78]
console.log(scores2.sort((a,b)=>a-b))