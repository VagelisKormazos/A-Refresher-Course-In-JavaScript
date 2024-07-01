// JavaScript Class Syntax
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
      }
  }

//Using a Class
const myCar = new Car("VW", 2019);
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

//Returns the Car age.
console.log("My car is " + myCar.age() + " years old.");