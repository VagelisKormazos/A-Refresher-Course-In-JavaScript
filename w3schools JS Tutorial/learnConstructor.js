// Object Constructor Functions
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.fullName = function() {
      return this.firstName + " " + this.lastName;
    };
  }

//Adding a Method to a Constructor
Person.prototype.changeName = function (name) {
    this.firstName = name;
  }

//JavaScript has built-in constructors for all native objects

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
myMother.changeName("Vivi");
myFather.nationality = "English";

console.log(myMother);

//String Length
let text2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text2.length);

// Strings as Objects
let y = new String(myMother.name)
console.log(y.length);

// String Method
console.log(text2.charAt(2));
console.log(text2.toLowerCase().slice(3,10));
console.log(mySister.firstName.concat(" ",myFather.lastName));
console.log(mySister.firstName.replace("a","i"));
//console.log(mySister.firstName.split("n"));

// The indexOf() method returns the index (position) of the first occurrence.
let text3 = "Please locate where 'locate' occurs!";
let index = text3.indexOf("locate");
let index2 = text3.lastIndexOf("locate");
console.log('First locate at :',index ,'and Last:', index2);
console.log(`Welcome ${text2}, ${text3}!`);

// JavaScript Number Methods
let z = 9.656;
console.log('The number: '+ z.toString() + ' can convert the  decimal ' + z.toExponential(2) + ' or ' + z.toFixed(2) + ' or ' + z.toPrecision(2));

