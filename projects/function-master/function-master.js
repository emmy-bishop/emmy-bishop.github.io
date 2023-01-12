//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var valuesArray = [];
for (var key in object) {
    valuesArray.push(object[key]);
}
return valuesArray;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var array = [];
    for (var key in object) {
        array.push(key);
    }
    var string = array.join(' ');
    return string;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var array = [];
    for (var key in object) {
        if (typeof object[key] === 'string') {
            array.push(object[key]);
        } 
    } var string = array.join(' ');
    return string;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection) === true) {
        return 'array';
    }
    else if (typeof collection === 'object') {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var firstLetter = string[0].toUpperCase();
    for (var i = 1; i < string.length; i++) {
        firstLetter += string[i];
    } return firstLetter;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var splitString = string.split(' ');
    var array = [];
    for (var i = 0; i < splitString.length; i++) {
      array.push(splitString[i][0].toUpperCase() + 
      splitString[i].slice(1));
    } return array.join(' ');
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

// function dedup(array) {
//     let uniques = array;
//     for (var i = 0; i < array.length; i++) {
//         for (var j = 0; j < uniques.length; j++) {
//             if (i === j) {
//                 uniques.push(i);
//             }
//         }
//     }
// } 


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