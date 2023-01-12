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
    for (var key in object) {
    return 'Welcome ' + object.name[0].toUpperCase() + object.name.slice(1) + '!';
}
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    for (var key in object) {
        return object.name[0].toUpperCase() + 
        object.name.slice(1) + 
        ' is a ' + object.species[0].toUpperCase() 
        + object.species.slice(1);
    }
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
        if (!object.noises) {
            return 'there are no noises'
        }
        else if (object.noises.length > 0) {
            return object.noises.join(' ');
        } else if (object.hasOwnProperty('noises') === true && object.noises.length === 0) {
            return 'there are no noises';
        } 
    }

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var splitString = string.split(' ');
    var matchFound = false;
    for (var i = 0; i < splitString.length; i++) {
        if (splitString[i] === word) {
            matchFound = true;
        }
    } if (matchFound === true) {
        return true;
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    var matchFound = false;

    if (!object.friends) {
        return false;
    }

    for (var i = 0; i < object.friends.length; i++) {
        if (object.friends[i] === name) {
            matchFound = true;
        }
    } 
    
    if (matchFound === true) {
        return true;
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var nonMatching = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i].name !== name && array[i].friends.includes(name) === false) {
        nonMatching.push(array[i].name);
      }
    } 
    return nonMatching;
}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
        object[key] = value;
        return object;
    } 




//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var key in object) {
      for (var i = 0; i < array.length; i++) {
        if (key === array[i]) {
          delete object[key];
        }
      }
    }
  }

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    let uniques = [];
    for (var i = 0; i < array.length; i++) {
        if (!uniques.includes(array[i])) {
            uniques.push(array[i]);
        }
    } return uniques;
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