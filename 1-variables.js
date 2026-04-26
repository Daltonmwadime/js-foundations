//A variable is a container for storing data values
//In JS, we have 3 ways to declare a variable
// var, let, const 
// var is the old way to declare a variable; it is function-scoped and can be re-declared and updated
// let is the new way to declare a variable; it is block-scoped and can be updated, but not re-declared
// const is the new way to declare a variable; it is block-scoped and cannot be updated or re-declared  
// to declare a variable, we use the keyword followed by the variable name, and then we can assign a value to it
// the variable name can be any valid identifier, it can contain letters, numbers, underscores and dollar signs, but it cannot start with a number
// the variable name should be meaningful and should not be a reserved keyword
// example of declaring a variable
var name = "John";
let age = 30;
const PI = 3.14;
//We can also declare a variable without assigning a value to it; in that case, the variable will have the value of undefined
var city;
console.log(name);
console.log(age);
console.log(PI);
console.log(city);
//We can also declare multiple variables in one line
var firstName = "John", lastName = "Doe", country = "USA";
console.log(firstName);
console.log(lastName);
console.log(country);
//We can also declare a variable without using the var, let or const keyword, but it is not recommended as it will create a global variable
myVariable = "This is a global variable";
console.log(myVariable);
// in strict mode, we cannot declare a variable without using the var, let or const keyword
// to enable strict mode, we can add "use strict" at the beginning of the script
"use strict";
// myStrictVariable = "This will cause an error"; // Uncaught ReferenceError: myStrictVariable is not defined       
//In strict mode, we cannot use a variable before declaring it
// console.log(myStrictVariable); // Uncaught ReferenceError: myStrictVariable is not defined
// var myStrictVariable = "This will cause an error"; // Uncaught ReferenceError: myStrictVariable is not defined
//In strict mode, we cannot delete a variable
// delete myStrictVariable; // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode// in strict mode, we cannot duplicate a variable name in the same scope
// var myStrictVariable = "This will cause an error"; // Uncaught SyntaxError: Identifier 'myStrictVariable' has already been declared  
// in strict mode, we cannot use reserved keywords as variable names
// var let = "This will cause an error"; // Uncaught SyntaxError: Unexpected identifier     
// in strict mode, we cannot use octal literals
// var octal = 0123; // Uncaught SyntaxError: Octal literals are not allowed in strict mode 
// in strict mode, we cannot use the with statement
// with (Math) { // Uncaught SyntaxError: Strict mode code may not include a with statement
//     var x = cos(2);
// }   
//In strict mode, we cannot use eval to create variables
// eval("var evalVariable = 'This will cause an error';"); // Uncaught SyntaxError: Unexpected identifier   
// in strict mode, we cannot use arguments.callee to refer to the current function
// function myFunction() {
//     console.log(arguments.callee); // Uncaught TypeError: Cannot read property 'callee' of undefined
// }
//In strict mode, we cannot use arguments. caller to refer to the caller function
// function myFunction() {
//     console.log(arguments.caller); // Uncaught TypeError: Cannot read property 'caller' of undefined 
// }
//In strict mode, we cannot use the delete operator on variables
// var myVariable = "This will cause an error";
// delete myVariable; // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode   
//In strict mode, we cannot use the delete operator on functions
// function myFunction() {
//     console.log("This will cause an error");
// }
// delete myFunction; // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode   
//In strict mode, we cannot use the delete operator on function arguments
// function myFunction(arg) {
//     delete arg; // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode
// }    
//In strict mode, we cannot use the delete operator on function parameters
// function myFunction(param) {
//     delete param; // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode
// }
// in strict mode, we cannot use the delete operator on function declarations
// function myFunction() {
//     console.log("This will cause an error");
// }
// delete myFunction; // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode
// in strict mode, we cannot use the delete operator on variable declarations
// var myVariable = "This will cause an error";
// delete myVariable; // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode
//In strict mode, we cannot use the delete operator on variable assignments
// var myVariable = "This will cause an error";
// delete myVariable; // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode
//In strict mode, we cannot use the delete operator on variable references
// var myVariable = "This will cause an error";
// delete myVariable; // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode
//In strict mode, we cannot use the delete operator on variable properties
// var myObject = { myProperty: "This will cause an error" };
// delete myObject.myProperty; // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode
// in strict mode, we cannot use the delete operator on variable methods
// var myObject = { myMethod: function() { console.log("This will cause an error"); } };
// delete myObject.myMethod; // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode
// in strict mode, we cannot use the delete operator on variable prototypes
// function MyConstructor() {
//     this.myProperty = "This will cause an error";
// }
// delete MyConstructor.prototype; // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode
//In strict mode, we cannot use the delete operator on variable instances
// function MyConstructor() {
//     this.myProperty = "This will cause an error";
// }// var myInstance = new MyConstructor();
// delete myInstance; // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode
// in strict mode, we cannot use the delete operator on variable classes
// class MyClass {
//     constructor() {}
// }
// delete MyClass; // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode
// in strict mode, we cannot use the delete operator on variable modules
// import * as myModule from './myModule.js';
// delete myModule; // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode     
