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

// 1. Addition Assignment Operator
favoriteNumber += 1; // adds 1 to value of variable
console.log(favoriteNumber); // prints => 6

// 2. Subtraction Assignment Operator
favoriteNumber -= 3; // subtracts 3 from variable
console.log(favoriteNumber); // prints => 3

// 3. Multiplication Assignment Operator
favoriteNumber *= 4; // multiplies variable by 4
console.log(favoriteNumber); // prints => 12

// 4. Division Assignment Operator
favoriteNumber /= 2; // divides variable by 2
console.log(favoriteNumber); // prints => 6

// 5. Remainder Assignment Operator
favoriteNumber %= 1.5; // divides variable by 1.5 using remainder assignment operator. Assigns value of remainder
console.log(favoriteNumber); // prints => 4

// 6. Exponentiation Assignment Operator
favoriteNumber **= 2; // raises variable to the power of 2
console.log(favoriteNumber); // prints => 16


// 2 Arithmetic Operators //

// 1. Addition Operator
leastFavoriteNumber = 1 + 5; // adds numbers together
console.log(leastFavoriteNumber); // prints => 6

// 2. Subtraction Operator
leastFavoriteNumber = 7 - 1; // subtracts numbers
console.log(leastFavoriteNumber); // prints => 6

// 3. Multiplication Operator
leastFavoriteNumber = 3 * 2; // finds product of numbers
console.log(leastFavoriteNumber); // prints => 6

// 4. Division Operator
leastFavoriteNumber = 12 / 2; // divides numbers
console.log(leastFavoriteNumber); // prints => 6

// 5. Remainder Operator
leastFavoriteNumber = 22 % 8 // divides numbers and returns remainder 
console.log(leastFavoriteNumber); // prints => 6

// 6. Exponentiation Operator
leastFavoriteNumber = 1.81712 ** 3 // raises number to the power of another number
console.log(leastFavoriteNumber); // prints => 6

// 7. Increment Operator
leastFavoriteNumber++; // adds 1 to number
console.log(leastFavoriteNumber); // prints => 7

// 8. Decrement Operator
leastFavoriteNumber--; // subtracts 1 from number
console.log(leastFavoriteNumber); // prints => 6


// 3 Comparison Operators //

// 1. Equality Operator
// Compares values after converting both to the same type
console.log(5 == 8); // prints => false
console.log(5 == 5); // prints => true
console.log(5 == '5'); // prints => true

// 2. Strict Equality Operator
// Compares values, but does not convert them to the same type 
// Returns true only when both value and type match
console.log(5 === 5); // prints => true
console.log(5 === '5'); // prints => false

// 3. Inequality Operator
// After converting given values to the same type, returns true if the values do not equal each other 
console.log(5 != 5); // prints => false
console.log(5 != 8); // prints => true
console.log(5 != '5'); // prints => false

// 4. Strict Inequality Operator
// Compares values, but does not convert them to the same type
console.log(5 !== 5); // prints => false
console.log(5 !== 8); // prints => true
console.log(5 !== '5'); // prints => true

// 5. Greater Than Operator
// Compares values and returns true if one is greater than the other
console.log(5 > 4); // prints => true
console.log(4 > 5); // prints => false

// 6. Less Than Operator
// Compares values and returns true if one is less than the other
console.log(4 < 5); // prints => true
console.log(5 < 4); // prints => false

// 7. Greater Than or Equal to Operator
// Compares values and returns true if one is greater than or equal to the other
console.log(5 >= 4); // prints => true
console.log(5 >= 5); // prints => true
console.log(5 >= 6); // prints => false

// 7. Less Than or Equal to Operator
// Compares values and returns true if one is less than or equal to the other
console.log(4 <= 5); // prints => true
console.log(5 <= 5); // prints => true
console.log(6 <= 5); // prints => false


// 4 Logical Operators //

// 1. And Operator
// Returns true only if each given condition is true
console.log(5 === 5 && 5 >= 4); // prints => true
console.log(5 === 5 && 5 > 6); // prints => false

// 2. Or Operator
// Returns true if any given condition is true
console.log(5 === 5 || 5 > 100); // prints => true
console.log(5 === 4 || 5 > 100); // prints => false

// 3. Not Operator
// Returns true if given condition is false
console.log(!true); // prints => false


// 5 Unary Operators //

// 1. type of
// Returns a string indicating the data type of the given value
console.log(typeof 5); // prints => number

// 2. Delete
// Removes a property from an object
let baguette = {
    length: '1 meter',
    crustiness: 'very crusty',
};
delete baguette.length; // deletes length property
console.log(baguette); // returns {crustiness: 'very crusty'};

// 6 Ternary Operator //

// The conditional (ternary) operator is the only operator in JavaScript that takes 3 operands
// The first operand is a condition to evaluate
// The second operand is the action to perform if the condition is true
// The third operand is the action to perform if the condition is false
console.log(5 > 4 ? true : false); // prints => true
console.log(5 < 4 ? true : false); // prints => false
