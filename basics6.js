let day = 'tuesday '
console.log(day.length)

let subDay = day.slice(0,4)
console.log(subDay)

console.log(day[0])

let splitDay = day.split('s')
console.log(splitDay)
console.log(splitDay[1].length)
console.log(splitDay[1].trim().length)

let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)
let diffs = diff.toString()
console.log(typeof(diffs))

let newQuote = day + "is funday"
console.log(newQuote)
let val = newQuote.indexOf("is")
console.log(val)

//tuesday is funday
let count = 0 
let value = newQuote.indexOf("day")
while(value!== -1){
    count++;
    value = newQuote.indexOf("day",value+1)
}
console.log(count)