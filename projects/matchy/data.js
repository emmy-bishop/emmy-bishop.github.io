/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {}; // create animal variable and assign to empty obj
animal.species = 'zebra'; // add key of species w/ val of zebra
animal['name'] = 'Coolguy'; // add key of name w/ val of Coolguy
animal.noises = []; // add key of noises w/ val of empty array
console.log(animal); // console log animal obj


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = []; // create empty noises array
noises[0] = 'neigh'; // add neigh to noises arr
noises.push('whoop'); // add whoop to end of noises arr
noises.unshift('rawr'); // add rawr to beg of noises arr
noises[noises.length] = 'woof'; // add woof to end of noises arr


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises; // add created noises to animal obj's noises key
animal.noises.push('eeeee'); // push eeeee into animal obj's noises
console.log(animal); // console log animal obj


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = []; // create empty animals array
animals.push(animal); // push animal obj into array
console.log(animals); // console log array

var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] } // create duck obj

animals.push(duck); // push duck obj into animals array
console.log(animals); // console log array

var dog = { species: 'dog', name: 'Fido', noises: ['arf', 'woof']}
var jellyfish = { species: 'jellyfish', name: 'Moon', noises: ['blub', 'aaaaa']} // create dog and jellyfish objs

animals.push(dog, jellyfish); // push both into animals array

console.log(animals);
console.log(animals.length); // console log animals array and length of animals array


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = []; // use array because it will be a simple list of friends, no key/value pairs, easy to iterate thru

function getRandom(array) { // create getRandom func
var min = 0; // create min var and set its value to 0
var max = array.length - 1; // create max var and set its value to last item in array
return Math.floor(Math.random() * (max - min + 1) + min) // return result of finding random number, making it into an integer, and rounding it down
}


friends.push(animals[getRandom(animals)].name); // push name at random number's index into friends array
console.log(friends); // console log friends

animals[0]['friends'] = friends; // add friends key to first item in animals array w/ val of friends array

console.log(animals); // console log animals

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}