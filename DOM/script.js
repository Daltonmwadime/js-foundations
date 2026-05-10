// ===============================
// STRING MANIPULATION FUNCTIONS
// ===============================

// 1. Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello")); 
// Output: "olleh"


// 2. Count Characters
function countCharacters(str) {
    return str.length;
}

console.log(countCharacters("JavaScript")); 
// Output: 10


// 3. Capitalize Words
function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(capitalizeWords("hello world from javascript"));
// Output: "Hello World From Javascript"



// ===============================
// ARRAY FUNCTIONS
// ===============================

// 4. Find Maximum
function findMaximum(arr) {
    return Math.max(...arr);
}

console.log(findMaximum([1, 5, 10, 3]));
// Output: 10


// 5. Find Minimum
function findMinimum(arr) {
    return Math.min(...arr);
}

console.log(findMinimum([1, 5, 10, 3]));
// Output: 1


// 6. Sum of Array
function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

console.log(sumArray([1, 2, 3, 4]));
// Output: 10


// 7. Filter Array
function filterArray(arr) {
    return arr.filter(num => num > 5);
}

console.log(filterArray([2, 4, 6, 8, 1]));
// Output: [6, 8]



// ===============================
// MATHEMATICAL FUNCTIONS
// ===============================

// 8. Factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));
// Output: 120


// 9. Prime Number Check
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));
// Output: true

console.log(isPrime(10));
// Output: false


// 10. Fibonacci Sequence
function fibonacci(n) {
    let sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
}

console.log(fibonacci(7));
// Output: [0, 1, 1, 2, 3, 5, 8]
