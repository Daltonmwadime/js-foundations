//A datatype is a classification of data which tells the compiler or interpreter how the programmer intends to use the data. It defines the type of data that can be stored in a variable, the operations that can be performed on that data, and the way the data is stored in memory.
//In JavaScript, there are 7 primitive datatypes and 1 non-primitive datatype.
//The primitive datatypes are: string, number, boolean, null, undefined, symbol, and bigint.
//The non-primitive datatype is: object.
//String is a sequence of characters enclosed in single quotes, double quotes, or backticks. It is used to represent text.
let name = "John";
let message = 'Hello, World!';
let greeting = `Welcome to JavaScript!`;    
//Number is a datatype that represents numeric values. It can be an integer or a floating-point number.
let age = 30;
let price = 19.99;
let temperature = -5;
//Boolean is a datatype that represents a logical value. It can be either true or false.
let isStudent = true;
let isEmployed = false;
//Null is a datatype that represents the absence of any value. It is used to indicate that a variable has no value.
let emptyValue = null;
//Undefined is a datatype that represents the absence of a value. It is used to indicate that a variable has not been assigned a value.
let uninitializedVariable;
console.log(uninitializedVariable);
//Symbol is a datatype that represents a unique identifier. It is used to create unique property keys for objects.          
let id = Symbol("id");
let nameSymbol = Symbol("name");
console.log(id === nameSymbol);
//BigInt is a datatype that represents integers with arbitrary precision. It is used to represent numbers that are too large to be represented by the Number datatype.
let bigIntValue = 1234567890123456789012345678901234567890n;
console.log(bigIntValue);   
//Object is a non-primitive datatype that represents a collection of key-value pairs. It is used to store and manipulate data in a structured way.
let person = {
    name: "John",   
    age: 30,
    isStudent: true
};
console.log(person);    
//In JavaScript, we can also use the typeof operator to check the datatype of a variable.
console.log(typeof name);   
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof emptyValue);
console.log(typeof uninitializedVariable);
console.log(typeof id);
console.log(typeof bigIntValue);
console.log(typeof person);
//In JavaScript, we can also use the instanceof operator to check if an object is an instance of a particular class or constructor function.
console.log(person instanceof Object);
//In JavaScript, we can also use the Array.isArray() method to check if a variable is an array.
let numbers = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbers));    
//In JavaScript, we can also use the Object.prototype.toString() method to get the internal [[Class]] property of an object, which can be used to determine the type of an object.
console.log(Object.prototype.toString.call(name));
console.log(Object.prototype.toString.call(age));
console.log(Object.prototype.toString.call(isStudent));
console.log(Object.prototype.toString.call(emptyValue));
console.log(Object.prototype.toString.call(uninitializedVariable));
console.log(Object.prototype.toString.call(id));
console.log(Object.prototype.toString.call(bigIntValue));
console.log(Object.prototype.toString.call(person));    
//In JavaScript, we can also use the instanceof operator to check if an object is an instance of a particular class or constructor function.
console.log(name instanceof String);
console.log(age instanceof Number); 
console.log(isStudent instanceof Boolean);
console.log(emptyValue instanceof Null);
console.log(uninitializedVariable instanceof Undefined);
console.log(id instanceof Symbol);
console.log(bigIntValue instanceof BigInt);
console.log(person instanceof Object);  
//In JavaScript, we can also use the constructor property to check the constructor function of an object.
console.log(name.constructor);
console.log(age.constructor);       
console.log(isStudent.constructor);
console.log(emptyValue.constructor);
console.log(uninitializedVariable.constructor);
console.log(id.constructor);
console.log(bigIntValue.constructor);
console.log(person.constructor);
//In JavaScript, we can also use the Object.prototype.toString() method to get the internal [[Class]] property of an object, which can be used to determine the type of an object.
console.log(Object.prototype.toString.call(name));
console.log(Object.prototype.toString.call(age));   
console.log(Object.prototype.toString.call(isStudent));
console.log(Object.prototype.toString.call(emptyValue));
console.log(Object.prototype.toString.call(uninitializedVariable));
console.log(Object.prototype.toString.call(id));
console.log(Object.prototype.toString.call(bigIntValue));
console.log(Object.prototype.toString.call(person));
//In JavaScript, we can also use the typeof operator to check the datatype of a variable.
console.log(typeof name);   
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof emptyValue);
console.log(typeof uninitializedVariable);
console.log(typeof id);
console.log(typeof bigIntValue);
console.log(typeof person);
//In JavaScript, we can also use the instanceof operator to check if an object is an instance of a particular class or constructor function.
console.log(name instanceof String);
console.log(age instanceof Number); 
console.log(isStudent instanceof Boolean);
console.log(emptyValue instanceof Null);
console.log(uninitializedVariable instanceof Undefined);
console.log(id instanceof Symbol);
console.log(bigIntValue instanceof BigInt);
console.log(person instanceof Object);
//In JavaScript, we can also use the constructor property to check the constructor function of an object.
console.log(name.constructor);
console.log(age.constructor);       
console.log(isStudent.constructor); 
console.log(emptyValue.constructor);
console.log(uninitializedVariable.constructor);
console.log(id.constructor);
console.log(bigIntValue.constructor);
console.log(person.constructor);
