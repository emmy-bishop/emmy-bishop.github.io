// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  if (n < 0) { // check if n is less than 0 
    return null; // if so return null
  }
  if (n === 0 || n === 1) { // check if n is 0 or 1
    return 1; // if so return 1
  }
  return n * factorial(n - 1); // otherwise return product of n and the result of passing n - 1 thru function again
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  if (array.length === 1) { // if array only has one element left,
    return array[0]; // return that element
  } else if (array.length === 0) { // else if it's empty,
    return 0; // return 0
  }
  return array[0] + sum(array.slice(1)); // otherwise return sum of current array element plus result of passing rest of array thru function again
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (array.length === 1) { // check if array length is 1
    return array[0]; // if so return value in array
  }
  return array[0] + arraySum(array.slice(1)); // otherwise return value in array plus result of invoking func on rest of array
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0) { // check if n is 0
    return true; // if so return true
  } else if (n === 1) { // check if n is 1
    return false; // if so return false
  } if (n < 0) { // check if n is negative
    return isEven(n + 2); // if so return result of calling func w/ argument of n + 2
  }
  return isEven(n - 2); // otherwise return result of calling func w/ argument of n - 2 (b/c starting val was positive)
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0) { // check if n is 0
    return 0; // if so return 0
  } else if (n > 0) { // check if n is greater than 0
    n--; // if so subtract 1 from n
    return n + sumBelow(n); // and return sum of new value of n plus result of invoking func on n
  } else { // else n is negative
    n++; // if so add 1 to n
    return n + sumBelow(n); // and return sum of new value of n plus result of invoking func on n
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = (x, y, output = []) => {
  if (x === y) { // check if x is equal to y
    return output; // if so return output array
  } 
  if (x === y - 1) { // check if x is almost equal to y (in order to exclude starting/ending values)
    return output; // if so return output array
  } 
  if (y === x - 1) { // check if y is almost equal to x
    return output; // if so return output array
  }
  if (x < y) { // check if x is less than y
    x++; // if so increment x
    output.push(x); // then push x into output array
    return range(x, y, output); // return result of calling function again
  }
  if (y < x) { // check if y is less than x
    x--; // if so decrement x
    output.push(x); // then push x into output array
    return range(x, y, output); // return result of calling function again
  }
}
  

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) { // check if exp is 0
    return 1; // if so return 1
  } 
  if (exp > 0) { // check if exp is positive
    return base * exponent(base, exp - 1); // if so return base multiplied by result of calling func w/ args of base, exp - 1
  }
  if (exp < 0) { // check if exp is negative
    return 1 / exponent(base, -exp); // if so return inverse of result of calling func w/ args of base and negative exp
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) { // check if n equals 1, meaning the number given IS a power of 2
    return true; // if so return true
  } 
  if (n === 0) { // check if n equals 0, meaning the number given IS NOT a power of 2
    return false; // if so return false
  }
  return powerOfTwo(n / 2); // else return result of calling func w/ arg of n divided by 2
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  if (string.length === 1) { // check if string length is 1 meaning we're down to the last letter in string
    return string[string.length - 1]; // if so return that letter
  }
  return string[string.length - 1] + reverse(string.slice(0, string.length - 1)); // else return last letter of string plus result of invoking func on rest of string
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string, newString = string.toLowerCase().replaceAll(' ', '')) { // create function with default parameter of newString, which is given string with no capital letters and all spaces removed
  if (newString.length === 0) { // check if length of string is 0 meaning it is indeed a palindrome
    return true; // if so return true
  }
  if (newString[0] === newString[newString.length - 1]) { // check if first and last letter of string equal each other
    return palindrome(newString.slice(1, newString.length - 1)); // if so return result of invoking func on rest of string
  }
    return false; // otherwise return false
  }


// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
// check if x or y is 0
// if so product will be 0, so return 0
// check if x is positive
// if so return result of adding y plus invoking function with x decremented
// check if x is negative
// if so return negative result of invoking function with x decremented

var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }
  if (x > 0) {
    return y + multiply(x - 1, y);
  }
  if (x < 0) {
    return -multiply(-x, y);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {

};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length === 0) { // check if both strings have zero length meaning all letters matched
    return true; // if so return true
  }
  if (str1[0] === str2[0]) { // check if each letter in string1 matches each letter in string2
    return compareStr(str1.slice(1), str2.slice(1)); // if so return result of calling func on rest of strings
  }
  return false; // if entire function was enacted and conditions were not met, that means strings were not identical so return false
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, output = []){
  if (str.length === 0) { // check if entire string has been added
    return output; // if so return output array
  }
  output.push(str[0]); // push each letter into array
  return createArray(str.slice(1), output); // return result of invoking func on rest of string
};

// 17. Reverse the order of an array
var reverseArr = function (array, output = []) {
  if (array.length === 0) { // check if array length is 0
    return output; // if so return output
  }
  output.push(array[array.length - 1]); // push each last value into output array
  return reverseArr(array.slice(0, array.length - 1), output); // return result of calling func again on rest of array
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, output = []) {
  if (length === 0) { // check if length is 0 
    return output; // if so return output
  }
  output.push(value); // push each value into output array
  length--; // decrement length variable
  return buildList(value, length, output); // return result of calling func again
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, output = []) {
  if (array.length === 0) { // check if array length is zero 
    return output.length; // if so return length of output array
  }
  if (array[0] === value) { // check if each value in given array matches given value
    output.push(array[0]); // if so push value into output
  }
  return countOccurrence(array.slice(1), value, output); // and return result of calling func again on rest of array
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output = []) {
  if (array.length === 0) { // check if array length is 0
    return output; // if so return output array
  }
  output.push(callback(array[0])); // push result of invoking callback func on each item in array to output
  return rMap(array.slice(1), callback, output); // return result of calling func on rest of array
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {

};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {

};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n, output = [0, 1]) {
  if (n < 0) { // check if n is negative
    return null; // if so return null
  }
  if (n === 0) { // check if n is 0
    return output[0]; // if so return first item in output array
  }
  output.push(output[0] + output[1]); // push sum of first and second items in output array to output array
  return nthFibo(n - 1, output.slice(1)); // return result of calling func on decremented n and rest of array
}

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, output = []) {
  if (input.length === 0) { // check if length of input array is 0 
    return output; // if so return output
  }
  output.push(input[0].toUpperCase()); // push each capitalized word into output array
  return capitalizeWords(input.slice(1), output); // return result of calling func on rest of array
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, output = []) {
  if (array.length === 0) { // check if input array length is 0
    return output; // if so return output
  }
  output.push(array[0].toUpperCase().slice(0, 1) + array[0].slice(1)); // push each word to output array w/ only first letter capitalized
  return capitalizeFirst(array.slice(1), output); // return result of calling func on rest of input array
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  if (str.length === 0) { // check if string length is 0
    return obj; // if so return obj
  }
  if (!obj[str[0]]) { // check if obj property already exists
    obj[str[0]] = 1; // if not establish it and set value to 1
  } else { // otherwise add 1 to count for each instance of letter
    obj[str[0]]++;
  }
  return letterTally(str.slice(1), obj); // return result of invoking func on rest of string
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, output = []) {
  if (list.length === 0) { // check if length of list has reached 0
    return output; // if so return output
  }
  if (list[0] === list[1]) { // check if first element in list equals second element
    list.slice(1); // if so remove first element
  } else { // otherwise push it to output array
  output.push(list[0]);
  }
  return compress(list.slice(1), output); // return result of invoking func on rest of array
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, output = []) {
  if (array.length === 0) { // check if array length is 0
    return output; // if so return output
  }
  if (array[0] === array[1] && array[0] === 0 && array[1] === 0) { // check if first element in array matches second element in array, also check if both are 0
    array.slice(1); // if so remove first zero
  } else { // otherwise push first element into output array
    output.push(array[0]);
  }
  return minimizeZeroes(array.slice(1), output); // return result of invoking func on rest of array
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, output = []) {
  if (array.length === 0) { // check if array length is 0
    return output; // if so return output
  }
  if (array[0] >= 0) { // check if first element in array is positive
    output.push(array[0]); // if so push into output array
  } else { // else if element is negative, make it positive, 
    output.push(-array[0]); // then push into output array
  }
  if (array[1] >= 0) { // check if second element in array is positive
    output.push(-array[1]); // if so make it negative and push into output array
  } else { // else if element is positive,
    output.push(array[1]); // push into output array
  }
  return alternateSign(array.slice(2), output); // return result of invoking func on rest of array
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
