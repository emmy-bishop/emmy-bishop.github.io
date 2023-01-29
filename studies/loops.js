/**
 * LOOPS:
 * 
 * 0: In programming, it is often necessary to repeat some action over and over.
 * An easy way to accomplish this is with the use of a loop.
 * 
 * 1: While, For, and For-In Loops: While loops will execute their code as long as a specified condition is true.
 * In contrast, for loops execute their code as long as a specified condition is false.
 * Finally, for-in loops are used to access and manipulate objects.
 * 
 * 2: Loop Any Number of Times: By changing the way a loop is set up, it is possible to loop any number of times and in either direction (forward or backward).
 * 
 * 3: Loop Over an Array: The for loop is the most common choice when looping over an array.
 * 
 * 4: Loop Over an Object: The for-in loop is the most common choice when looping over an object.
 */

// 1 While, For, and For-In Loops //

// 1. While Loop
// While loops continue to execute the defined code as long as a certain condition remains true
// Typically used when it is unknown how many times a loop will need to repeat
let hour = 6; // establishes hour variable
while (hour < 8) { // loops while hour is less than 8
    console.log(`It is ${hour} and I am a sleepy little guy`); // executes while hour is 6 or 7
    hour++; // increments counter at each iteration
} // prints => It is 6 and I am a sleepy little guy 
  //           It is 7 and I am a sleepy little guy

// 2. For Loop
// For loops continue to execute the defined code as long as a certain condition remains false
// Typically used to iterate over arrays
let seattlePosse = ['Frasier', 'Niles', 'Martin', 'Daphne', 'Roz']; // creates array
for (let i = 0; i < seattlePosse.length; i++) { // loops through array
    if (seattlePosse[i] === 'Eddie') { // checks if each element is equal to Eddie
        console.log('Good boy'); // this code will not run
    }
    else { 
        console.log('All humans here'); // this code will run
    }
} // prints => 'All humans here'
// Above, we use a for loop to iterate through the given array under the following conditions:
// let i = 0 to start at the first element (index 0),
// i < seattlePosse.length to continue while the current index is less than the length of the entire array,
// i++ to access one element at a time
// The code under the else statement ran because we chose to loop through the whole array, each time evaluating a condition that ended up resolving to false



 

