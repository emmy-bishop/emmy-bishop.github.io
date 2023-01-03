// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    // loop through numbers 1-100
    for (var i = 1; i <= 100; i++) {
        // check if given number is divisible by both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            // if so log FizzBuzz
          console.log('FizzBuzz');
        }
        // check if number is divisible by 3
        else if (i % 3 === 0) {
            // if so log Fizz
          console.log('Fizz');
        }
        // check if number is divisible by 5
         else if (i % 5 === 0) {
            // if so log Buzz
          console.log('Buzz');
        } // otherwise log number
         else {
          console.log(i);
        }
      }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}