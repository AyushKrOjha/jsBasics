//take an array [34, 42, 9, 75, 12]
// sort in this order [small, largest, ...]
let arr = [34, 42, 9, 75, 12]
let arr1 = [...arr]
arr1.sort((a,b)=>a-b)
console.log(arr1)

let sortedArr = []
for(let i = 0; i < arr.length; i++){
    sortedArr[i] = arr1.shift()
    arr1.reverse()
}
console.log(sortedArr)