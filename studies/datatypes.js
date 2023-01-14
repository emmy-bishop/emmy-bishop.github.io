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


/**
 * DATA TYPES:
 * 
 * 0: In JavaScript, each piece of data is of a certain type.
 * Depending on the data type, each piece of data will have different properties and requirements.
 * 
 * 1: 
 */

/** 
 * OPERATORS:
 * 
 * 0:  We can assign and modify values using operators. Operators are also used to perform calculations and comparisons.
 * The different types of operators are:
 * 
 * 1: Assignment Operators
 * Used to assign or reassign values
 * 
 * 2: Arithmetic Operators
 * Used to perform mathematical calculations
 * 
 * 3: Comparison Operators
 * Used to compare two or more values
 * 
 * 4: Logical Operators
 * Used to evaluate the logic between two or more values
 * 
 * 5: Unary Operators
 * Act on a single operand
 * 
 * 6: Ternary Operators
 * Act on three operands
 */

// 1 Assignment Operators //

var favoriteNumber = 5; // assignment operator assigns value of 5 to variable

// 1. Addition Assignment Operators
favoriteNumber += 1; // adds 1 to value of variable
console.log(favoriteNumber); // prints => 6

// 2. Subtraction Assignment Operators
favoriteNumber -= 3; // subtracts 3 from variable
console.log(favoriteNumber); // prints => 3

// 3. Multiplication Assignment Operators
favoriteNumber *= 4; // multiplies variable by 4
console.log(favoriteNumber); // prints => 12

// 4. Division Assignment Operators
favoriteNumber /= 2; // divides variable by 2
console.log(favoriteNumber); // prints => 6

// 5. Remainder Assignment Operators
favoriteNumber %= 3 // divides variable by 3 using remainder assignment operator. Assigns value of remainder
console.log(favoriteNumber); // prints => 0

// 2 Arithmetic Operators //











// need at least 3 string methods
// only need to pick a few unary operators