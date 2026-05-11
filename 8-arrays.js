// An array is an ordered collection of values that can be of any datatype. It is used to store multiple values in a single variable.
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
//In JavaScript, we can also use the Array.isArray() method to check if a variable is an array.
console.log(Array.isArray(numbers));
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits);
let mixedArray = [1, 'hello', true, null, undefined, { name: 'John' }, [1, 2, 3]];
console.log(mixedArray);
//In JavaScript, we can also use the Object.prototype.toString() method to get the internal [[Class]] property of an object, which can be used to determine the type of an object.
console.log(Object.prototype.toString.call(numbers));
console.log(Object.prototype.toString.call(fruits));
console.log(Object.prototype.toString.call(mixedArray));
//In JavaScript, we can also use the instanceof operator to check if an object is an instance of a particular class or constructor function.
console.log(numbers instanceof Array);
console.log(fruits instanceof Array);
console.log(mixedArray instanceof Array);
//In JavaScript, we can also use the constructor property to check the constructor function of an object.
console.log(numbers.constructor);
console.log(fruits.constructor);
console.log(mixedArray.constructor);
//In JavaScript, we can also use the typeof operator to check the datatype of a variable.
console.log(typeof numbers);
console.log(typeof fruits);
console.log(typeof mixedArray); 
//In JavaScript, we can also use the length property to get the number of elements in an array.
console.log(numbers.length);
console.log(fruits.length);
console.log(mixedArray.length);
//In JavaScript, we can also use the push() method to add elements to the end of an array.
numbers.push(6);
console.log(numbers);
fruits.push('grape');
console.log(fruits);
mixedArray.push('new element');
console.log(mixedArray);
//In JavaScript, we can also use the pop() method to remove the last element from an array.
numbers.pop();
console.log(numbers);
fruits.pop();
console.log(fruits);
mixedArray.pop();
console.log(mixedArray);
//In JavaScript, we can also use the shift() method to remove the first element from an array.  
numbers.shift();
console.log(numbers);
fruits.shift();
console.log(fruits);
mixedArray.shift();
console.log(mixedArray);
//In JavaScript, we can also use the unshift() method to add elements to the beginning of an array.
numbers.unshift(0);
console.log(numbers);
fruits.unshift('grape');
console.log(fruits);
mixedArray.unshift('new element');
console.log(mixedArray);
//In JavaScript, we can also use the indexOf() method to get the index of the first occurrence of an element in an array.
console.log(numbers.indexOf(3));
console.log(fruits.indexOf('banana'));
console.log(mixedArray.indexOf(true));
//In JavaScript, we can also use the slice() method to get a portion of an array as a new array.
console.log(numbers.slice(1, 4));
console.log(fruits.slice(0, 2));
console.log(mixedArray.slice(2, 5));
//In JavaScript, we can also use the splice() method to add or remove elements from an array.
numbers.splice(2, 1, 10);
console.log(numbers);
fruits.splice(1, 1, 'grape');
console
.log(fruits);
mixedArray.splice(3, 1, 'new element');
console.log(mixedArray);
//In JavaScript, we can also use the forEach() method to iterate over the elements of an array.
numbers.forEach(num => console.log(num));
fruits.forEach(fruit => console.log(fruit));
mixedArray.forEach(element => console.log(element));
//In JavaScript, we can also use the map() method to create a new array by applying a function to each element of an array.
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits);
let stringifiedMixedArray = mixedArray.map(element => String(element));
console.log(stringifiedMixedArray);




