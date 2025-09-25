// Function 

function addTwoNumbers(a, b){
    return a+b
}

function subNumbers(a, b){
    return a-b
}

function mulTwoNums(a, b){
    if(typeof a=='number' && typeof b =='number'){
        const result = a*b
        return result
    }
    console.log('Types are not correct')

   
    
}

function divideTwoNumbers(a, b){
    return a/b
}

const sum = addTwoNumbers('a' , 2)
const sub = subNumbers(3 , 'a')
const mul =mulTwoNums(2 ,2)
console.log(sum)
console.log(sub)

console.log(mul)

// console.log(sum+6)

// Substract, multiplication , division

// typeOf

const type = typeof(NaN)
console.log(type)

console.log(true)


// 