// Sum of all elements in an array

let numbers = [1 ,2 ,3 ,4,5 ,6]

// calulate the total Sum of Elements

// function calcluateSum(nums){
//     let sum = 0 // accumulator
//      for(let i=0 ; i<nums.length ; i++){
//        sum = sum+nums[i]
//      }
//      return sum
// }

// const finalSum = calcluateSum(numbers)
// console.log(finalSum)


// reduce

const reduceSum = numbers.reduce(function(acc , curr){
      acc = acc*curr
      return acc
})

console.log(reduceSum)




