// Objects - set of key and value pairs

const person = {
    sId: 1234, 
    name: 'Tauqeer',
    hobby:['Photography' , 'Football'] ,
    age : 19,
    ownsACar: true
}


// Object


// an Object for Captain America
let cap = {
    name : "Steve Rogers",
    age : 117,
    weapons : ['Vibranium Shield' , 'Superhuman Strength'],
    allies : ['Thor' , 'Tony Stark' , 'Bucky Barnes'],

    address:{
       country: "USA",
       stateCity : {
           state : "New York",
           city : 'brooklyn',
           pin : 123455
       }

    },

    isAvenger : true,

    capSaysHi : function(){
        console.log('Hi')
    }
}


// Access the object properties

// dot notation
console.log(cap.address.stateCity.city)

// bracket Notation
console.log(cap['weapons'])

// update something in obj
cap.isAvenger = false

cap.movies = ['Civil War' , 'Endgame' , 'First Avenger']

console.log(cap)

cap.capSaysHi()



