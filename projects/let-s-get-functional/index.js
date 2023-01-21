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
    let youngestAge = 150;
    let youngestPerson = {};
    array.reduce((accumulator, current) => {
        if (current.age < youngestAge) {
            youngestAge = current.age;
            youngestPerson = current;
        }
        return accumulator;
    });
    return youngestPerson.name;
};

var averageBalance = function(array) {
  let mapped = array.map(function(customer) {
    return parseFloat(customer.balance.replace(/[$, \,]/g, ''));
  });
  console.log(mapped);
  let sum = 0;
  mapped.forEach(function(amount) {
    sum += amount;
  })
  return sum / mapped.length;
}

var firstLetterCount = function(array, letter) {
    let filtered = array.filter(function(customer) {
      return customer.name[0].toLowerCase() === letter.toLowerCase();
    });
    return filtered.length;
  };

var friendFirstLetterCount = function(array, customer, letter) {
    let matches = 0;
     array.forEach(function(element) {
       if (element.name === customer) {
      element.friends.forEach(function(friend) {
        return friend.name[0].toLowerCase() === letter.toLowerCase() ? matches++ : matches += 0
      })
     }
    })
    return matches;
  };

var friendsCount = function(array, name) {
    let matches = [];
    array.forEach(function(person) {
      person.friends.forEach(function(friend) {
        if (friend.name.toLowerCase() === name.toLowerCase()) {
          matches.push(person.name);
        }
      })
    })
    return matches;
  };

var topThreeTags;

var genderCount;

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
