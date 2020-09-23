console.log('Hi Heejin!');


// 1. String.length
let message = 'good nite';
console.log(message.length);
// Prints: 9

console.log('jenny'.length);
// Prints: 5


// 2. Methods
// Returns a number between 0 and 1
Math.random();

// 3. Math.floor()
// The Math.floor() function returns the largest integer less than or equal to the given number.

console.log(Math.floor(5.95));
// Prints: 5

// 4. Variables
let name = "heejin";
const found = false;
var age = 26;
console.log(name, found, age);
// heejin, false, 26


// 5. let 
// let creates a local variable in JavaScript & can be re-assigned.
let count;
console.log(count); // Prints: undefined
count = 10;
console.log(count); // Prints: 10


// 6. const
// Any attempt of re-assigning a const variable will result in JavaScript runtime error.
const numberOfColumns = 4;
numberOfColumns = 8;
// TypeError: Assignment to constant variable.


// 7. String Concatenation
let service = 'credit card';
let month = 'May 30th';
let displayText = 'Your ' + service + ' bill is due on ' + month + '.';

console.log(displayText);
// Prints: Your credit card bill is due on May 30th.


// 8. String Interpolation
let age = 7;

// String concatenation
'Tommy is ' + age + ' years old.';

// String interpolation
`Tommy is ${age} years old.`;

// var is used in pre-ES6 versions of JavaScript.
// let is the preferred way to declare a variable when it can be reassigned.
// const is the preferred way to declare a variable with a constant value.