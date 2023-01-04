// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //

    if (Array.isArray(value) === true) { // check if value is an array
        return true; // if so return true
    } else { // else return false
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    if (value === null) { // check if value is null
        return false; // if so return false
    } else if (Array.isArray(value) === true) { // check if value is an array
        return false; // if so return false
    } else if (value instanceof Date === true) { // check if value is a date
        return false; // if so return false
    } else if (typeof value === 'object') { // check if value is an object
        return true; // if so return true
    } else { // else return false
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    if (Array.isArray(value) === true) { // check if value is an array
        return true; // if so return true
    } else if (value instanceof Date === true) { // check if val is a date
        return false; // if so return false
    } else if (value === null) { // check if val is null
        return false; // if so return false
    } else if (typeof value === 'object') { // check if val is an object
        return true; // if so return true
    } else { // else return false
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    if (typeof value === 'number') { // check if val is a number
        return 'number'; // if so return number
    } else if (typeof value === 'string') { // check if val is a string
        return 'string'; // if so return string
    } else if (Array.isArray(value) === true) { // // check if val is an array
        return 'array'; // if so return array
    } else if (typeof value === 'undefined') { // check if val is undefined
        return 'undefined'; // if so return undefined
    } else if (typeof value === 'boolean') { // check if val is a boolean
        return 'boolean'; // if so return boolean
    } else if (value === null) { // // check if val is null
        return 'null'; // if so return null
    } else if (typeof value === 'function') { // check if val is a function
        return 'function'; // if so return function
    } else if (value instanceof Date === true) { // check if val is a date
        return 'date'; // if so return date
    } else if (typeof value === object) { // check if val is an object
        return 'object'; // if so return object
    }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
