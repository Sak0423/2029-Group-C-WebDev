let str = 'Scaler School of Technology'


console.log(str)

console.log(str.length) //length of string
const slicedStr = str.slice(0 , 6)
console.log(slicedStr)


// toLowerCase and toUpperCase

const lowerStr = str.toLowerCase()

const upperStr = str.toUpperCase()

console.log(lowerStr)
console.log(upperStr)


// concat 

const str2 = 'scaler'
const str3 = 'school of technology'

// console.log(str2+" "+str3)

console.log(str2.concat(" " , str3))


// join and split

// join - Array -> String

const words = ['I' , 'Love' , 'JS']

const sentence = words.join(' ')

console.log(sentence)


// split - String -> Array

const sentence2 = 'I #love to #Code'


const arr = sentence2.split('@')
console.log(arr)


// replace , subString - Homework













