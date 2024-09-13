module.exports = class Person
{
    age = 29 //class variables / properties 
    get location(){
        return "Varanasi, India"
    }
    //constructor is a method which executes by default when you create object of a class 
    constructor(firstName,lastName){//instance variables 
        this.firstName = firstName // to access firstNAme through out the class otherwise it is a block variable 
        this.lastName = lastName
    }

    fullName(){
        console.log(this.firstName+" "+ this.lastName)
    }
}

// let person = new Person("Tim","Dave")
// let person1 = new Person("Chris", "Jones")
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName())
// console.log(person1)