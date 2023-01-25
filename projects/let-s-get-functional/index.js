// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./emmy-bishop.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let males = _.filter(array, function(customer) { // create variable to hold array of male customer objs
        return customer.gender === 'male' // use filter to push all male customer objs to array
    })
    return males.length; // return length of array
}

var femaleCount = function(array) {
    let females = _.reduce(array, function(accumulator, current) { // create variable to hold # of female customers
        if (current.gender === 'female') { // check if gender in given obj is female
            return accumulator += 1; // if so add 1 to female count
        } else { // else don't change count
            return accumulator;
        }
    }, 0);
    return females; // return female count
};

var oldestCustomer = function(array) {
    let oldestAge = 0; // establish variable to track age
    let oldestPerson = {}; // create empty obj to populate with oldest person once found
    array.reduce((accumulator, current) => { // use reduce method on array of customer objs
        if (current.age > oldestAge) { // check if age on current obj is greater than age tracker variable
            oldestAge = current.age; // if so, change age tracker variable to value of that age
            oldestPerson = current; // and populate obj with info from the person's customer obj
        }
        return accumulator; // return accumulator
    });
    return oldestPerson.name; // return name of oldest customer
};

var youngestCustomer = function(array) {
    let youngestAge = 150; // establish variable to track age
    let youngestPerson = {}; // create empty obj to populate w/ youngest person's info
    array.reduce((accumulator, current) => { // use reduce on array of customer objs
        if (current.age < youngestAge) { // check if current customer's age is less than current value of age tracker variable
            youngestAge = current.age; // if so, change age tracker variable to value of that age
            youngestPerson = current; // and populate obj w/ info from the person's customer obj
        }
        return accumulator; // return accumulator
    });
    return youngestPerson.name; // return name of youngest customer
};

var averageBalance = function(array) {
  let mapped = array.map(function(customer) { // map thru given array
    return parseFloat(customer.balance.replace(/[$, \,]/g, '')); // push each customer balance into new array after removing special characters and converting from string to number
  });
  let sum = 0; // establish sum variable
  mapped.forEach(function(amount) { // use foreach on new array
    sum += amount; // add balance to sum variable
  })
  return sum / mapped.length; // return average of all balances
}

var firstLetterCount = function(array, letter) {
    let filtered = array.filter(function(customer) { // filter given array
      return customer.name[0].toLowerCase() === letter.toLowerCase(); // push names of customers that start with given letter to new array
    });
    return filtered.length; // return number of entries in array
  };

var friendFirstLetterCount = function(array, customer, letter) {
    let matches = 0; // establish variable to keep track of matches found
     array.forEach(function(element) { // call function on each element in given array
       if (element.name === customer) { // check if name in obj matches given customer name
        element.friends.forEach(function(friend) { // call function on each friend
        return friend.name[0].toLowerCase() === letter.toLowerCase() ? matches++ : matches += 0 // add to matches variable if match is found
      })
     }
    })
    return matches; // return number of matches found
  };

var friendsCount = function(array, name) {
  let matches = []; // create matches array
  array.forEach(function(customer) { // call function on each person in given array
    customer.friends.forEach(function(friend) { // call function on each friend 
      if (friend.name === name) { // check if friend name equals input name
        matches.push(customer.name); // if so push customer name into matches array
      }
    })
  })
  return matches; // return matches
}

var topThreeTags = function(array) {
  let tagArray = []; // create array to hold all tags
  array.forEach(function(customer) { // call function once for each customer obj
    customer.tags.reduce(function(accumulator, tag) { // use reduce to push tags into array
      tagArray.push(tag);
    }, 0)
  })
  let counts = tagArray.reduce(function(obj, tag) { // create object to keep track of number of times each tag occurs
    return obj[tag] ? obj[tag]++ : obj[tag] = 1, obj; // check if tag already exists within object, if so add 1 to its value, if not initialize it w/ value of 1. return accumulator
  }, {});
  let maxCount = Math.max(...Object.values(counts)); // create maxcount variable and set it to the maximum value contained within object
  let mostCommon = Object.keys(counts).filter(function(el) { // create mostcommon variable, populate it with keys from object, and filter through those keys
    return counts[el] === maxCount; // populate array with only the keys whose values resolve to maxcount, which is 3
  })
  return mostCommon; // return array containing the most common tags
};

var genderCount = function(array) {
  let allGens = []; // create array to hold customer genders
  array.forEach(function(customer) { // call function on each item in input array
    return customer.gender ? allGens.push(customer.gender) : null; // if customer gender exists, push it to gender array
  })
  let reduced = allGens.reduce(function(accumulator, gender) { // use reduce on gender array
    accumulator[gender] ? accumulator[gender]++ : accumulator[gender] = 1; // change or establish gender count for each gender
    return accumulator; // return object with gender stats
  }, {})
  return reduced; // return object with gender stats
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
