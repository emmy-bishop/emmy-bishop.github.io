/**
 * VARIABLES:
 * 
 * 0: In programming, it is often necessary to hold onto certain data for future reference.
 * To accomplish this, we can store values--such as numbers, strings of words, true/false values, and entire collections of information--within variables.
 * Variables make it easy to access and even manipulate our stored data at any point.
 * 
 * 1: Declaration and Assignment: To create a new variable, we start off with a keyword followed by the name of our variable.
 * This name must be unique. If we wish to assign a value to a variable, we can use an = sign followed by the value.
 * 
 * 2: Var, Let, and Const: Var, let, and const are different declarative keywords and they do different things.
 */

// 1 Declaration and Assignment //

var age; // declares variable
age = 35; // assigns value to age variable

// 2 Var, Let, and Const //

// 1. var
// Variables created using var can be re-declared or updated
// They can be accessed either throughout the entire scope of the program or--when declared within a function--only within that function
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
// However, when declared within a code block, the scope of a variable created using let will be limited to that code block
if (username === 'totalWeirdo') {
    let foo = 3;
} // if statement containing a let variable
console.log(foo); // prints => ReferenceError: foo is not defined at Object
// It is not possible to reference a variable created using let before it has been declared
console.log(goo); // prints => Cannot access 'goo' before initialization
let goo = 'slime';

// 3. const
// Variables created using const behave in much the same way as variables created using let
// However, variables created using const cannot be re-declared after initialization
// Therefore, const should only be used when declaring a variable that should remain static
const toastDoneness = 'burnt'; // initializes variable
console.log(toastDoneness) // prints => burnt
toastDoneness = 'a perfect golden-brown'; // prints => TypeError: Assignment to constant variable
// Much like variables created with let, variables created with const are scoped to the code block in which they are declared
if (toastDoneness === 'a perfect golden-brown') {
    const feelingsAboutToast = 'positive';
} else {
    const feelingsAboutToast = 'negative';
}
console.log(feelingsAboutToast); // prints => ReferenceError: feelingsAboutToast is not defined at Object




