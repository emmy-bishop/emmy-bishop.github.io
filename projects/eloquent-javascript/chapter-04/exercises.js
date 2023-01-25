////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// create array to populate with numbers
// set base case to start === end
// call function again with args of start + step, end, step


function range(start, end, step = 1) {
  let numbers = []; // create array to hold range
  if (start === end) { // check if start is already equal to end
    return numbers; // if so return empty array
  }
  if (step >= 0) { // check if step is 0 or greater
    for (let i = start; i <= end; i += step) { // if so loop thru numbers incrementing by step each time
      numbers.push(i); // push each value into array
    }
  } else if (step < 0) { // check if step is negative
    return numbers; // if so return empty array
  }
  return numbers; // return array populated with range
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
  if (arr.length === 0) { // check if array is empty
    return 0; // if so return 0
  }
  if (arr.length === 1) { // check if array has one element left
    return arr[0]; // if so return that element
  }
  return arr[0] + sum(arr.slice(1)); // otherwise return sum of current element plus result of invoking function on rest of array
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
  let reversed = []; // create holder array
  for (let i = arr.length - 1; i >= 0; i--) { // loop thru array in reverse
    reversed.push(arr[i]); // push each value to holder
  }
  return reversed; // return holder
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length; i++) { // loop thru array
   arr.splice(i, 0, arr.pop()); // set current val of i to last element in array on each iteration
  }
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////



function arrayToList(array) {
  let rest = null; // set initial value of list to null
  for (let i = array.length - 1; i >= 0; i--) { // loop thru array backwards
  rest = { value: array[i], rest: rest }; // at each iteration, set list equal to an object w/ value equal to current element in given array and rest equal to new value of list
  }
  return rest; // return list of objects
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(obj, output = []) {
  if (obj.rest === null) { // check if obj's rest property is null
    output.push(obj.value); // if so push obj value into output array
    return output; // and return output
  }
  output.push(obj.value); // otherwise push value into output array
  return listToArray(obj.rest, output); // and return result of calling func again
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(obj, value) {
  
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
