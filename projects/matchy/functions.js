/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

// const { animals } = require('./data');

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, name) { // create function w/ parameters representing animals array and name of animal to search
    for (var i = 0; i < animals.length; i++) { // loop thru animals array
      if (animals[i].name === name) { // check if name animal obj within animals array matches input name
        return animals[i]; // if so return animal obj
      }
      }
      return null; // otherwise return null
    }

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement) { // create replace function
    for (var i = 0; i < animals.length; i++) { // loop through animals array
        if (animals[i].name === name) { // check if each animal's name matches input name
            animals[i] = replacement; // if so replace animal obj w/ replacement obj
        } 
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) { // create remove function
    for (var i = 0; i < animals.length; i++) { // loop thru animals array
        if (animals[i].name === name) { // check if given animal's name matches input name
            animals.splice(animals[i]); // if so remove that animal obj
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) { // create function to add animal
var matchExists = false; // create variable to keep track of whether a match has been found
    for (var i = 0; i < animals.length; i++) { // loop thru animals array
        if (animals[i].name === animal.name) { // check if given animal's name matches name in input animal obj
            matchExists = true; // if so change variable to true
        }
        }
        if (matchExists === false) { // check if variable's value is false meaning no match was found
            animals.push(animal); // if so push animal obj into animals array
        }
}

/**
 * You did it! You're all done with Matchy!
 */

// if (animal.species.length > 0 && animal.name.length > 0) {



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
