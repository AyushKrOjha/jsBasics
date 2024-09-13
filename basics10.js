//Inheritannce is the main piller in the Object oriented programming 
//one class can inherit/acquire the properties, methods of another class 
//The class which inherits the propertis of other is known as sub class
//The class whose propertiies are inherited is known as superclass
const Person = require('./basics8')
class Pet extends Person{
    get location(){
        return "BlueCross"
    }
    constructor(firstName,lastName){
        //calls parent class constructor
        super(firstName,lastName)
    }
}

let pet = new Pet("jerry","mouse")
console.log(pet.fullName())
console.log(pet.location)