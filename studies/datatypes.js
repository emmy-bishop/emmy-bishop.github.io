/**
 * DATA TYPES:
 * 
 * 0: In JavaScript, each piece of data is of a certain type.
 * Depending on the data type, each piece of data will have different properties and requirements.
 * 
 * 1: Number
 * 
 * 2: String
 * 
 * 3: Boolean
 * 
 * 4: Array
 * 
 * 5: Object
 * 
 * 6: Function
 * 
 * 7: Undefined
 * 
 * 8: null
 * 
 * 9: NaN
 * 
 * 10: Infinity and -Infinity
 * 
 * 11: Simple vs. Complex Data Types
 * 
 * 12: Copy by Value vs. Copy by Reference
 */

// 1 Number //

// Numbers can be assigned to variables directly, without the use of quotation marks
var squirrelCount = 5; // initializes variable to the value of a number
console.log(squirrelCount); // prints => 5

// 2 String //

// However, strings must be wrapped in quotation marks in order for the JavaScript interpreter to parse their values
var squirrelName = 'Acorn'; // initializes variable to the value of a string
console.log(squirrelName); // prints => Acorn
var squirrelName = Acorn; // prints => ReferenceError: Acorn is not defined at Object

// 3 Boolean //

// Booleans are used to represent true vs. false values
// Unlike strings, booleans do not need to be wrapped in quotation marks
var isStudent = true; // initializes variable to a boolean value
console.log(isStudent); // prints => true;
var isStudent = false; // initializes variable to the value of a boolean
console.log(isStudent); // prints => false;
var droppedOut = true; // initializes variable to the value of a boolean
console.log(droppedOut); // prints => true;
// Some statements, like if statements, will resolve to the value of a boolean and only execute if that value is true
if (1 > 0) {
  console.log('1 is greater than 0!');
} // prints => 1 is greater than 0! because if statement resolved to true
if (1 < 0) {
  console.log('1 is less than 0!');
} // prints nothing because if statement resolved to false

// 4 Array //

// Arrays are zero-indexed lists of related values
// This means that instead of referring to the first element in an array as element #1, we instead refer to it as element #0
var evenNumbers = [2, 4, 6, 8, 10]; // initializes variable to the value of an array
console.log(evenNumbers); // prints => [2, 4, 6, 8, 10]
// Arrays are accessed using bracket notation
console.log(evenNumbers[0]); // prints => 2
console.log(evenNumbers[1]); // prints => 4
// Arrays have a length property that resolves to the number of values within the array
console.log(evenNumbers.length); // prints => 5
// Because arrays are zero-indexed, to access the last element in an array we refer to the element at the location of the length of the array - 1
console.log(evenNumbers[evenNumbers.length - 1]); // prints => 10

// 5 Object //

// Objects are unordered lists of key/value pairs
// We use objects when we need to store a set of characteristics describing a specific person, place, or thing
var userObject = {
  username: 'n00bpwn0r',
  age: 22,
  unemployed: true
}; // initialzes object describing a user with keys of username, age, and employment status
// Objects are accessed using dot or bracket notation
console.log(userObject.age); // prints => 22
console.log(userObject['username']); // prints => n00bpwn0r
// We can also reassign values using dot and bracket notation
userObject.unemployed = false; // reassigns value at unemployed key
console.log(userObject); // prints => { username: 'n00bpwn0r', age: 22, unemployed: false }
userObject['age'] = 23; // reassigns value at age key
console.log(userObject); // prints => { username: 'n00bpwn0r', age: 23, unemployed: false }

// 6 Function //

// Functions are reusable pieces of code that perform predefined actions
function findSum(num1, num2) {
  return num1 + num2;
} // declares findSum function that will take in parameters representing 2 numbers and return their sum
// To use functions, we call, or invoke, them, and pass in our values
console.log(findSum(2, 3)); // prints => 5

// 7 Undefined //













// need at least 3 string methods
// only need to pick a few unary operators