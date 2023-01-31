/**
 * FUNCTIONS:
 * 
 * 0: In JavaScript, a function is a reusable block of code designed to perform a specialized task.
 * After a function is declared, it can be called, or invoked, at any point to execute its code.
 * Using functions makes it possible to streamline tasks that might otherwise be menial or repetitive.
 * 
 * 1: Declaration vs. Invocation: A function declaration gives a function a name and defines the actions it should execute.
 * Post-declaration, any time we need to use a function, we invoke it.
 * 
 * 2: Parameters vs. Arguments: Parameters are defined in function declarations and act as placeholders for values that will be passed in.
 * Arguments are defined at the time of the function invocation and represent the actual values to be used by the function.
 * 
 * 3: Named Function Syntax: Most functions are declared with names, and this must be done in a specific way.
 * 
 * 4: Functions Assigned to Variables: Functions are allowed to be nameless when assigned to variables.
 * To invoke a function assigned to a variable, we refer to the name of the variable.
 * 
 * 5: Specifying Inputs and Outputs: Functions often take inputs, but do not necessarily need to do so.
 * The same is true for outputs--some functions perform a task without producing any output.
 * 
 * 6: Scope: Functions can see and modify variables within the global or parent scope.
 * The reverse is not true.
 * 
 * 7: Closures: A closure is when a function retains access to a variable or variables declared within a parent function.
 */

// 1 Declaration vs. Invocation //

// 1. Declaration
// When a function is declared, it must have a name
// It can also accept one or more parameters, if needed
// These parameters represent the input that will be passed in as part of future function calls
function hmmmm(dinnerIdea) { // declares function named hmmmm, which takes in a parameter of dinnerIdea
    console.log(`Ehhhhh, not sure I'm feeling ${dinnerIdea} tonight`);
}

// 2. Invocation
// To call upon our function, we refer to its name and pass in an argument
// The argument is the actual value with which the function will work
hmmmm('Italian'); // prints => Ehhhhh, not sure I'm feeling Italian tonight

// 4 Functions Assigned to Variables //

// Functions can be nameless when assigned to a named variable
// A function defined in this manner is referred to as anonymous
const nonsenseWords = function() { // assigns value of anonymous function to nonsenseWords variable
    return 'scooooooby dooby doo';
}
// To call an anonymous function, we refer to the name of the variable in which it is housed
console.log(nonsenseWords); // prints => scooooooby dooby doo











