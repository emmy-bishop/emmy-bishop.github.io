/**
 * CONTROL FLOW:
 * 
 * 0: Control flow is the order by which the JavaScript interpreter parses code.
 * In general, code is interpreted from top to bottom.
 * However, certain factors can change the order in which code is read.
 * 
 * 1: If Statements: If statements delineate an action or actions to be performed IF the given statement evaluates to true.
 * 
 * 2: Else-if Statements: Delineate alternate action(s) to be performed only IF the first statement evaluates to false.
 * 
 * 3: Else Statements: Delineate actions to be performed only IF each and every preceding statement evaluates to false.
 * 
 * 4: Switch Statements: Delineate several possible actions to be executed depending on different conditions.
 */

// 1 If Statements //
// Will evaluate a given condition and, if the condition is true, enact the subsequent code
if (9001 > 9000) { // evaluates to true
    console.log('Um, of course it is?');
} // prints => Um, of course it is?

// 2 Else-if Statements //
// Must be chained to an if statement
if (true === false) { // evaluates to false
    console.log('Wait, what?');
} else if (true === true) { // evaluates to true
    console.log('Whew! That seems correct');
} // prints => Whew! That seems correct

// 3 Else Statements //
// Must be used after an if statement or an if/else-if chain
if (weather === 'sunny') { // evaluates to false
    console.log('It is a beautiful day to make some small talk about the weather');
} else if (weather === 'foggy') { // also evaluates to false
    console.log('Hoo boy, we got a fog advisory on our hands');
} else { // therefore, this code block will run
    console.log('I do not know what the weather is like today. Ever try googling it yourself?')
} // prints => 'I do not know what the weather is like today. Every try googling it yourself?

// 4 Switch Statements //
// Evaluated only once
// Will enact a different code block depending on the result of that evaluation
// Must include break statements, which allow the code to stop running when a condition is met
// May include an optional default condition
const middleName = 'something embarrassing';
switch (middleName) {
    case 'Rose': // checks if middle name is Rose
        console.log('That is a pretty common one'); // does not execute
        break;
    case 'Patrick': // checks if middle name is Patrick
        console.log('What up, St. Pat?'); // does not execute
        break;
    case 'Geoffrey': // checks if middle name is Geoffrey
        console.log('May I call you Geoff?'); // does not execute
        break;
    case 'something embarrassing': // checks if middle name is something embarrassing
        console.log('Oof, better hide that birth certificate'); // does execute
        break;
    default: // delineates default condition
        console.log('That sure is a name'); // only runs if all other statements are false
} // prints => 'Oof, better hide that birth certificate!'



