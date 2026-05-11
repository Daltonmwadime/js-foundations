// loops are used to repeat a block of code until a certain condition is met. There are several types of loops in JavaScript, including for loops, while loops, and do-while loops.

// The for loop is used to execute a block of code a specific number of times. The syntax for a for loop is as follows:
for (initialization; condition; increment) {
    // code to be executed
}
// The while loop is used to execute a block of code as long as a specified condition is true. The syntax for a while loop is as follows:
while (condition) {
    // code to be executed
}
// The do-while loop is similar to the while loop, but it guarantees that the code block will be executed at least once, even if the condition is false. The syntax for a do-while loop is as follows:
do {
    // code to be executed
} while (condition);
// In JavaScript, loops are essential for performing repetitive tasks, such as iterating over arrays, processing data, and creating dynamic content. They allow developers to write efficient and concise code that can handle a wide range of scenarios and user interactions.
 // Example of a for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Example of a while loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}   
// Example of a do-while loop
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);    
// In JavaScript, we can also use the for...of loop to iterate over iterable objects such as arrays, strings, and maps. The syntax for a for...of loop is as follows:
for (variable of iterable) {
    // code to be executed
}   
// Example of a for...of loop
let array = [1, 2, 3, 4, 5];
for (let value of array) {
    console.log(value);
}
// In JavaScript, we can also use the for...in loop to iterate over the properties of an object. The syntax for a for...in loop is as follows:
for (variable in object) {
    // code to be executed
}   
// Example of a for...in loop
let person = {
    name: "John",
    age: 30,
    isStudent: true
};  
for (let key in person) {
    console.log(key + ": " + person[key]);
}   
// In JavaScript, we can also use the break statement to exit a loop prematurely, and the continue statement to skip the current iteration and move on to the next one. The syntax for the break and continue statements is as follows:
// break statement
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // exit the loop when i is 5
    }
    console.log(i);
}
// continue statement
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {  
        continue; // skip even numbers
    }
    console.log(i);
}

  
