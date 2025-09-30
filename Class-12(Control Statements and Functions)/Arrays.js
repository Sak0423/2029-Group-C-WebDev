// Arrays
let arr = [1 ,2 ,3,4 ,5 , 'scaler' , true , null , undefined]



let cars=['BMW' , "Pajero" , "Alto"]


// access an element

// console.log(cars[1])

// modify the array - basic Array Methods

// If you want to add some value at the end of an Array

// push
// cars.push('Nano')

// pop - remove element from the end

// const pop1 = cars.pop()
// console.log(pop1)
// // cars.pop()
// // cars.pop()
// console.log(cars)

// shift , unshift

console.log(cars)

// shift

cars.shift()
console.log(cars)

// unShift

cars.unshift('Mercedes')
console.log(cars)


// splice and slice

let arr1 = [1 ,2 ,3 ,4 ,5 ,6]

const slicedArr = arr1.slice(1 ,5)

console.log(slicedArr)
console.log(arr1)

// const fruits = ['cherry' , 'apple' , 'banana' ,'orange']

// const slicedFruits = fruits.slice(1 ,3)
// console.log(slicedFruits)


// Splice

const fruits = ['cherry' , 'apple' , 'banana' ,'orange', 'papaya']

const splicedElements = fruits.splice(1 , 4 , 'Mango' , "Kiwi")
console.log(splicedElements)

console.log(fruits)













