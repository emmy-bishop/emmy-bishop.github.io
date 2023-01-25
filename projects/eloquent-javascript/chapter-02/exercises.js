
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

function drawChessboard(rows) {
  var evenLines = 0;
  var oddLines = 1;
      for (var j = 0; j < rows; j++) {
        if (evenLines % 2 !== 0) {
          evenLines++;
        } else {
          oddLines++;
        }
      if ((oddLines + evenLines) % 2 !== 0) {
        console.log('# # # # \n');
      } else if ((oddLines + evenLines) % 2 === 0) {
        console.log(' # # # # \n');
  }
 }
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
