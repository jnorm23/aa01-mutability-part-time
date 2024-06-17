/*
Define a function called selectElementsInRange that takes in three parameters.
The first parameter should be an array. The second parameter should be a
starting number in a range of indices, and the third parameter should be the
ending number in the range. The function should return all elements that have
indices within the range of indices defined by the starting and ending numbers,
inclusive.
*/

// Your code here 
function selectElementsInRange(arr, startIdx, endIdx) {
    if (!Array.isArray(arr) || typeof startIdx !== 'number' || typeof endIdx !== 'number') {
        return [];
    }
    if (startIdx < 0) startIdx = 0;
    if (endIdx >= arr.length) endIdx = arr.length - 1;
    const selectedElements = arr.slice(startIdx, endIdx + 1);
    return selectedElements;
}


// console.log(selectElementsInRange([1, 2, 3], 0, 1));        // [1, 2]
// console.log(selectElementsInRange([2, 6, 9, 3, 1], 0, 3));  // [2, 6, 9, 3]
// console.log(selectElementsInRange([7, 9, 10, 4, 5], 2, 4)); // [10, 4, 5]

/******************* DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = selectElementsInRange;