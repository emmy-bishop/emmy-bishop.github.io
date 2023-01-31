// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  let flattened = array.reduce((acc, curr) => { // create variable to hold result of reducing array
    return acc.concat(...curr); // return result of concatenating each element to the last
  })
  return flattened; // return flattened array
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(val, test, update, body) {
  if (test(val) === false) { // check if result of running value thru test function is false
    return; // if so, end
  }
  body(val); // otherwise pass value thru body function
  return loop(update(val), test, update, body); // and return result of invoking func on updated value, test func, update func, and body func
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  for (let element of array) { // loop thru input array
    if (!test(element)) { // if result of passing any one element thru test func evaluates to false,
      return false; // return false
    }
  }
  return true; // else return true
}


// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
  let ltr = 0; // establish variables to keep track of counts
  let rtl = 0;
  for (let i = 0; i < string.length; i++) { // loop thru input string
    let script = characterScript(string.charCodeAt(i)); // let script = object || null
    if (script !== null) { // if script is not null,
      script.direction === 'ltr' ? ltr++ : rtl++; // check if value of direction prop equals ltr, if so increment ltr variable, if not increment rtl variable
    }
  }
  if (ltr > rtl) { // check if value of ltr is greater than rtl
    return 'ltr'; // if so return ltr
  } else { // otherwise return rtl
    return 'rtl';
  }
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
