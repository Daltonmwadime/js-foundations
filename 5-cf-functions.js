//a function is a block of code that performs a specific task. It is a reusable piece of code that can be called multiple times with different arguments. Functions are defined using the function keyword, followed by the name of the function, and a set of parentheses that may contain parameters. The code to be executed is enclosed in curly braces.
//Functions can be used to perform a wide range of tasks, such as performing calculations, manipulating data, and handling events. They can also be used to create modular and organized code, making it easier to read and maintain.
//In JavaScript, functions can be defined in several ways, including function declarations, function expressions, and arrow functions. Each of these methods has its own syntax and use cases, but they all serve the same purpose of defining reusable blocks of code that can be executed when called.
//Function declaration 
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice"); // Output: Hello, Alice!
//Function expression
const add = function(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8
//Arrow function
const multiply = (a, b) => {
    return a * b;
}
console.log(multiply(4, 6)); // Output: 24
//In JavaScript, functions can also be used as first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions. This allows for powerful programming techniques such as higher-order functions and functional programming.
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]   

