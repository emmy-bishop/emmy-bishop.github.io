// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) { // create factory function
return { // return object
    id: id, // value of id field should equal input id
    nameFirst: nameFirst, // val of first name field should equal input first name
    nameLast: nameLast // val of last name field should equal input last name
};
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; // create array to hold contacts
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) { // create function to add input contact to contact list
            contacts.push(contact); // push input contact to contacts array
        },
        findContact: function(fullName) { // create function to find contact by full name
            for (var i = 0; i < contacts.length; i++) { // loop through contacts array
                if (fullName === contacts[i].nameFirst + ' ' + contacts[i].nameLast) { // check if input name equals any existing contacts
                    return contacts[i]; // if so return contact object
                } else { // else return undefined
                    return undefined;
                }
            }
        },
        removeContact: function(contact) { // create function to remove input contact
            for (var i = 0; i < contacts.length; i++) { // loop thru contacts array
                if (contact === contacts[i]) { // check if input contact equals any existing contacts
                    contacts.splice(contacts[i], 1); // if so remove contact
                }
            }
        },
        printAllContactNames: function printAllContactNames() { // create function to print all contact names
            var string = ''; // create string to hold contact names
            for (var i = 0; i < contacts.length; i++) { // loop thru contacts array
                if (i < contacts.length - 1) { // check if current name is at last index of array
                    string += contacts[i].nameFirst + ' ' + contacts[i].nameLast + '\n'; // if so add name to string followed by line break
                }
            } return string + contacts[contacts.length - 1].nameFirst + ' ' + contacts[contacts.length - 1].nameLast; // return string plus name at end of contacts w/ NO line break
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
