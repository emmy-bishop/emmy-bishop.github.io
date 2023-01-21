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
// Strings have built-in methods
console.log(squirrelName.length);

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

// Variables that have been declared, but not assigned values, will resolve to a value of undefined
var myVariable; // declares variable
console.log(myVariable); // prints => undefined
myVariable = ''; // reassigns variable to value of an empty string
console.log(myVariable); // prints =>        
// Functions will return undefined whenever a return statement is omitted
function findProduct(num1, num2) {
  num1 * num2;
}; // declares function
console.log(findProduct(3, 4)); // prints => undefined

// 8 null //

// Represents the intentional absence of a value
var mySanity = null; // declares variable with value of null
console.log(mySanity); // prints => null

// 9 NaN //

// Represents a failed operation on numbers
var addUndefined = 2 + undefined; // initializes variable to value of a number plus undefined
console.log(addUndefined); // prints => NaN
var impossibleOperation = 0 / 0; // initializes variable to value of zero divided by zero
console.log(impossibleOperation); // prints => NaN

// 10 Infinity and -Infinity

// Infinity represents a value that is greater than any other number
var biggestNumber = Infinity; // initializes variable with value of infinity
console.log(biggestNumber); // prints => Infinity
console.log(biggestNumber + 1) // prints => Infinity
// -Infinity represents a value that is smaller than any other number
var smallestNumber = -Infinity;
console.log(smallestNumber); // prints => -Infinity
console.log(smallestNumber / 1000) // prints => -Infinity

// 11 Simple vs. Complex Data Types //

// 1. Simple Data Types:
// Numbers
// Strings
// Booleans
// Undefined
// Null
// NaN

// Simple data types are atomic
// This means they exist in and of themselves--a simple data type cannot hold another simple data type
// Simple data types are immutable
// This means once they are created, they may be reassigned but never directly changed
var myAge = 26; // initializes variable with value of 26
myAge += 1; // reassigns variable to value of adding 26 + 1
console.log(myAge); // prints => 27

// 2. Complex Data Types:
// Arrays
// Objects
// Functions

// Complex data types collect other values
// Because they collect other values, complex data types are of an indefinite size
// Complex data types are mutable
// This means once they are created, they may be directly changed
var rodents = ['gerbil', 'hamster', 'rat']; // initializes rodents variable
rodents[rodents.length - 1] = 'capybara'; // changes last value to capybara
console.log(rodents); // prints => ['gerbil', 'hamster', 'capybara']

// 12 Copy by Value vs. Copy by Reference //

// 1. Copy by Value
// Simple data types are copied by value
var z = 26; // initializes variable
var y = z; // initializes variable to value of previous variable
y = 25; // reassigns value of variable
console.log(y); // prints => 25
// Because numbers are simple data types and simple data types are copied by value, changing the value stored in y did not affect the value stored in z
console.log(z); // prints => 26

// 2. Copy by Reference
// Complex data types are copied by reference
var bear = {
  type: 'sun'
};
var bearContainer = bear; // assigns variable to value of bear object
// Both bear and bearContainer now point to the same object
console.log(bearContainer); // prints => { type: 'sun' }
bearContainer.type = 'panda'; // reassigns type of bearContainer
// Because objects are complex data types and complex data types are copied by reference, changing the value stored in bearContainer DID affect the value of bear
console.log(bear); // prints => { type: 'panda' }










// need at least 3 string methods
// only need to pick a few unary operators