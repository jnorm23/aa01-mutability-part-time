/*
Write a function fibonacciSequence that accepts a number as an argument. The
function should return an array representing the fibonacci sequence up to the
given length. The first and second numbers of the sequence are 1 and 1. To
generate subsequent numbers of the sequence, we take the sum of the previous two
numbers of the sequence.
*/

// Your code here 
function fibonacciSequence(length) {
    if (length <= 0) {
        return [];
    } else if (length === 1) {
        return [1];
    }
    let sequence = [1, 1];
    for (let i = 2; i < length; i++) {
        let nextNum = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNum);
    }
    return sequence;
}

// console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
// console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
// console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
// console.log(fibonacciSequence(2));  // [ 1, 1 ]
// console.log(fibonacciSequence(1));  // [ 1 ]
// console.log(fibonacciSequence(0));  // [ ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = fibonacciSequence;