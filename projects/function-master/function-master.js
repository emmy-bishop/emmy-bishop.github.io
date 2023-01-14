//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) { // create function that will take in object
    let valuesArray = []; // create array to hold input obj's values
    for (let key in object) { // loop thru object
        valuesArray.push(object[key]); // push values into array
    } return valuesArray; // return array
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) { // create function to take in object
    let holder = Object.keys(object); // create array of object's keys
    let separated = holder.join(' '); // use join to convert array into string w/ each key separated by space
    return separated; // return string
  }

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) { // create function to take in obj
    let holder = []; // create array to contain obj values
    for (let key in object) { // loop thru obj
      if (typeof object[key] === 'string') { // check if value is a string
        holder.push(object[key]); // if so push into holder array
      }
    } let string = holder.join(' '); // join holder array into string separated by spaces
    return string; // return string
  }

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) { // create function which takes in a collection
    if (Array.isArray(collection) === true) { // check if collection is an array
        return 'array'; // if so return array
    }
    else if (typeof collection === 'object') { // check if collection is an obj
        return 'object'; // if so return object
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) { // create func to take in string
    let capitalizedString = string[0].toUpperCase(); // create holder w/ value of first letter of string set to all caps
    for (let i = 1; i < string.length; i++) { // loop thru rest of string (not incl. first letter)
        capitalizedString += string[i]; // add each letter to string
    } return capitalizedString; // return string
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) { // create func to take in string
    let splitString = string.split(' '); // split string into array at each space
    let array = []; // create holder array
    for (let i = 0; i < splitString.length; i++) { // loop thru split string
      array.push(splitString[i][0].toUpperCase() + 
      splitString[i].slice(1)); // push capitalized 1st letter plus rest of word into array
    } return array.join(' '); // join array to form string with each word separated by a space. return string
  }

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    for (var key in object) { // loop thru object
    return 'Welcome ' + object.name[0].toUpperCase() + object.name.slice(1) + '!'; // return formatted string
}
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    for (var key in object) { // loop thru object
        return object.name[0].toUpperCase() + 
        object.name.slice(1) + 
        ' is a ' + object.species[0].toUpperCase() 
        + object.species.slice(1); // return formatted string
    }
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
        if (!object.noises) { // check if noises property exists
            return 'there are no noises' // if not, return 'there are no noises'
        }
        else if (object.noises.length > 0) { // check if noises array has any noises
            return object.noises.join(' '); // if so, return as a string with each noise separated by a space
        } else if (object.hasOwnProperty('noises') === true && object.noises.length === 0) { // check if noises array exists but is empty
            return 'there are no noises'; // if so, return 'there are no noises'
        } 
    }

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var splitString = string.split(' '); // split string into array w/ each element being one word
    var matchFound = false; // create flag variable to keep track of whether match has been found
    for (var i = 0; i < splitString.length; i++) { // loop thru array of words
        if (splitString[i] === word) { // check if input word matches word in array
            matchFound = true; // if so change value of flag variable
        }
    } if (matchFound === true) { // if match has been found,
        return true; // return true
    } else { // if no match return false
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
object.friends.push(name); // add input name to friends property
return object; // return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    var matchFound = false; // establish flag variable to track whether match has been found

    if (!object.friends) { // check if friends property exists
        return false; // if not return false
    }

    for (var i = 0; i < object.friends.length; i++) { // loop thru object's friends property
        if (object.friends[i] === name) { // check if friend's name matches input name
            matchFound = true; // if so change flag to true
        }
    } 
    
    if (matchFound === true) { // if match has been found, return true
        return true;
    } else { // else return false
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var nonMatching = []; // create array to hold names of people
    for (var i = 0; i < array.length; i++) { // loop thru input array
      if (array[i].name !== name && array[i].friends.includes(name) === false) { // check if name is NOT listed in array
        nonMatching.push(array[i].name); // if name is not there, push name into holder array
      }
    } 
    return nonMatching; // return holder array
}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
        object[key] = value; // assign object key to input value
        return object; // return object
    } 




//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var key in object) { // loop thru object
      for (var i = 0; i < array.length; i++) { // loop thru array of strings
        if (key === array[i]) { // check if object key equals any values listed in array
          delete object[key]; // if so delete property
        }
      }
    }
  }

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    let uniques = []; // create array to hold numbers
    for (var i = 0; i < array.length; i++) { // loop thru input array
        if (!uniques.includes(array[i])) { // check if holder array does not already include each array element
            uniques.push(array[i]); // if value does not already exist in holder array, push it to holder array
        }
    } return uniques; // return holder array
} 


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}