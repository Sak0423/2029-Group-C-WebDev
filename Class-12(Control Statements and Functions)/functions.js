// Function 

// function addTwoNumbers(a, b){
//     return a+b
// }

// function subNumbers(a, b){
//     return a-b
// }

// function mulTwoNums(a, b){
//     if(typeof a=='number' && typeof b =='number'){
//         const result = a*b
//         return result
//     }
//     console.log('Types are not correct')

   
    
// }

// function divideTwoNumbers(a, b){
//     return a/b
// }

// const sum = addTwoNumbers('a' , 2)
// const sub = subNumbers(3 , 'a')
// const mul =mulTwoNums(2 ,2)
// console.log(sum)
// console.log(sub)

// console.log(mul)

// // console.log(sum+6)

// // Substract, multiplication , division

// // typeOf

// const type = typeof(NaN)
// console.log(type)

// console.log(true)



// functions as first Class Citizens
function addTwoNumbers(a, b){
    return a+b
}

// functions as expressions
let addTwo = function(c , d){
   return c+d
} 
const sumTraditonal = addTwoNumbers(2 ,4)
const sumExpression = addTwo(5 , 6)






console.log('sumTraditonal -> ' , sumTraditonal)
console.log('sumExpression -> ' , sumExpression)


