/**
 * STRING MANIPULATION:
 * 
 * 0: In JavaScript, it is possible to alter string values in various ways even after they have been declared.
 * 
 * 1: With Operators: Strings can be concatenated, or added together, using operators.
 * 
 * 2: With Methods: Strings can also be manipulated using built-in string methods.
 */

// 1 With Operators //

// 1. Concatenation Operator
// Adds a string to another string.
let monkeyString = 'Bonobo' + ' ' + '(Pan paniscus)'; // concatenates three strings
console.log(monkeyString); // prints => Bonobo (Pan paniscus)

// 2. Concatenation Assignment Operator
// Reassigns value of a string to itself plus another string.
monkeyString += ': Initially believed to be a subspecies of chimpanzee. Oops!'; // adds to monkeyString
console.log(monkeyString); // prints => Bonobo (Pan paniscus): Initially believed to be a subspecies of chimpanzee. Oops!

// 2 With Methods //

// 1. .slice
// Slices out a portion of a string at the given index(es). Returns the sliced portion as a new string.
monkeyString.slice(7, 21); // slices string starting at 7th index and ending after 20th index
console.log(monkeyString.slice(7, 21)); // prints => (Pan paniscus)

// 2. .toUpperCase
// Converts a string to uppercase.
let yelling = 'I am so angry';
console.log(yelling.toUpperCase()); // prints => I AM SO ANGRY

// 3. .replace
// Replaces a given value with another given value.
console.log(yelling.replace('angry', 'teed off')); // prints => I am so teed off

// 4. .concat
// Joins two or more strings.
let yellingContinued = 'and I wish to scream';
console.log(yelling.concat(' ', yellingContinued)); // prints => I am so angry and I wish to scream






