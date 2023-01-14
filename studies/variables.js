/** 
 * VARIABLES:
 * 0. In programming, it is often necessary to hold onto certain data for future reference.
 * To accomplish this, we can store values--such as numbers, strings of words, true/false values, and entire collections of information--within variables.
 * Variables make it easy to access and even manipulate our stored data at any point.
 * 1. To create a new variable, we start off with a keyword like var, let, or const followed by the name of our variable.
 * This name must be unique.
 * 2. Usually, we create a variable and assign it a value right away. However, it is possible to create a variable without assigning it a value.
*/

// 1. declaration //
var username; // At this point, the variable 'username' exists but lacks a value
console.log(username); // prints => undefined

// 2. initialization or assignment
var username = 'weresquirrel'; // Here, we assign the variable's value to a string of letters
console.log(username) // prints => weresquirrel

// 3. reassignment
username = 'regularhuman'; // Now, if we want, we can change the value of username
console.log(username) // prints => regularhuman



