// Filter Method - conditions

// check for Even
let numbers = [1, 2, 3, 4, 5, 6];

// function checkEven(arr) {
//   let evenArr = [];

//   for (let i = 0; i < numbers.length; i++) {
//     if (arr[i] % 2 == 0) {
//       evenArr.push(arr[i]);
//     }
//   }

//   return evenArr;
// }

// const evenNums = checkEven(numbers);
// console.log(evenNums);



// do this with filter

const evenNums = numbers.filter(function(num){
    return num%2==0
})

console.log(evenNums)


