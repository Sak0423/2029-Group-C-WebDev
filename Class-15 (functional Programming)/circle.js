let myRadiusArray = [1, 2, 3, 4, 5, 6];

// Caclulate area , cirumference, diameter
// write functions that calcluates these values
// return a new array
// you have 7-8 mins to do this

function calculateCircumference(radiusArr) {
  let result = [];

  for (let i = 0; i < radiusArr.length; i++) {
    result.push(2 * 3.14 * radiusArr[i]);
  }

  return result;
}

function calculateArea(radiusArr) {
  let result = [];

  for (let i = 0; i < radiusArr.length; i++) {
    result.push(3.14 * radiusArr[i] * radiusArr[i]);
  }

  return result;
}

function calculateDiameter(radiusArr) {
  let result = [];

  for (let i = 0; i < radiusArr.length; i++) {
    result.push(2 * radiusArr[i]);
  }

  return result;
}

const circumferences = calculateCircumference(myRadiusArray);
const areas = calculateArea(myRadiusArray);
const diameters = calculateDiameter(myRadiusArray);
console.log(circumferences);
console.log(areas);
console.log(diameters);

console.log(myRadiusArray);
