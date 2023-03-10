// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// const { result } = require("lodash");

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function (val) {
    return val; // take in value and return it unchanged
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(val) {
    if (typeof val === 'string') { // check if type of input val is string
        return 'string'; // if so return string
    } else if (typeof val === 'number') { // check if type of val is number
        return 'number'; // if so return number
    } else if (typeof val === 'boolean') { // check if type of val is boolean
        return 'boolean'; // if so return boolean
    } else if (typeof val === 'function') { // check if type of val is function
        return 'function'; // if so return function
    } else if (Array.isArray(val)) { // check if type of val is array
        return 'array'; // if so return array
    } else if (val === null) { // check if val is null
        return 'null'; // if so return null
    } else if (val === undefined) { // check if val is undefined
        return 'undefined'; // if so return undefined
    } else if (typeof val === 'object') { // check if type of val is object
        return 'object'; // if so return object
    }
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) {
    if (Array.isArray(array) === false || number < 0) { // check if input array is not an array or input number is negative
        return []; // if so return empty array
    } if (number === undefined || typeof number !== 'number') { // check if number is not given or not a number
        return array[0]; // if so return only first element
    } else if (number > array.length) { // check if number is greater than length of array
        return array; // if so return entire array
    } else { // otherwise return the first [number] items of array
        return array.slice(0, number);
    }
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number) {
    if (Array.isArray(array) === false || number < 0) { // check if input array is not an array or input num is negative
        return []; // if so return empty array
    } if (number === undefined || typeof number !== 'number') { // check if input num is undefined or NaN
        return array[array.length - 1]; // if so return only last element in array
    } else if (number > array.length) { // check if number is greater than length of array
        return array; // if so return entire array
    } else { // otherwise return last [number] of items in array
        return array.slice(array.length - number, array.length);
    }
}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) {
    for (let i = 0; i < array.length; i++) { // loop thru input array
        if (array[i] === value) { // check if each element matches input value
            return i; // if so return its index
        } else if (!array.includes(value)) { // else if array does not include input value
            return -1; // return -1
        }
    }
}


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
   return (array.includes(value) ? true : false); // return true if array includes value, false if not
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) {
   if (Array.isArray(collection)) { // check if input collection is an array
    for (let i = 0; i < collection.length; i++) { // if so loop thru it
        func(collection[i], i, collection); // and call func for each element, its index, entire array
    }
   } else if (typeof collection === 'object') { // otherwise collection is an object
    for (let key in collection) { // loop thru obj
        func(collection[key], key, collection); // call func for each value, key, entire object
    }
   }
}



/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
    let uniqueValues = []; // create container array to push values into
    for (let i = 0; i < array.length; i++) { // loop thru input array
        if (array.indexOf(array[i]) === i) { // check if index of current element matches first occurrence
            uniqueValues.push(array[i]); // if so push element into array
        }
    }
    return uniqueValues; // return array
}


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/



_.filter = function(array, func) {
    let trueValues = []; // create holder array
    for (let i = 0; i < array.length; i++) { // loop thru input array
        if (func(array[i], i, array)) { // check if test function call resolves to true
            trueValues.push(array[i]); // if so, push value into holder array
        };
    }
    return trueValues; // return holder array
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/


_.reject = function(array, func) { 
    let falseValues = []; // create holder array
    for (let i = 0; i < array.length; i++) { // loop thru input array
        if (!func(array[i], i, array)) { // check if result of test is false
            falseValues.push(array[i]); // if so, push each value into holder array
        }
    }
    return falseValues; // return holder array
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/






_.partition = function(array, func) {
    let truthy = []; // create 2 holder arrays, 1 for truthy 1 for falsy
    let falsy = [];
    for (let i = 0; i < array.length; i++) { // loop thru input array
        func(array[i], i, array) ? truthy.push(array[i]) : falsy.push(array[i]) // call function for each element and push into different array depending on result
    }
    return [truthy, falsy]; // return holder arrays
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/



_.map = function(collection, func) {
    let stuff = []; // create holder array
    if (Array.isArray(collection)) { // check if input collection is an array
        for (let i = 0; i < collection.length; i++) { // if so, loop thru collection
            stuff.push(func(collection[i], i, collection)); // call function for each element in array and push result to holder array
        }
    } else { // if input collection is an object
        for (let key in collection) { // loop thru object
            stuff.push(func(collection[key], key, collection)); // call func for each element in array and push result to holder array
        }
    }
    return stuff; // return holder array
}


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


_.pluck = function(array, prop) { 
    let plucked = array.map(function(array) { // loop thru array of objects
        return array[prop]; // push value of input property into new array
    });
    return plucked; // return new array
} 



/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func) {
    if (!func) { // check if function was passed in
        for (let i = 0; i < collection.length; i++) { // if so loop thru collection
            if (!collection[i]) { // check if any given value is falsy
                return false; // if so return false
            } else { // else return true
                return true;
            }
        }
    }
    if (Array.isArray(collection)) { // check if collection is array
        for (let i = 0; i < collection.length; i++) { // if so loop thru array
            if (!func(collection[i], i, collection)) { // call function for each element/index/the entire array
                return false; // if result of calling function was false, return false
            }
        } return true; // otherwise return true
       } else { // else, collection is an object
        for (let key in collection) { // loop thru object
            if (!func(collection[key], key, collection)) { // call function for each value/key/the entire object
                return false; // if result of calling function was false, return false
            };
        } return true; // else return true
       }
}


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/









_.some = function(collection, func) {
    if (!func) { // if no function provided
        for (let i = 0; i < collection.length; i++) { // loop thru array
            if (collection[i]) {  // and return true if 1+ elems are truthy
                return true;
            } else { // otherwise return false
                return false;
            }
        }
    }
    if (Array.isArray(collection)) { // check if collection is array
        for (let i = 0; i < collection.length; i++) { // if so call func for every el, i, collection
            if (func(collection[i], i, collection)) {
                return true; // if 1+ result is truthy return true
            }
        } return false; // else return false
       } else { // else if collection is object
        for (let key in collection) { // call func for every value, key, collection
            if (func(collection[key], key, collection)) { // if return value is true for ANY element, return true
                return true;
            } else { // if false for ALL elements, return false
                return false; 
            }
        }
       }
}


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/




_.reduce = function(collection, func, seed) {
    let result; // create variable to hold result
    if (seed === undefined) { // check if seed was given
        result = collection[0]; // if so, set result to first element of collection
        for (let i = 1; i < collection.length; i++) { // loop thru collection
            result = func(result, collection[i], i, collection); // reassign result to the value of the function call
        }
    } else { // if seed was given,
        result = seed; // set starting count to value of seed
        for (let i = 0; i < collection.length; i++) { // loop thru collection
            result = func(result, collection[i], i, collection); // reassign result to the value of the function call
        }
    }
    return result; // return result
}


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(object1, ...objects) {
   return Object.assign(object1, ...objects); // use object.assign to copy properties from any number of input objs to object1. return result
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
