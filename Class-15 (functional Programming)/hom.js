// calulate squares and cubes of these numbers

// function calcluate(nums, cb) {
//   let result = [];

//   for (let i = 0; i < nums.length; i++) {
//     result.push(cb(nums[i]));
//   }
//   return result;
// }

// const sqaures = calcluate(numbers , sqaure)
// console.log(sqaures)

let numbers = [1, 2, 3, 4, 5, 6];

function sqaure(num) {
  return num * num;
}

function cube(num) {
  return num * num * num;
}

// map
// creates a new array
// has an inbuilt loop
// returns the data in new Array
// This is for operations

const squares = numbers.map(cube);

console.log(squares);

// Transcations in Dollars
const transactions = [20 , 40 , 10 , 15 , 80 , -90 , -10]

// convert these trancatios into INR with using map







