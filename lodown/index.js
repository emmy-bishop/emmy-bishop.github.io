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