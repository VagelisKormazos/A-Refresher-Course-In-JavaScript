// Define An Object.
let person ={
    firstName:'Vagelis',
    lastName:'K',
    age:null,
    fullName : function() {
        return this.firstName + " " + this.lastName;
      }
};
// Define An Other Object.
let car = {
    type:"Fiat",
    model:"500", 
    color:"white",
    detail:'Good'
};

// Nested Objects
myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }

// Create a copy.
const x = person;

// Delete the properties detail or delete person["age"];
delete car.detail;

// Dot Notation.
person.age = 33;

let selectedName= 'lastName';

// Bracket Notation.
person[selectedName]='Kor'

// Using Object.entries()
let text5 = '';
// for (let [car,value] of Object.entries(car)){    text5 += car + ": " + value + "<br>";}

// JavaScript objects can be converted to a string with JSON method JSON.stringify().

console.log(person);

console.log(person.fullName().toUpperCase());

