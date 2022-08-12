'use strict'

////////////////////////////////// Arrays

// Slice method: to extract sub array
let array1 = [1,2,3,4,5];
console.log(...array1); // 1,2,3,4,5 // Using spread op
console.log(array1.slice(1,3)); // [2,3] (start index: 1 , end index: 2)
console.log(array1.slice(2)); // [4,5] (start index: 2 , end index: 4)
console.log(array1.slice(-2)); // [4,5] (start index: 3 , end index: 4)

// Splice method: to delete elements
// First argument is starting index and second is (how many elements has to delete)
array1.splice(-1); // Delete last element
console.log(...array1); // 1 2 3 4
array1.splice(0,2); // Delete last elementfirst two
console.log(...array1); // 3 4

// At method: to add get element by index
let cars = ['Honda', 'Toyota', 'BMW', 'Mercedes']
console.log(cars.at(-1)); // Mercedes
console.log(cars[-1]); // Undefined
// Diff between at() and [] is that [] not works with negatives as shown above


let departments = ["CS", "Maths", "Chemistry", "Physics", "Stats"];

// forOf method: to loop over array
for(const dept of departments){
    console.log(dept);
}

// forEach method: to loop over array (Same as forOf but easy syntax)
departments.forEach(function(dept){
    console.log(dept);
})

// Filter method
// To filter array on basis of some criteria
const numbers = [10, 5, 15, -2, 20, -8, -6];
const posNumbers = numbers.filter(function(n) {
    return n >= 0;
});
const negNumbers = numbers.filter(function(n) {
    return n < 0;
});
console.log(...numbers); // 10 5 15 -2 20 -8 -6
console.log(...posNumbers); // 10 5 15 20
console.log(...negNumbers); // -2 -8 -6

// Map method 
// Use to convert values to another values
const meters = [1, 5, 10, 15, 20];
const centiMeters = meters.map(function(n){
    return n * 100;
}); 
console.log(...meters); // 1 5 10 15 20
console.log(...centiMeters); // 100 500 1000 1500 2000

// Flat method
// Use to convert nested array into 1 level flat array
// Has a parameter of integer, number of levels
const matrix = [[1,2,3], [4,5,6], [7,8,9]];
const flatArray = matrix.flat();
console.log(matrix); // [[1,2,3], [4,5,6], [7,8,9]]
console.log(flatArray); // [1,2,3,4,5,6,7,8,9]

// Reduce method
/*
The reduce() method executes a reducer function for array element.
The reduce() method returns a single value: the function's accumulated result.
The reduce() method does not execute the function for empty array elements.
The reduce() method does not change the original array.
*/

const values = [1,2,3,4,5];
const total = values.reduce(function(prev, curr){
    return prev + curr;
});
console.log(total); // 15