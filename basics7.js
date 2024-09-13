//object is a collection of properties

let person = {
    firstName:'Tim',
    lastName:'Joe',
    age : 24,
    fullName: function(){
        console.log(this.firstName+" "+this.lastName)
    }
}

console.log(person.lastName)
console.log(person['lastName'])

person.firstName = 'Tim Dane'
console.log(person.firstName)

person.gender = 'male'
console.log(person)
delete person.gender
console.log(person)

//property exixt or not 
console.log('gender' in person)

//for loop for objects
//print all values of javas cript object 
for(let key in person){
    console.log(person[key])
}

console.log(person.fullName())