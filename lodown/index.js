'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Returns input value unchanged.
 * 
 * @param { Any value }: Function takes in any value
 * @return { Any value }: Function returns input value unchanged
 */

function identity(val) {
    return val;
}
module.exports.identity = identity;

/**
 * typeOf: Returns type of input value.
 * 
 * @param { Any value }: Function takes in any value
 * @return { String }: Function returns string describing type of input value
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
 * first: Returns first element or elements in array
 * 
 * @param { Array }: Function takes in an array
 * @param { Number }: Function takes in a number
 * @return { Array }: Function returns empty array if input array is not an array OR first array element OR specified range of elements
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
 * last: Returns last element or elements in array
 * 
 * @param { Array }: Function takes in an array
 * @param { Number }: Function takes in a number
 * @return { Array }: Function returns empty array if input array is not an array.
 * If number is not given or not a number, returns only the last element.
 * Otherwise, returns last x number of items in array.
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
 * indexOf: Returns index of array that is the first occurrence of given value. If value does not exist in array, returns -1.
 * 
 * @param { Array }: Function takes in an array
 * @param { Any value }: Function takes in any value
 * @return { Number }: Function returns number representing index that is the first occurrence of given value.
 * If given value does not exist within array, returns -1.
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
 * contains: Returns true if given array contains given value. Otherwise, returns false.
 * 
 * @param { Array }: Function takes in an array
 * @param { Any value }: Function takes in any value
 * @return { Boolean }: Function returns true if array contains value and false if not.
 */

function contains(array, value) {
    return (array.includes(value) ? true : false);
 }
 module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
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
 * unique: Returns an array with all duplicates removed
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
 * filter: Returns array of elements for which function call returned true
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
 * reject: Returns elements for which function call returned false
 * 
 * @param { Array }: Function takes in an array
 * @param { Function }: Function takes in a function
 * @return { Array }: Function returns an array of elements for which function call returned false
 */

function reject(array, func) { 
    let falseValues = []; // create holder array
    for (let i = 0; i < array.length; i++) { // loop thru input array
        if (!func(array[i], i, array)) { // check if result of test is false
            falseValues.push(array[i]); // if so, push each value into holder array
        }
    }
    return falseValues; // return holder array
}
module.exports.reject = reject;

/**
 * partition: Function passes each element in array and runs it through another function. Returns an array of 2 arrays representing truthy vs. falsy values.
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
 * map: Passes each element from given array/object into given function and returns array containing results
 * 
 * @param { Array }: Function takes in an array OR
 * @param { Object }: Function takes in an object
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