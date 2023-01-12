////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) { // create function to compare two numbers
  if (num1 > num2) { // check if first num is larger than second num
    return num2; // if so return second num
  } else if (num2 > num1) { // check if second num is larger than first num
    return num1; // if so return first num
  } else { // if nums are the same just return first num
    return num1;
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) { // create function that takes in a number
  if (num === 0) { // check if num is already 0 or if result of num % 2 equals 0 (meaning num is even)
    return true; // if so return true
  } else if (num === 1 || num === -1) { // check if num is already 1 or -1 or if result of num % 2 equals 1/-1 (meaning num is odd)
    return false; // if so return false
  } return isEven(num % 2); // find result of num % 2
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, x) { // create function that takes in a string and a char
  let count = 0; // establish counter to hold instances of char
  let holder = string.split(''); // split string into array where each letter is one element
  for (let i = 0; i < holder.length; i++) { // loop thru array
    if (holder[i] === x) { // check if each letter equals input char
      count++; // if so increment count
    }
  }
  return count; // return count
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  let count = 0; // establish count to keep track of # of Bs
  let holder = string.split(""); // split string into array where each letter is an element
  for (let i = 0; i < holder.length; i++) { // loop thru array
    if (holder[i] === 'B') { // if letter is uppercase B, increment count
      count++;
    }
  } 
  return count; // return count
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
