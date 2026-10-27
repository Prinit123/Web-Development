// Array Methods
// .push(element) - Adds an element to the end of an array.

// javascript
// Copy code
// let arr = [1, 2, 3];
// arr.push(4); // arr is now [1, 2, 3, 4]
// .pop() - Removes the last element from an array.

// javascript
// Copy code
// let arr = [1, 2, 3];
// arr.pop(); // arr is now [1, 2]
// .shift() - Removes the first element from an array.

// javascript
// Copy code

// let arr = [1, 2, 3];
// arr.shift(); // arr is now [2, 3]
// .unshift(element) - Adds an element to the beginning of an array.

// javascript
// Copy code
// let arr = [1, 2, 3];
// arr.unshift(0); // arr is now [0, 1, 2, 3]
// .concat(array) - Merges two or more arrays.

// javascript
// Copy code
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let newArr = arr1.concat(arr2); // newArr is [1, 2, 3, 4]
// .join(separator) - Joins all elements of an array into a string.

// javascript
// Copy code
// let arr = ['Hello', 'World'];
// let str = arr.join(' '); // str is "Hello World"
// .slice(start, end) - Returns a shallow copy of a portion of an array.

// javascript
// Copy code
// let arr = [1, 2, 3, 4];
// let newArr = arr.slice(1, 3); // newArr is [2, 3]
// .splice(start, deleteCount, ...items) - Modifies an array by removing or replacing elements.

// javascript
// Copy code
// let arr = [1, 2, 3, 4];
// arr.splice(0, 2); // arr is now [3, 4]
// console.log(arr);
// .map(callback) - Creates a new array with the results of calling a function on every element.

// javascript
// Copy code
// let arr = [1, 2, 3];
// let newArr = arr.map(x => x * 2); // newArr is [2, 4, 6]
// .filter(callback) - Creates a new array with all elements that pass the test.

// javascript
// Copy code
// let arr = [1, 2, 3, 4];
// let newArr = arr.filter(x => x > 2); // newArr is [3, 4]
// .reduce(callback, initialValue) - Reduces the array to a single value.

// javascript
// Copy code
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, x) => acc + x, 0); // sum is 10
console.log(sum);
