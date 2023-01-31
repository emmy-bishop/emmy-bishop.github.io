
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(rows) {
  var count = ''; // establish variable to hold string
  for (var i = 0; i < rows; i++) { // loop for given number of rows
    count += '#'; // add hashtag to variable at each iteration
    console.log(count); // console log result
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for (var i = 1; i <= 15; i++) { // loop to print numbers 1-15
    if (i % 3 === 0 && i % 5 === 0) { // check if num is divisible by 3 and 5
      console.log('fizzbuzz'); // if so print fizzbuzz
    } else if (i % 3 === 0) { // check if num is divisible by 3
      console.log('fizz'); // if so print fizz
    } else if (i % 5 === 0) { // check if num is divisible by 5
      console.log('buzz'); // if so print buzz
    } else { // else print num
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(input) {
  let board = ''; // establish empty string to hold board
  for (let i = 0; i < input; i++) { // loop to create rows
    for (let j = 0; j < input; j++) { // loop to create columns
      if ((i + j) % 2 === 0) { // check if sum of current indexes is even
        board += ' '; // if so add space to board
      } else { // if sum is odd,
        board += '#'; // add # to board                            
      }
    }
    board += '\n'; // at end of each row, add new line
  } 
  console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
