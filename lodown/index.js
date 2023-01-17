'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to return given value unchanged
 * 
 * @param { Any value }: Function takes in any value
 * @return { Any value }: Function returns input value unchanged
 */

function identity(val) {
    return val;
}
module.exports.identity = identity;


/**
 * typeOf: Designed to return the type of a given value
 * 
 * @param { Any value }: Function takes in any value
 * @return { String }: Function returns string describing type of given value
 */

function typeOf(val) {
    if (typeof val === 'string') {
        return 'string';
    } else if (typeof val === 'number') {
        return 'number';
    } else if (typeof val === 'boolean') {
        return 'boolean';
    } else if (typeof val === 'function') {
        return 'function';
    } else if (Array.isArray(val)) {
        return 'array';
    } else if (val === null) {
        return 'null';
    } else if (val === undefined) {
        return 'undefined';
    } else if (typeof val === 'object') {
        return 'object';
    }
}
module.exports.typeOf = typeOf;


/**
 * first: Designed to return the first element or elements in a given array
 * 
 * @param { Array }: Function takes in an array
 * @param { Number }: Function takes in a number
 * @return { Array }: Function returns first array element(s). If given number does not exist or is not a number, returns empty array
 */

function first(array, number) {
    if (Array.isArray(array) === false || number < 0) {
        return [];
    } if (number === undefined || typeof number !== 'number') {
        return array[0];
    } else if (number > array.length) {
        return array;
    } else {
        return array.slice(0, number);
    }
}
module.exports.first = first;


/**
 * last: Designed to return the last element or elements in a given array
 * 
 * @param { Array }: Function takes in an array
 * @param { Number }: Function takes in a number
 * @return { Array }: Function returns last array element(s). If given number does not exist or is not a number, returns empty array
 */

function last (array, number) {
    if (Array.isArray(array) === false || number < 0) {
        return [];
    } if (number === undefined || typeof number !== 'number') {
        return array[array.length - 1];
    } else if (number > array.length) {
        return array;
    } else {
        return array.slice(array.length - number, array.length);
    }
}
module.exports.last = last;


/**
 * indexOf: Designed to return the index of the given array that represents the first occurrence of the given value
 * 
 * @param { Array }: Function takes in an array
 * @param { Any value }: Function takes in any value
 * @return { Number }: Function returns number representing index that is the first occurrence of given value.
 * If given value does not exist within array, returns -1
 */

function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        } else if (!array.includes(value)) {
            return -1;
        }
    }
}
module.exports.indexOf = indexOf;


/**
 * contains: Designed to return true if given array contains given value. Otherwise, returns false.
 * 
 * @param { Array }: Function takes in an array
 * @param { Any value }: Function takes in any value
 * @return { Boolean }: Function returns true if array contains value, false if not
 */

function contains(array, value) {
    return (array.includes(value) ? true : false);
 }
 module.exports.contains = contains;


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection
 * 
 * @param {Array or Object} collection: The collection over which to iterate
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * unique: Designed to return an array with all duplicates removed
 * 
 * @param { Array }: Function takes in an array
 * @return { Array }: Function returns version of given array with all duplicates removed
 */

function unique(array) {
    let uniqueValues = [];
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) === i) {
            uniqueValues.push(array[i]);
        }
    }
    return uniqueValues;
}
module.exports.unique = unique;


/**
 * filter: Designed to return all elements for which a function call returned a true result
 * 
 * @param { Array }: Function takes in an array
 * @param { Function }: Function takes in a function
 * @return { Array }: Function returns array of elements for which function call returned true
 */

function filter(array, func) {
    let trueValues = []; // create holder array
    for (let i = 0; i < array.length; i++) { // loop thru input array
        if (func(array[i], i, array)) { // check if test function call resolves to true
            trueValues.push(array[i]); // if so, push value into holder array
        };
    }
    return trueValues; // return holder array
}
module.exports.filter = filter;


/**
 * reject: Designed to return all elements for which function call returned a false result
 * 
 * @param { Array }: Function takes in an array
 * @param { Function }: Function takes in a function
 * @return { Array }: Function returns an array of elements for which function call returned false
 */

function reject(array, func) { 
    let falseValues = [];
    for (let i = 0; i < array.length; i++) {
        if (!func(array[i], i, array)) {
            falseValues.push(array[i]);
        }
    }
    return falseValues;
}
module.exports.reject = reject;


/**
 * partition: Designed to run each element in a given array through a function and return an array of 2 sub-arrays: one for which the function call returned true, one for which the function call returned false
 * 
 * @param { Array }: Function takes in an array
 * @param { Function }: Function takes in a function
 * @return { Array }: Function returns array containing 2 sub-arrays
 */

function partition(array, func) {
    let truthy = [];
    let falsy = [];
    for (let i = 0; i < array.length; i++) {
        func(array[i], i, array) ? truthy.push(array[i]) : falsy.push(array[i])
    }
    return [truthy, falsy];
}
module.exports.partition = partition;


/**
 * map: Designed to pass each element from given array/object into a given function and return an array containing the results
 * 
 * @param { Array or Object }: Function takes in an array OR object
 * @param { Function }: Function takes in a function
 * @return { Array }: Function returns array containing results
 */

function map(collection, func) {
    let stuff = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            stuff.push(func(collection[i], i, collection));
        }
    } else {
        for (let key in collection) {
            stuff.push(func(collection[key], key, collection));
        }
    }
    return stuff;
}
module.exports.map = map;

/**
 * pluck: Designed to return an array containing the value of the given property for every element in the array
 * 
 * @param { Array }: Function takes in an array of objects
 * @param { Property }: Function takes in an object property
 * @return { Array }: Function returns array containing the value of input property for every object in input array
 */

function pluck(array, prop) { 
    let plucked = array.map(function(array) {
        return array[prop];
    });
    return plucked;
} 
module.exports.pluck = pluck;

/**
 * every: Designed to check each element of a collection and return a result of true if each value is truthy. If any elements are falsy, returns false.
 * 
 * @param { Array or Object }: Function takes in an array or an object
 * @param { Function }: Function takes in a function
 * @return { Boolean }: Function returns a boolean value indicating truthiness vs. falsiness of given values
 */

_.every = function(collection, func) {
    if (!func) {
        for (let i = 0; i < collection.length; i++) {
            if (!collection[i]) {
                return false;
            } else {
                return true;
            }
        }
    }
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (!func(collection[i], i, collection)) {
                return false;
            }
        } return true;
       } else {
        for (let key in collection) {
            if (!func(collection[key], key, collection)) {
                return false;
            };
        } return true;
       }
}
module.exports.every = every;

/**
 * some: Designed to check each element of a collection and return a result of true if at least one element is truthy. Otherwise, returns false.
 * 
 * @param { Array or Object }: Function takes in an array or an object
 * @param { Function }: Function takes in a function
 * @return { Boolean }: Function returns a boolean value indicating truthiness vs. falsiness of given values
 */

function some(collection, func) {
    if (!func) {
        for (let i = 0; i < collection.length; i++) {
            if (collection[i]) {
                return true;
            } else {
                return false;
            }
        }
    }
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (func(collection[i], i, collection)) {
                return true;
            }
        } return false;
       } else {
        for (let key in collection) {
            if (func(collection[key], key, collection)) {
                return true;
            } else {
                return false;
            }
        }
       }
}
module.exports.some = some;


/**
 * extend: Designed to copy properties from object(s) into another object
 * 
 * @param { Object }: Function takes in multiple objects
 * @return { Object }: Function returns a modified version of first given object
 */


function extend(object1, ...objects) {
    Object.assign(object1, ...objects);
    return object1;
}
module.exports.extend = extend;