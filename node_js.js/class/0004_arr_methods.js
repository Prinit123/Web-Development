// In JavaScript, arr refers to an array, and there is no built-in ll function. It is likely a typo for one of these common array methods
// filter(): Creates a new array with elements that pass a test.
// fill(): Changes all elements in an array to a static value.
// map(): Creates a new array by transforming every element.


//common methods

// filter(): Creates a new array with elements that pass a test.

const numbers = [1,2,3,4,45,6,7,87,90];
const bigNumbers = numbers.filter(num => num > 10);
console.log(bigNumbers); 

// fill(): Changes all elements in an array to a static value.
// The fill() method changes all elements in an existing array to a static value, modifying the original array.

const fruits = ['Apple', 'Banana', 'Orange'];
fruits.fill('Grape');
console.log(fruits); // Output: ['Grape', 'Grape', 'Grape']

// map(): Creates a new array by transforming every element.

const prices =[1,2,3,4,5];
const doubledPrices = prices.map(price => price * 2);
console.log(doubledPrices); 
