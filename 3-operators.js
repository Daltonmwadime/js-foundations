// An operator is a special symbol that performs an operation on one or more operands.
// In JavaScript, there are several types of operators, including:
// 1. Arithmetic operators: +, -, *, /, %, ++, --
// 2. Assignment operators: =, +=, -=, *=, /=, %=
// 3. Comparison operators: ==, ===, !=, !==, >, <, >=, <=
// 4. Logical operators: &&, ||, !
// 5. Bitwise operators: &, |, ^, ~, <<, >>, >>>
// 6. Ternary operator: ? :

//1. arithmetic operators: +, -, *, /, %, ++, --
// Arithmetic operators are used to perform mathematical operations on numbers.
//1.addition
console.log(5 + 3);
//2.subtraction
console.log(5 - 3);
//3.multiplication
console.log(5 * 3);
//4.division
console.log(5 / 3);
//5.modulus
console.log(5 % 3);
//6.increment
let x = 5;
x++;
console.log(x);
//7.decrement
let y = 5;
y--;
console.log(y);

// 2.assignment operators: =, +=, -=, *=, /=, %=
// Assignment operators are used to assign values to variables. They can also be combined with arithmetic operators to perform an operation and assignment in one step.
//1.assignment
let a = 5;
console.log(a);
//2.addition assignment
a += 3;
console.log(a);
//3.subtraction assignment
a -= 2; 
console.log(a);
//4.multiplication assignment
a *= 2;
console.log(a); 
//5.division assignment
a /= 2;
console.log(a);
//6.modulus assignment
a %= 3;
console.log(a);


 // 3.comparison operators: ==, ===, !=, !==, >, <, >=, <=
 // Comparison operators are used to compare two values and return a boolean result (true or false).
//1.greater than
console.log(5 > 3);
//2.less than
console.log(5 < 3);
//3.greater than or equal to
//OR at least one condition must be true.
console.log(5 >= 3);
console.log(4 >=4);
//4.less than or equal to
console.log(5 <= 3);
//5.(loosly)equal to
//.cares about the values.
console.log(5 == 5);
console.log(parseInt("two"));   
//6.not equal to
console.log(5 != 3);
//7.strict equal to
//.only cares about 
console.log(5 === 5);
//8.strict not equal to
console.log(5 !== 3);

// 4.logical operators: &&, ||, !
// Logical operators are used to combine multiple boolean expressions and return a boolean result based on the logic of the expressions.
//1.logical AND
//AND operator returns true if both operands are true, otherwise it returns false.
//In the case of true && false, the result is false because one of the operands is false.
//In the case of false && false, the result is also false because both operands are false.
//In the case of true && true, the result is true because both operands are true.
console.log(true && true);
console.log(true && false);
console.log(false && false);

//2.logical OR
//OR operator returns true if at least one of the operands is true, otherwise it returns false.
//In the case of true || false, the result is true because at least one of the operands is true.
//In the case of false || false, the result is false because both operands are false.
//In the case of true || true, the result is true because both operands are true.
console.log(true || false);
console.log(false || false);
console.log(true || true);

//3.logical NOT
//NOT operator returns the opposite boolean value of the operand.
//In the case of !true, the result is false because the NOT operator negates the true value.
//In the case of !false, the result is true because the NOT operator negates the false value.
console.log(!true);
console.log(!false);
//5. bitwise operators: &, |, ^, ~, <<, >>, >>>
// Bitwise operators are used to perform bit-level operations on binary numbers. They operate on the individual bits of the operands and return a new value based on the operation performed.
//1.bitwise AND
//The bitwise AND operator compares each bit of the first operand to the corresponding bit of the second operand. If both bits are 1, the corresponding result bit is set to 1. Otherwise, it is set to 0.
//In the case of 5 & 3, the binary representation of 5 is 101 and the binary representation of 3 is 011.
//The bitwise AND operation compares each bit of 5 and 3:
//1. The first bit (from the right) of 5 is 1 and the first bit of 3 is 1, so the result's first bit is 1.
console.log(5 & 3);
//2.bitwise OR
//The bitwise OR operator compares each bit of the first operand to the corresponding bit of the second operand. If either bit is 1, the corresponding result bit is set to 1. Otherwise, it is set to 0.
//In the case of 5 | 3, the binary representation of 5 is 101 and the binary representation of 3 is 011.
//The bitwise OR operation compares each bit of 5 and 3:
//1. The first bit (from the right) of 5 is 1 and the first bit of 3 is 1, so the result's first bit is 1.
//2. The second bit of 5 is 0 and the second bit of 3 is 1, so the result's second bit is 1.
//3. The third bit of 5 is 1 and the third bit of 3 is 0, so the result's third bit is 1.
console.log(5 | 3);
console.log(5 ^ 3);
//3.bitwise XOR
//The bitwise XOR operator compares each bit of the first operand to the corresponding bit of the second operand. If the bits are different, the corresponding result bit is set to 1. Otherwise, it is set to 0.
//In the case of 5 ^ 3, the binary representation of 5 is 101 and the binary representation of 3 is 011.
//The bitwise XOR operation compares each bit of 5 and 3:
//1. The first bit (from the right) of 5 is 1 and the first bit of 3 is 1, so the result's first bit is 1.
//2. The second bit of 5 is 0 and the second bit of 3 is 1, so the result's second bit is 1.
//3. The third bit of 5 is 1 and the third bit of 3 is 0, so the result's third bit is 1.
console.log(5 ^ 3);
console.log(~5);
//4.bitwise NOT
//The bitwise NOT operator takes a single operand and inverts all the bits of that operand. In other words, it changes all 1s to 0s and all 0s to 1s.
//In the case of ~5, the binary representation of 5 is 101. The bitwise NOT operation inverts each bit of 5:
//1. The first bit (from the right) of 5 is 1, so the result's first bit is 0.
//2. The second bit of 5 is 0, so the result's second bit is 1.
//3. The third bit of 5 is 1, so the result's third bit is 0.
console.log(~5);
//5.left shift
//The left shift operator shifts all bits of the first operand to the left by the number of positions specified by the second operand. The vacated bits on the right are filled with 0s.
//In the case of 5 << 1, the binary representation of 5 is 101. The left shift operation shifts all bits of 5 to the left by 1 position:
//1. The first bit (from the right) of 5 is 1, so it becomes the second bit of the result.
//2. The second bit of 5 is 0, so it becomes the third bit of the result.
//3. The third bit of 5 is 1, so it becomes the fourth bit of the result.
//4. The vacated first bit on the right is filled with 0.
console.log(5 << 1);
//6.right shift
//The right shift operator shifts all bits of the first operand to the right by the number of positions specified by the second operand. The vacated bits on the left are filled with 0s for unsigned right shift and with the sign bit (the leftmost bit) for signed right shift.
//In the case of 5 >> 1, the binary representation of 5 is 101. The right shift operation shifts all bits of 5 to the right by 1 position:
//1. The first bit (from the right) of 5 is 1, so it becomes the first bit of the result.
console.log(5 >> 1);
//7. unsigned right shift
//The unsigned right shift operator shifts all bits of the first operand to the right by the number of positions specified by the second operand. The vacated bits on the left are filled with 0s, regardless of the sign of the original number.
//In the case of 5 >>> 1, the binary representation of 5 is 101. The unsigned right shift operation shifts all bits of 5 to the right by 1 position:
//1. The first bit (from the right) of 5 is 1, so it becomes the first bit of the result.
//2. The second bit of 5 is 0, so it becomes the second bit of the result.
//3. The third bit of 5 is 1, so it becomes the third bit of the result.
//4. The vacated leftmost bit is filled with 0.
console.log(5 >>> 1);   
