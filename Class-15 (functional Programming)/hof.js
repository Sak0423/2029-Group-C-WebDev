let myRadiusArray = [1, 2, 3, 4, 5, 6];

// Caclulate area , cirumference, diameter
// write functions that calcluates these values
// return a new array
// you have 7-8 mins to do this

function diameter(radius){
   return radius*2
}

function area(radius){
   return 3.14*radius*radius
}

function circumference(radius){
  return 2*3.14*radius
}

// function calcluate(radiusArr , cb){
//      let result = [];

//   for (let i = 0; i < radiusArr.length; i++) {
//     result.push(cb(radiusArr[i]));
//   }

//   return result;
// }


 // Homework

const diameters = calcluate(myRadiusArray , diameter)
const areas = calcluate(myRadiusArray , area)
const circumferences=calcluate(myRadiusArray ,circumference)

console.log(diameters)
console.log(areas)
console.log(circumferences)

console.log(myRadiusArray)