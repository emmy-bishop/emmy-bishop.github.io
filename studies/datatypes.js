/**
 * VARIABLES:
 * 
 * 0: In programming, it is often necessary to hold onto certain data for future reference.
 * To accomplish this, we can store values--such as numbers, strings of words, true/false values, and entire collections of information--within variables.
 * Variables make it easy to access and even manipulate our stored data at any point.
 * 
 * 1: Declaration and Assignment: To create a new variable, we start off with a keyword followed by the name of our variable.
 * This name must be unique.
 * 
 * 2: Var, Let, and Const: Var, let, and const are different declarative keywords and they do different things.
 */

// 1 Declaration and Assignment //

var age; // declares variable
age = 35; // assigns value to age variable

// 2 Var, Let, and Const //

// 1. var
// Variables created using var can be re-declared or updated
var username = 'weresquirrel'; // initializes variable
console.log(username); // prints => weresquirrel
var username = 'regularhuman'; // re-declares variable
console.log(username); // prints => regularhuman
// Variables created without the var keyword have global scope
username = 'totalweirdo'; // will be accessible throughout entire program and override any previous value of username

// 2. let
// Like var, variables created using the let keyword can be changed
let weather = 'sunny'; // initializes variable
console.log(weather); // prints => sunny
weather = 'cloudy'; // updates variable
console.log(weather) // prints => cloudy


// need at least 3 string methods
// only need to pick a few unary operators