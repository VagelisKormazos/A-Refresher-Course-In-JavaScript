// Empty Array(The Array is Object).
let arrayWithColors=[];

// Define The Array.
arrayWithColors=['red','blue'];

// Add One More Color.
arrayWithColors[2] = 'green' ;
arrayWithColors.push("pink");

// This is prove that the Array is an Object for the Js.
arrayWithColors[0] = "1";

// Display the Array.
console.log(arrayWithColors);

// Display the First Color.
console.log(arrayWithColors[0]);

// Looping Array Elements.
let allColors =" ";
for (let i = 0; i <arrayWithColors.length; i++){
    allColors += arrayWithColors[i] + " ";
}

console.log(allColors);
console.log(typeof arrayWithColors);

// Removes the last element.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruitRemoved = fruits.pop();


// Adds a new element
fruits.push("Kiwi");
let lengthAfterPush = fruits.push("Kiwi");

alert(fruitRemoved + " removed" + ' we pushed the Kiwi and the new length is '+ lengthAfterPush);
fruits.push("Banana");
fruits.shift();

// Using delete() leaves undefined holes in the array.

// The concat() method creates a new array
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren)

// Copy to index 2, all elements from index 0
let summerFruits=[]
summerFruits.copyWithin(2, 0);
const citrus = fruits.slice(3);
summerFruits.push(citrus);

//console.log(summerFruits.toString);

// Search an array for the item "Apple"
console.log(fruits);

fruits.includes("Mango"); // is true

let applePosition = fruits.indexOf("Apple") + 1;
console.log("We find the Apple in position " + applePosition);

// The sort() method sorts an array alphabetically.
fruits.sort();

// The difference between toSorted() and sort() is that the first method creates a new array.
const sortedFruits = fruits.toSorted();

// The reverse() method reverses the elements
fruits.reverse();

// The ... operator expands an iterable (like an array) into more elements.
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];