"use strict"; // treat all JS code as newer version

// Since we're in Node.js, use console.log instead of alert
console.log(3 + 3); 

// Primitive Data Types:

// String: Represents text.
let name = "Alice";
let message = 'Hello, how are you?';
let greeting = `Welcome, ${name}!`; // Template literals for dynamic strings

console.log(name); // Outputs: Alice
console.log(message); // Outputs: Hello, how are you?
console.log(greeting); // Outputs: Welcome, Alice! (using name variable)

// Number: Represents numeric values (integers and decimals).

let age = 30;
let pi = 3.14159;
let bigNumber = 9007199254740992n; // BigInt example

console.log(age); // Outputs: 30
console.log(pi); // Outputs: 3.14159
console.log(bigNumber); // Outputs: 9007199254740992n

// Boolean: Represents logical values (true or false).

let isLoggedIn = true;
let isNightTime = false;

console.log(isLoggedIn); // Outputs: true
console.log(isNightTime); // Outputs: false

// Undefined: Represents a variable that has been declared but not assigned a value.

let someVar;

console.log(someVar); // Outputs: undefined

// Null: Represents the intentional absence of a value.

let emptyObject = null;

console.log(emptyObject); // Outputs: null

// Symbol: A unique and immutable identifier used for object properties (less common).

let uniqueSymbol = Symbol("mySymbol");

console.log(uniqueSymbol); // Outputs: Symbol(mySymbol) (unique identifier)

// Non-Primitive Data Types:

// Object: A collection of key-value pairs.

let person = {
  name: "Bob",
  age: 25,
  hobbies: ["reading", "coding"]
};

console.log(person.name); // Outputs: Bob
console.log(person.hobbies[1]); // Outputs: coding (accessing array element)

// Array: An ordered list of values.

let fruits = ["apple", "banana", "orange"];

console.log(fruits[0]); // Outputs: apple (accessing element by index)
console.log(fruits.length); // Outputs: 3 (number of elements)

// Function: A reusable block of code that performs a specific task.

function greet(name) {
  return `Hello, ${name}!`;
}

let msg = greet("Charlie");
console.log(msg); // Outputs: Hello, Charlie!
